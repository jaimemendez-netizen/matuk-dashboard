// MATUK · descifra en el navegador las páginas protegidas del sitio.
// Las páginas viajan cifradas (enc/*.enc); este service worker las entrega
// descifradas solo si en este navegador ya se ingresó la contraseña.
const PROTEGIDOS = new Set(["index.html", "dashboard.html", "dashboard_pagos.html", "valores.html", "cuentas_por_pagar.html", "data.json"]);
let llave = null;

function abrirDB() {
  return new Promise((ok, mal) => {
    const r = indexedDB.open("matuk-acceso", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("k");
    r.onsuccess = () => ok(r.result);
    r.onerror = () => mal(r.error);
  });
}
async function leerLlave() {
  if (llave) return llave;
  try {
    const db = await abrirDB();
    llave = await new Promise(ok => {
      const q = db.transaction("k").objectStore("k").get("llave");
      q.onsuccess = () => ok(q.result || null);
      q.onerror = () => ok(null);
    });
  } catch (e) { llave = null; }
  return llave;
}
async function borrarLlave() {
  llave = null;
  try {
    const db = await abrirDB();
    await new Promise(ok => {
      const t = db.transaction("k", "readwrite");
      t.objectStore("k").delete("llave");
      t.oncomplete = ok; t.onerror = ok;
    });
  } catch (e) {}
}
const tipo = n => n.endsWith(".json") ? "application/json; charset=utf-8" : "text/html; charset=utf-8";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("message", e => { if (e.data === "llave-nueva") llave = null; });

self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  const base = new URL(self.registration.scope).pathname;
  if (!u.pathname.startsWith(base)) return;
  const nombre = decodeURIComponent(u.pathname.slice(base.length)) || "index.html";
  if (nombre === "salir.html") {
    e.respondWith(borrarLlave().then(() => Response.redirect(new URL("index.html", self.registration.scope).href, 302)));
    return;
  }
  if (!PROTEGIDOS.has(nombre)) return;
  e.respondWith(servir(e.request, nombre));
});

async function acceso(req, nombre) {
  // Sin contraseña: la portada muestra el formulario; lo demás manda a la portada.
  if (nombre === "index.html") return fetch(new URL("index.html", self.registration.scope).href, { cache: "no-store" });
  if (req.mode === "navigate") return Response.redirect(new URL("index.html", self.registration.scope).href, 302);
  return new Response("Acceso restringido", { status: 401 });
}

async function servir(req, nombre) {
  const k = await leerLlave();
  if (!k) return acceso(req, nombre);
  if (req.method === "HEAD") return new Response(null, { status: 200, headers: { "Content-Type": tipo(nombre) } });
  const r = await fetch(new URL("enc/" + nombre + ".enc?v=" + Date.now(), self.registration.scope).href, { cache: "no-store" });
  if (!r.ok) return new Response("No encontrado", { status: 404 });
  const b = await r.arrayBuffer();
  try {
    const plano = await crypto.subtle.decrypt({ name: "AES-GCM", iv: new Uint8Array(b, 0, 12) }, k, new Uint8Array(b, 12));
    return new Response(plano, { headers: { "Content-Type": tipo(nombre), "Cache-Control": "no-store" } });
  } catch (e) {
    await borrarLlave();            // la contraseña cambió: hay que volver a entrar
    return acceso(req, nombre);
  }
}
