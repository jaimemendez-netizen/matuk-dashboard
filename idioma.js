/* ============================================================
   MATUK · Cambio de idioma Español / English
   - Traduce el texto visible, atributos (placeholder, title…),
     gráficas Chart.js y SVG de la página y de sus iframes.
   - Recuerda la elección (localStorage "matuk-idioma").
   - Los datos (nombres de clientes, montos) no se traducen.
   ============================================================ */
(function () {
  "use strict";
  if (window.MATUK_I18N) return;
  var CLAVE = "matuk-idioma";
  var SRC = (document.currentScript && document.currentScript.src) || "idioma.js";

  /* ---------- Diccionario: frases (se usan completas y dentro de textos más largos) ---------- */
  var FRASES = {
    // Inicio / navegación
    "Centro de información": "Information center",
    "Pasa el cursor sobre una opción y el robot la seguirá": "Hover over an option and the robot will follow it",
    "Robot listo · elige una opción": "Robot ready · choose an option",
    "Toca para ver más →": "Tap to see more →",
    "Toca para regresar": "Tap to go back",
    "Regresar a la pantalla de inicio": "Back to home screen",
    "Cambiar tema claro/oscuro": "Toggle light/dark theme",
    "Automatización industrial": "Industrial automation",
    "Resumen Ejecutivo": "Executive Summary",
    "Reporte de Servicio": "Service Report",
    "(Administración)": "(Administration)",
    "Cuentas por Pagar": "Accounts Payable",
    "Lo que nos define": "What defines us",
    "Nuestros": "Our",
    "Valores": "Values",
    "Dashboard Operacional 2026": "Operations Dashboard 2026",
    "Uso interno": "Internal use",
    "Fuente:": "Source:",
    "Inicio": "Home",
    "Horas, recursos y facturación": "Hours, resources and billing",
    "Costos, pasivos y flujo de caja": "Costs, liabilities and cash flow",
    "Lo que guía nuestra forma de trabajar con clientes y colaboradores. Toca cada tarjeta para ver qué significa en el día a día.":
      "What guides the way we work with clients and team members. Tap each card to see what it means day to day.",
    // Valores
    "Hacemos lo correcto": "We do the right thing",
    "Actuamos con honestidad y transparencia, aun cuando nadie nos está viendo.": "We act with honesty and transparency, even when no one is watching.",
    "Contribuimos con la felicidad de nuestros clientes y colaboradores": "We contribute to the happiness of our clients and team members",
    "Procuramos que cada persona que trabaja con nosotros o para nosotros tenga una experiencia positiva.": "We make sure everyone who works with us or for us has a positive experience.",
    "Creamos relaciones ganar-ganar a largo plazo": "We build long-term win-win relationships",
    "Buscamos acuerdos donde clientes, colaboradores y MATUK crecen juntos, pensando en la relación de años y no en un solo proyecto.":
      "We seek agreements where clients, team members and MATUK grow together, thinking of a relationship that lasts years, not a single project.",
    "Buscamos acuerdos donde clientes, colaboradores y MATUK crecen juntos, pensando en la relación de años y no en una sola venta.":
      "We seek agreements where clients, team members and MATUK grow together, thinking of a relationship that lasts years, not a single sale.",
    "Potencializamos el liderazgo de la gente": "We empower people's leadership",
    "Impulsamos que cada colaborador desarrolle su talento, tome la iniciativa y crezca con nosotros.": "We encourage every team member to develop their talent, take initiative and grow with us.",
    "Tenemos un alto sentido de urgencia": "We have a strong sense of urgency",
    "Respondemos rápido y con prioridad: el tiempo de nuestros clientes en planta es valioso y lo cuidamos.": "We respond quickly and with priority: our clients' time on the plant floor is valuable and we protect it.",
    "Trabajamos con pasión": "We work with passion",
    "Disfrutamos lo que hacemos y lo reflejamos en la calidad de cada servicio que entregamos.": "We enjoy what we do and it shows in the quality of every service we deliver.",
    "Vemos por el Bien común": "We look out for the common good",
    "Tomamos decisiones pensando en el beneficio del equipo, de los clientes y de la comunidad.": "We make decisions with the team, our clients and the community in mind.",
    // Encabezados de módulos
    "Registro de Horas": "Hours Log",
    "Registro de": "Hours",
    "Facturación": "Billing",
    "Costos por": "Costs by",
    "Mes 2026": "Month 2026",
    "Flujo de Caja": "Cash Flow",
    "Flujo de": "Cash",
    "Caja 2026": "Flow 2026",
    "Ejecutivo 2026": "Summary 2026",
    "Servicio 2026": "Report 2026",
    "Reporte de": "Service",
    "Resumen financiero": "Financial summary",
    "Resumen": "Summary",
    "Consolidado": "Consolidated",
    "Tendencia de horas, recursos activos y top 10 de recursos": "Hours trend, active resources and top 10 resources",
    "Comparativo anual · tendencia, clientes y servicios": "Year-over-year · trend, clients and services",
    "Tendencia, clientes y servicios": "Trend, clients and services",
    "Desglose de costo de horas por divisa — USD y MXN — con detalle por proveedor.": "Hours cost breakdown by currency — USD and MXN — with detail by supplier.",
    "Desglose de costo de horas por divisa — USD y MXN — con detalle por cliente.": "Hours cost breakdown by currency — USD and MXN — with detail by client.",
    "Ingresos, egresos y saldo final de bancos por mes — MXN y USD.": "Income, expenses and ending bank balance by month — MXN and USD.",
    "Resumen financiero · Ingresos, egresos y flujo de caja": "Financial summary · Income, expenses and cash flow",
    "Seguimiento mensual de horas estándar, overtime y doble tiempo.": "Monthly tracking of standard, overtime and double-time hours.",
    "Métricas clave del": "Key metrics for the",
    "Indicadores Clave": "Key Indicators",
    "Indicadores Operativos — Horas": "Operating Indicators — Hours",
    "Indicadores clave del año": "Key indicators of the year",
    "ADMINISTRACIÓN": "ADMINISTRATION",
    "REPORTE OPERACIONAL": "OPERATIONS REPORT",
    "ANÁLISIS COMPARATIVO": "COMPARATIVE ANALYSIS",
    "KPIs PRINCIPALES": "MAIN KPIs",
    "REPORTE COSTOS": "COSTS REPORT",
    "DETALLE POR MES": "DETAIL BY MONTH",
    "FLUJO DE CAJA": "CASH FLOW",
    "HISTORIAL DE PASIVOS": "LIABILITIES HISTORY",
    "REPORTE DE FACTURACIÓN": "BILLING REPORT",
    "ANÁLISIS GRÁFICO": "CHART ANALYSIS",
    "RESUMEN EJECUTIVO": "EXECUTIVE SUMMARY",
    // Filtros
    "Periodo a comparar": "Period to compare",
    "Solo 2026": "2026 only",
    "Vista": "View",
    "Periodo": "Period",
    "Cliente": "Client",
    "Clientes": "Clients",
    "Servicio": "Service",
    "Divisa": "Currency",
    "Moneda": "Currency",
    "Año": "Year",
    "Todos": "All",
    "TODOS": "ALL",
    "Filtrar por mes:": "Filter by month:",
    "FILTRAR POR MES:": "FILTER BY MONTH:",
    "Filtrar": "Filter",
    "Agrupar por:": "Group by:",
    "AGRUPAR POR:": "GROUP BY:",
    "Agrupar por": "Group by",
    "Ver en": "View in",
    "Proveedor": "Supplier",
    "Proveedores": "Suppliers",
    "Buscar cliente, PO o servicio...": "Search client, PO or service...",
    "Buscar cliente, PO o servicio…": "Search client, PO or service…",
    "Buscar proveedor, PO o servicio...": "Search supplier, PO or service...",
    "DESCARGAR TABLA": "DOWNLOAD TABLE",
    "Descargar tabla completa a Excel": "Download full table to Excel",
    "⬇ Descargar CSV": "⬇ Download CSV",
    "Actualizado:": "Updated:",
    "Datos al:": "Data as of:",
    "Cargando datos…": "Loading data…",
    // KPIs Horas
    "Horas acumuladas": "Cumulative hours",
    "Horas 2025 vs 2026": "Hours 2025 vs 2026",
    "Crecimiento horas": "Hours growth",
    "CRECIMIENTO HORAS": "HOURS GROWTH",
    "Recursos promedio/mes": "Avg. resources/month",
    "Recursos activos": "Active resources",
    "Recursos Activos": "Active Resources",
    "RECURSOS ACTIVOS": "ACTIVE RESOURCES",
    "en el mismo periodo": "in the same period",
    "HORAS TRABAJADAS": "HOURS WORKED",
    "horas trabajadas": "hours worked",
    "Tendencia de horas": "Hours trend",
    "Horas trabajadas por mes": "Hours worked per month",
    "Horas trabajadas": "Hours worked",
    "tendencia 2026:": "2026 trend:",
    "al alza": "upward",
    "a la baja": "downward",
    "línea punteada = tendencia": "dotted line = trend",
    "Horas por cliente": "Hours by client",
    "Horas por servicio": "Hours by service",
    "Horas por recurso": "Hours by resource",
    "Horas por mes": "Hours per month",
    "Horas por Mes": "Hours per Month",
    "Tendencia de recursos activos": "Active resources trend",
    "Personas con horas registradas en cada mes": "People with hours logged each month",
    "Personas con horas": "People with hours",
    "Top 10 recursos más activos": "Top 10 most active resources",
    "Ordenados por horas trabajadas en": "Sorted by hours worked in",
    "Ordenado por horas": "Sorted by hours",
    "% de las horas": "% of hours",
    "% del periodo": "% of period",
    "% del total": "% of total",
    "Máximo:": "Max:",
    "Mínimo:": "Min:",
    "Promedio:": "Average:",
    "Alta:": "High:",
    "Baja:": "Low:",
    "Diferencia": "Difference",
    "Crecimiento": "Growth",
    "Tendencia 2025": "Trend 2025",
    "Tendencia 2026": "Trend 2026",
    "Tendencia:": "Trend:",
    "Comparativo mes a mes": "Month-over-month comparison",
    "Cada mes de 2026 contra el mismo mes de 2025": "Each month of 2026 vs. the same month of 2025",
    "encima de cada par, el crecimiento %": "above each pair, the growth %",
    // Facturación
    "Facturación acumulada": "Cumulative billing",
    "Crecimiento anual": "Annual growth",
    "CRECIMIENTO ANUAL": "ANNUAL GROWTH",
    "FACTURADO": "BILLED",
    "POR COBRAR": "RECEIVABLE",
    "Tendencia de facturación mensual": "Monthly billing trend",
    "Ingreso total sin IVA por mes de factura": "Total revenue excl. VAT by invoice month",
    "Ingreso sin IVA (USD) por mes de factura": "Revenue excl. VAT (USD) by invoice month",
    "USD · ingreso sin IVA": "USD · revenue excl. VAT",
    "solo facturas INVOICED": "INVOICED invoices only",
    "Top 10 clientes por facturación": "Top 10 clients by billing",
    "Top 10 clientes y su participación": "Top 10 clients and their share",
    "Ordenados por facturación": "Sorted by billing",
    "Participación sobre el total 2026.": "Share of 2026 total.",
    "Ordenados por": "Sorted by",
    "de cada año": "of each year",
    "% = participación en el total de su año": "% = share of that year's total",
    "Top 5 clientes": "Top 5 clients",
    "5 clientes principales": "Top 5 clients",
    "Participación en la facturación": "Share of billing",
    "Participación de cada servicio en la facturación": "Each service's share of billing",
    "Participación de cada producto en la facturación": "Each product's share of billing",
    "Facturación por tipo de servicio": "Billing by service type",
    "Facturación por producto": "Billing by product",
    "Facturado por servicio": "Billed by service",
    "Facturado por producto": "Billed by product",
    "Facturado por mes": "Billed per month",
    "Facturación mensual": "Monthly billing",
    "Servicios con mayor crecimiento": "Fastest-growing services",
    "Ordenado por crecimiento en monto": "Sorted by growth in amount",
    "Clientes nuevos vs recurrentes": "New vs. recurring clients",
    "Recurrente = cliente que también facturó en 2025": "Recurring = client also billed in 2025",
    "Empezaron a facturar en 2026": "Started billing in 2026",
    "Facturaron en 2025 y en 2026": "Billed in 2025 and in 2026",
    "Recurrentes": "Recurring",
    "recurrentes": "recurring",
    "Nuevos": "New",
    "nuevos": "new",
    "Nuevo": "New",
    "· nuevo": "· new",
    "facturaron": "billed",
    "generaron": "generated",
    "aportaron": "contributed",
    "clientes": "clients",
    "Otros (": "Others (",
    "Total (todos los clientes)": "Total (all clients)",
    "Participación 2026": "Share 2026",
    "Participación": "Share",
    "de la facturación 2026": "of 2026 billing",
    "Con facturación en el periodo": "With billing in the period",
    "Clientes del mes": "Clients this month",
    "Cliente principal": "Top client",
    "CLIENTE PRINCIPAL": "TOP CLIENT",
    "CLIENTE TOP": "TOP CLIENT",
    "CLIENTES ACTIVOS": "ACTIVE CLIENTS",
    "CLIENTES CON FACTURACIÓN": "CLIENTS WITH BILLING",
    "Saldo por cobrar por antigüedad": "Receivables by aging",
    "Saldo por cobrar por cliente": "Receivables by client",
    "Facturas sin pago": "Unpaid invoices",
    "Acumulado": "Cumulative",
    "Mensual": "Monthly",
    "mensual": "monthly",
    // Costos
    "Costo por Mes y Proveedor": "Cost by Month and Supplier",
    "Costo por Mes y Cliente": "Cost by Month and Client",
    "Expande cada mes para ver el costo total por proveedor en USD y MXN.": "Expand each month to see the total cost by supplier in USD and MXN.",
    "Expande cada mes para ver el costo total por cliente en USD y MXN.": "Expand each month to see the total cost by client in USD and MXN.",
    "Desglose Mensual": "Monthly Breakdown",
    "TOTAL COSTO USD": "TOTAL COST USD",
    "TOTAL COSTO MXN": "TOTAL COST MXN",
    "COSTO HRS USD": "HOURS COST USD",
    "PERDIEM USD": "PER DIEM USD",
    "PROVEEDORES ACTIVOS": "ACTIVE SUPPLIERS",
    "PROVEEDOR TOP": "TOP SUPPLIER",
    "MES PICO": "PEAK MONTH",
    "SERVICIOS": "SERVICES",
    "costo acumulado USD": "cumulative cost USD",
    "gastos de viaje": "travel expenses",
    "pesos mexicanos": "Mexican pesos",
    "proveedores con costo": "suppliers with cost",
    "clientes con costo": "clients with cost",
    "tipos de servicio": "service types",
    "USD acumulado": "USD cumulative",
    "Costo Total USD": "Total Cost USD",
    "Costo Hrs USD": "Hours Cost USD",
    "Perdiem USD": "Per Diem USD",
    "Otros Costos USD": "Other Costs USD",
    "Costo MXN": "Cost MXN",
    "Total de Costos por Mes (USD)": "Total Costs per Month (USD)",
    "Tendencia Mensual vs Acumulado": "Monthly Trend vs. Cumulative",
    "Tendencia Mensual": "Monthly Trend",
    "Composición Global": "Overall Composition",
    "Pasivos por Mes — Horas Pendientes": "Liabilities by Month — Pending Hours",
    "Cierres Históricos": "Historical Closings",
    "Cierre vivo:": "Live closing:",
    "Detalle Histórico por Recurso": "Historical Detail by Resource",
    "Recursos con horas pendientes": "Resources with pending hours",
    "Con horas pendientes": "With pending hours",
    "Horas Pendientes": "Pending Hours",
    "Horas Pend.": "Pending Hrs",
    "Horas por facturar": "Hours to invoice",
    "Mes Cierre": "Closing Month",
    "Total MXN c/IVA": "Total MXN incl. VAT",
    "Neto MXN": "Net MXN",
    "Neto USD": "Net USD",
    "MATUK LLC neto": "MATUK LLC net",
    "Recurso": "Resource",
    // Flujo de caja
    "Saldos Bancos": "Bank Balances",
    "SALDOS BANCOS": "BANK BALANCES",
    "Saldo en Bancos": "Bank Balance",
    "Saldo en bancos": "Bank balance",
    "Saldo Bancos": "Bank Balance",
    "Saldo Final": "Ending Balance",
    "Saldo final": "Ending balance",
    "Saldo": "Balance",
    "REAL": "ACTUAL",
    "PROYECCIÓN": "PROJECTION",
    "Proyección": "Projection",
    "Fórmula de Proyección": "Projection Formula",
    "Flujo Neto = Ingresos Operativos − Egresos Operativos (MXN)": "Net Flow = Operating Income − Operating Expenses (MXN)",
    "+ Avg(Flujo Neto últimos 3 meses) × n": "+ Avg(Net Flow last 3 months) × n",
    "Servicio Administrativo Pagos 2026": "Servicio Administrativo Pagos 2026",
    "Consolidado de Servicio Administrativo Pagos 2026 · se filtra con el Año, el Periodo y los botones de mes de arriba":
      "Consolidated Administrative Service Payments 2026 · filtered by the Year, Period and month buttons above",
    "último dato:": "latest data:",
    "Ingresos YTD": "Income YTD",
    "Egresos YTD": "Expenses YTD",
    "Cobros acumulados": "Cumulative collections",
    "Pagos acumulados": "Cumulative payments",
    "Margen Flujo": "Flow Margin",
    "Egresos > Ingresos": "Expenses > Income",
    "Costo Operativo": "Operating Cost",
    "Horas + Viát + Nóm + Imp": "Hours + Travel + Payroll + Tax",
    "de egresos totales": "of total expenses",
    "Ingresos vs Egresos por Mes": "Income vs. Expenses by Month",
    "Comparativo mensual — el mes seleccionado se resalta": "Monthly comparison — the selected month is highlighted",
    "Ingresos": "Income",
    "Egresos": "Expenses",
    "Desglose de Egresos": "Expense Breakdown",
    "Distribución acumulada": "Cumulative distribution",
    "Costos Operativos por Mes": "Operating Costs by Month",
    "Horas · Viáticos · Nómina · Impuestos acumulados": "Hours · Travel · Payroll · Taxes cumulative",
    "Evolución Saldo Bancos": "Bank Balance Trend",
    "Saldo final ENE–OCT + distribución por banco": "Ending balance JAN–OCT + distribution by bank",
    "distribución por banco": "distribution by bank",
    "Top Clientes (acumulado YTD)": "Top Clients (cumulative YTD)",
    "Top Clientes — Ingresos": "Top Clients — Income",
    "Total clientes:": "Total clients:",
    "Concentración:": "Concentration:",
    "en top 3": "in top 3",
    "Total egresos:": "Total expenses:",
    "Prom. mensual:": "Monthly avg.:",
    "Liquidez Mensual": "Monthly Liquidity",
    "Liquidez disponible": "Available liquidity",
    "Cobros del período": "Collections in period",
    "Pagos del período": "Payments in period",
    "Distribución de pagos del período por categoría": "Period payments by category",
    "Participación en ingresos del período": "Share of income in period",
    "Horas técnicas": "Technical hours",
    "Viáticos proyecto": "Project travel",
    "Viáticos": "Travel expenses",
    "Otros costos": "Other costs",
    "Nómina admin": "Admin payroll",
    "Nómina": "Payroll",
    "Comisiones ventas": "Sales commissions",
    "Comisiones": "Commissions",
    "Gastos operativos": "Operating expenses",
    "Gastos op.": "Op. expenses",
    "Seguros": "Insurance",
    "Impuestos": "Taxes",
    "Imptos": "Taxes",
    "Costos fijos": "Fixed costs",
    "Préstamo": "Loan",
    "Estrategia Fiscal": "Tax Strategy",
    "Est. Fiscal": "Tax Strat.",
    "Activo Fijo": "Fixed Assets",
    "INVERSIÓN": "INVESTMENT",
    "SALDO RH": "HR BALANCE",
    "TRASPASO": "TRANSFER",
    "Horas de ingenieros facturadas a proyectos": "Engineer hours billed to projects",
    "Viáticos del equipo técnico en campo": "Field technical team travel expenses",
    "Sueldos del personal administrativo": "Administrative staff salaries",
    "Comisiones pagadas al equipo de ventas y representantes": "Commissions paid to sales team and representatives",
    "IMSS, ISN, Honorarios, Rentas, Mantenimiento, Internet, Servicios de oficina": "IMSS, payroll tax, fees, rent, maintenance, internet, office services",
    "Seguridad, DC3, Visas, Exámenes médicos, Fonacot, Materiales": "Safety, DC3, visas, medical exams, Fonacot, materials",
    "Pólizas de seguro (hombre clave, autos, oficina)": "Insurance policies (key person, vehicles, office)",
    "ISR, IVA y otras obligaciones fiscales": "Income tax, VAT and other tax obligations",
    "Costos fijos de estructura: rentas, servicios recurrentes y otros cargos mensuales": "Fixed overhead: rent, recurring services and other monthly charges",
    "Gastos con tarjeta American Express": "American Express card expenses",
    "Pago o disposición de préstamos": "Loan payments or drawdowns",
    "Estrategia fiscal aplicada": "Tax strategy applied",
    "Compra o venta de activo fijo": "Purchase or sale of fixed assets",
    "Después de retenciones": "After withholdings",
    "vs mes anterior": "vs. previous month",
    // Pagos: resumen / horas
    "Consolidado de Servicio Administrativo Pagos 2026": "Consolidated Administrative Service Payments 2026",
    "Horas Totales por Mes": "Total Hours per Month",
    "Desglose mensual de horas y participación en el período total.": "Monthly hours breakdown and share of the total period.",
    "Distribución de horas por tipo y evolución acumulada durante el período.": "Hours by type and cumulative evolution over the period.",
    "Distribución horas": "Hours distribution",
    "Eficiencia del período": "Period efficiency",
    "Ingenieros simultáneos": "Simultaneous engineers",
    "Detalle por mes": "Detail by month",
    "Comportamiento": "Behavior",
    "Total Horas": "Total Hours",
    "Total Hrs": "Total Hrs",
    "Hrs Totales": "Total Hrs",
    "hrs totales": "total hrs",
    "hrs acumuladas": "cumulative hrs",
    "Horas YTD": "Hours YTD",
    "Horas ST": "ST Hours",
    "Prom. hrs/mes": "Avg. hrs/month",
    "Promedio mensual": "Monthly average",
    "Promedio del periodo": "Period average",
    "Promedio/Mes": "Average/Month",
    "Pico de recursos": "Peak resources",
    "Pico Recursos": "Peak Resources",
    "Pico en": "Peak in",
    "horas estándar": "standard hours",
    "Mes más alto": "Highest month",
    "Meses activos": "Active months",
    "Meses cerrados del periodo": "Closed months in period",
    "Mes Pico": "Peak Month",
    "Total 9 meses:": "9-month total:",
    "Estándar (ST)": "Standard (ST)",
    "Doble Tiempo (DT)": "Double Time (DT)",
    "Doble tiempo (DT)": "Double time (DT)",
    "Doble Tiempo": "Double Time",
    "% HORAS EXTRA": "% OVERTIME HOURS",
    "% Extra": "% Overtime",
    "% Liquidez Mensual": "% Monthly Liquidity",
    "Personas": "People",
    "Recursos": "Resources",
    "Horas": "Hours",
    "HORAS": "HOURS",
    "Costos": "Costs",
    "Total": "Total",
    "Total YTD": "Total YTD",
    "Total MXN": "Total MXN",
    "Total USD": "Total USD",
    "Mes": "Month",
    "MES:": "MONTH:",
    "Mes:": "Month:",
    "Tabla": "Table",
    "período": "period",
    "periodo": "period",
    "registrado": "recorded",
    "completa": "complete",
    "No se encontró": "Not found:",
    "en la carpeta. Verifica que el archivo exista junto a esta página.": "in the folder. Make sure the file is next to this page.",
    // Acceso (contraseña)
    "Contraseña": "Password",
    "Entrar": "Sign in",
    "Contraseña incorrecta.": "Incorrect password.",
    "Verificando…": "Verifying…",
    "Abriendo…": "Opening…",
    "Acceso concedido. Abriendo…": "Access granted. Opening…",
    "La información se descifra solo en este navegador.": "Data is decrypted only in this browser.",
    "Centro de información · uso interno": "Information center · internal use",
    "Este navegador no es compatible. Usa Chrome, Edge o Safari actualizados.": "This browser is not supported. Use an up-to-date Chrome, Edge or Safari."
  };

  /* ---------- Solo coincidencia exacta (palabras cortas o ambiguas) ---------- */
  var EXACTO = {
    "a": "to", "y": "and", "base": "base", "n": "n", "Dashboard": "Dashboard",
    "Crec.": "Growth", "Robot listo": "Robot ready", "= Saldo": "= Balance",
    "Datos al": "Data as of", "OT": "OT", "ST": "ST", "DT": "DT", "TC": "FX"
  };

  /* ---------- Reglas con expresiones regulares (fechas, meses, plantillas) ---------- */
  var MESES = { ENE: "JAN", ABR: "APR", AGO: "AUG", DIC: "DEC" };
  var meses_min = { ene: "jan", abr: "apr", ago: "aug", dic: "dec" };
  var REGLAS = [
    [/\bEn (\d{4}) \(([^)]*)\) facturaron\b/g, "In $1 ($2) billing came from"],
    [/\bPico en\b/g, "Peak in"],
    [/\b(ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC) a (ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC)\b/g, "$1 to $2"],
    [/^\(([\d.,]+%)\) y$/, "($1) and"],
    [/\ben (ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC)\b/g, "in $1"],
    [/\bcon ([\d,\.]+) hrs\b/g, "with $1 hrs"],
    [/\bAl (\d)/g, "As of $1"],
    [/\/mes\b/g, "/month"],
    [/\bhrs\/mes\b/g, "hrs/month"],
    [/\bProm:/g, "Avg:"],
    [/\b(\d+) meses\b/g, "$1 months"],
    [/\bOtros \((\d+) clientes\)/g, "Others ($1 clients)"],
    [/\(([\d]+) clientes\)/g, "($1 clients)"],
    [/^(\d+) clientes$/, "$1 clients"],
    [/\b(ENE|ABR|AGO|DIC)\b/g, function (m) { return MESES[m]; }],
    [/\b(ene|abr|ago|dic)(?=[-\/ ]\d)/g, function (m) { return meses_min[m]; }],
    [/(\d[-\/ ])(ene|abr|ago|dic)\b/g, function (m, a, b) { return a + meses_min[b]; }],
    [/\bPeríodo\b/g, "Period"]
  ];

  /* ---------- Motor de traducción ---------- */
  var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
  var L = "A-Za-zÁÉÍÓÚÜÑáéíóúüñ";
  var PARCIALES = Object.keys(FRASES).filter(function (k) { return k.length >= 4; })
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (k) { return [new RegExp("(?<![" + L + "])" + esc(k) + "(?![" + L + "])", "g"), FRASES[k]]; });

  var idioma = "es";
  try { idioma = localStorage.getItem(CLAVE) === "en" ? "en" : "es"; } catch (e) {}
  var prefiltros = [];   // [{sel, fn}] transformaciones previas por sección (p. ej. cliente → proveedor)

  // Títulos de dos partes (blanco + azul) donde el orden cambia en inglés
  var CONTEXTO = {
    hT1: { "Resumen": "Executive", "Registro de": "Hours", "Reporte de": "Service" },
    hT2: [[/^Horas\b/, "Log"], [/^Servicio\b/, "Report"], [/^Ejecutivo\b/, "Summary"]]
  };
  var CACHE = new Map();
  function trTexto(s, el) {
    if (idioma !== "en" || !s || !/[A-Za-zÁÉÍÓÚÑáéíóúñ]/.test(s)) return s;
    var m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), core = m[2];
    if (!core) return s;
    var ctx = el && el.id && CONTEXTO[el.id];
    if (ctx) {
      if (!Array.isArray(ctx) && ctx[core]) return m[1] + ctx[core] + m[3];
      if (Array.isArray(ctx)) for (var c = 0; c < ctx.length; c++) if (ctx[c][0].test(core)) { core = core.replace(ctx[c][0], ctx[c][1]); break; }
    }
    var t = CACHE.get(core);
    if (t === undefined) {
      t = FRASES[core] || EXACTO[core];
      if (!t) {
        t = core;
        for (var i = 0; i < REGLAS.length; i++) t = t.replace(REGLAS[i][0], REGLAS[i][1]);
        if (FRASES[t]) t = FRASES[t];
        else for (var j = 0; j < PARCIALES.length; j++) t = t.replace(PARCIALES[j][0], PARCIALES[j][1]);
      }
      if (CACHE.size > 20000) CACHE.clear();
      CACHE.set(core, t);
    }
    return m[1] + t + m[3];
  }
  function pre(s, el) {
    for (var i = 0; i < prefiltros.length; i++) {
      if (el && el.closest && el.closest(prefiltros[i].sel)) s = prefiltros[i].fn(s);
    }
    return s;
  }

  var ORIG = new WeakMap(), ULT = new WeakMap();
  var ATRS = ["placeholder", "title", "aria-label", "alt"];

  function textoNodo(n) {
    var p = n.parentElement;
    if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.tagName) || p.closest("[data-no-traducir]")) return;
    var v = n.nodeValue;
    if (!ULT.has(n) || ULT.get(n) !== v) ORIG.set(n, v);   // el texto cambió desde fuera: es el nuevo original
    var nuevo = trTexto(pre(ORIG.get(n), p), p);
    ULT.set(n, nuevo);
    if (nuevo !== v) n.nodeValue = nuevo;
  }
  function atributos(el) {
    if (el.closest && el.closest("[data-no-traducir]")) return;
    for (var i = 0; i < ATRS.length; i++) {
      var a = ATRS[i]; if (!el.hasAttribute(a)) continue;
      var v = el.getAttribute(a), ko = "data-i18n-" + a, ku = "data-i18n-u-" + a;
      if (el.getAttribute(ku) !== v) el.setAttribute(ko, v);
      var nuevo = trTexto(pre(el.getAttribute(ko), el));
      el.setAttribute(ku, nuevo);
      if (nuevo !== v) el.setAttribute(a, nuevo);
    }
  }
  function recorrer(raiz) {
    if (!raiz) return;
    if (raiz.nodeType === 3) { textoNodo(raiz); return; }
    if (raiz.nodeType !== 1 && raiz.nodeType !== 9) return;
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) textoNodo(n);
    if (raiz.nodeType === 1) atributos(raiz);
    var els = raiz.querySelectorAll ? raiz.querySelectorAll("[placeholder],[title],[aria-label],img[alt]") : [];
    for (var i = 0; i < els.length; i++) atributos(els[i]);
  }

  var tituloOrig = document.title, tituloUlt = null;
  function todo() {
    document.documentElement.lang = idioma;
    if (document.title !== tituloUlt) tituloOrig = document.title;
    document.title = tituloUlt = trTexto(tituloOrig);
    obs.disconnect();
    recorrer(document.body);
    conectar();
    graficas();
    botones();
  }

  var obs = new MutationObserver(function (lista) {
    obs.disconnect();
    for (var i = 0; i < lista.length; i++) {
      var r = lista[i];
      if (r.type === "characterData") textoNodo(r.target);
      else if (r.type === "attributes") atributos(r.target);
      else for (var j = 0; j < r.addedNodes.length; j++) recorrer(r.addedNodes[j]);
    }
    conectar();
  });
  function conectar() {
    if (document.body) obs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATRS });
  }

  /* ---------- Gráficas Chart.js ---------- */
  function trEtiqueta(x) { return typeof x === "string" ? trTexto(x) : Array.isArray(x) ? x.map(trEtiqueta) : x; }
  var pluginGraf = {
    id: "matukIdioma",
    beforeUpdate: function (c) {
      var d = c.data || {};
      if (d.labels && d.labels !== c.$i18nLab) { c.$i18nOrig = d.labels; }
      if (c.$i18nOrig) { d.labels = c.$i18nLab = c.$i18nOrig.map(trEtiqueta); }
      (d.datasets || []).forEach(function (ds) {
        if (ds.label !== ds.$i18nU) ds.$i18nO = ds.label;
        if (typeof ds.$i18nO === "string") ds.label = ds.$i18nU = trTexto(ds.$i18nO);
      });
      var o = c.options || {}, objs = [o.plugins && o.plugins.title];
      Object.keys(o.scales || {}).forEach(function (k) { objs.push(o.scales[k] && o.scales[k].title); });
      objs.forEach(function (t) {
        if (!t || t.text == null) return;
        if (t.text !== t.$i18nU) t.$i18nO = t.text;
        t.text = t.$i18nU = trEtiqueta(t.$i18nO);
      });
    }
  };
  var registrado = false;
  function graficas() {
    var C = window.Chart; if (!C) return;
    if (!registrado && C.register) { try { C.register(pluginGraf); registrado = true; } catch (e) {} }
    var inst = C.instances ? Object.values(C.instances) : [];
    inst.forEach(function (c) { try { c.update("none"); } catch (e) {} });
  }

  /* ---------- iframes de la misma página (Costos, Flujo, Cuentas por Pagar) ---------- */
  function inyectar(f, opciones) {
    try {
      var w = f.contentWindow, d = f.contentDocument;
      if (!w || !d || !d.body) return;
      var aplicar = function () {
        if (!w.MATUK_I18N) return;
        if (opciones && opciones.proveedor) w.MATUK_I18N.prefiltro(opciones.proveedor, opciones.fn);
        w.MATUK_I18N.set(idioma, true);
      };
      if (w.MATUK_I18N) { aplicar(); return; }
      if (d.getElementById("matuk-idioma-js")) { d.getElementById("matuk-idioma-js").addEventListener("load", aplicar); return; }
      var s = d.createElement("script"); s.id = "matuk-idioma-js"; s.src = SRC;
      s.onload = aplicar; d.head.appendChild(s);
    } catch (e) {}
  }
  function engancharIframes() {
    var fs = document.querySelectorAll("iframe");
    for (var i = 0; i < fs.length; i++) {
      var f = fs[i];
      if (f.$i18n) continue; f.$i18n = true;
      f.addEventListener("load", (function (f) { return function () { inyectar(f); }; })(f));
      if (f.contentDocument && f.contentDocument.readyState === "complete" && f.src) inyectar(f);
    }
  }

  /* ---------- Botón ES | EN ---------- */
  var CSS = ".matuk-idioma{display:inline-flex;align-items:center;border:1px solid rgba(127,127,127,.45);border-radius:999px;overflow:hidden;font:600 12px/1 Inter,'Segoe UI',system-ui,sans-serif;background:transparent;flex:none}" +
    ".matuk-idioma button{border:0;background:transparent;color:inherit;padding:7px 10px;cursor:pointer;font:inherit;letter-spacing:.04em;opacity:.7}" +
    ".matuk-idioma button.on{background:#1e3a7b;color:#fff;opacity:1}" +
    ".matuk-idioma-flota{position:fixed;top:12px;right:12px;z-index:9999;background:rgba(11,23,48,.75);color:#fff;border-color:rgba(255,255,255,.35)}";
  function botones() {
    var bs = document.querySelectorAll(".matuk-idioma button");
    for (var i = 0; i < bs.length; i++) bs[i].classList.toggle("on", bs[i].dataset.l === idioma);
  }
  function crearBoton() {
    if (window.top !== window || document.querySelector(".matuk-idioma")) return;
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    var caja = document.createElement("div");
    caja.className = "matuk-idioma"; caja.setAttribute("data-no-traducir", "");
    caja.setAttribute("role", "group"); caja.setAttribute("aria-label", "Idioma / Language");
    caja.innerHTML = '<button type="button" data-l="es" title="Español">ES</button><button type="button" data-l="en" title="English">EN</button>';
    caja.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) set(b.dataset.l); });
    var lugar = document.getElementById("idiomaSlot");
    if (lugar) lugar.appendChild(caja); else { caja.classList.add("matuk-idioma-flota"); document.body.appendChild(caja); }
    botones();
  }

  function set(l, desdePadre) {
    idioma = l === "en" ? "en" : "es";
    if (!desdePadre) { try { localStorage.setItem(CLAVE, idioma); } catch (e) {} }
    todo();
    var fs = document.querySelectorAll("iframe");
    for (var i = 0; i < fs.length; i++) inyectar(fs[i]);
  }

  window.MATUK_I18N = {
    set: set,
    get: function () { return idioma; },
    t: trTexto,
    inyectar: inyectar,
    prefiltro: function (sel, fn) {
      if (!prefiltros.some(function (p) { return p.sel === sel; })) prefiltros.push({ sel: sel, fn: fn });
      todo();
    }
  };

  function iniciar() {
    crearBoton(); engancharIframes(); todo();
    // las gráficas y los iframes pueden crearse después de cargar
    setTimeout(function () { engancharIframes(); graficas(); }, 1500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
  window.addEventListener("storage", function (e) { if (e.key === CLAVE && window.top === window) set(e.newValue, true); });
})();
