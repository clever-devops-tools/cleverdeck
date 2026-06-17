---
theme: default
colorSchema: dark
title: "Falabella DevOps Intelligence — Caso de Éxito"
fonts:
  sans: Inter
  mono: JetBrains Mono
drawings:
  persist: false
transition: fade
---

<div class="cover-chip">Caso de Éxito · Observabilidad de Ingeniería · 2025–2026</div>

<div class="cover-title">De cero observabilidad<br>a métricas de ingeniería<br>en tiempo real</div>

<div class="cover-sub">Cómo GitHub + DORA + DX Core 4 le dieron visibilidad completa<br>a los equipos de desarrollo de uno de los mayores ecosistemas tecnológicos de Latam</div>

<div class="cover-row">
  <div class="cover-badge"><strong>CleverIT</strong></div>
  <div class="cover-badge">× <strong>Falabella Retail</strong></div>
  <div class="cover-badge">GitHub · DORA · DX Core 4 · Grafana</div>
</div>

---

## El Problema: Sin Observabilidad de Ingeniería

<div class="cl-divider"></div>

<div class="challenge-grid">
  <div class="challenge-card">
    <div class="challenge-icon">🔍</div>
    <div class="challenge-num">1,897</div>
    <div class="challenge-title">Repositorios. Ninguno con métricas.</div>
    <div class="challenge-desc">Todo el código de Falabella estaba en GitHub — PRs, commits, pipelines CI/CD — pero nadie lo medía. Los datos existían. La observabilidad, no.</div>
  </div>
  <div class="challenge-card">
    <div class="challenge-icon">🗂️</div>
    <div class="challenge-num">212</div>
    <div class="challenge-title">Aplicaciones sin visibilidad de ingeniería.</div>
    <div class="challenge-desc">6 portafolios de negocio activos. Ningún líder podía responder cuánto tardaba un cambio en llegar a producción, ni qué equipo era más ágil.</div>
  </div>
  <div class="challenge-card">
    <div class="challenge-icon">🤖</div>
    <div class="challenge-num">56%</div>
    <div class="challenge-title">Del ruido era invisible para todos.</div>
    <div class="challenge-desc">Más de la mitad de los PRs eran de bots (Dependabot). Sin filtros de calidad, cualquier intento de medir era medir ruido, no trabajo humano real.</div>
  </div>
</div>

---

## GitHub: La Fuente de Verdad de Ingeniería

<div class="section-desc">Todo lo que necesitábamos para dar observabilidad ya estaba ahí — en GitHub. Solo hacía falta conectarlo.</div>

<div class="gh-grid">
  <div class="gh-source">
    <div class="gh-source-icon">🐙</div>
    <div class="gh-source-title">GitHub ya tenía todo</div>
    <div class="gh-source-items">
      <div class="gh-item"><span class="gh-dot"></span>1,897 repositorios con historial completo</div>
      <div class="gh-item"><span class="gh-dot"></span>Todos los Pull Requests y sus timestamps</div>
      <div class="gh-item"><span class="gh-dot"></span>Cada commit con autor y fecha</div>
      <div class="gh-item"><span class="gh-dot"></span>87,000+ pipelines de GitHub Actions</div>
      <div class="gh-item"><span class="gh-dot"></span>Ramas de producción (main / master)</div>
    </div>
  </div>
  <div class="gh-arrow-col">→</div>
  <div class="gh-metrics">
    <div class="gh-metric-title">Lo que eso permite medir</div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Lead Time: primer commit → merge a prod</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Deployment Frequency por equipo/portafolio</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Change Failure Rate en ramas productivas</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>Coding Time: commit → apertura del PR</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>PR Review Time y Batch Size</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>Build Time, Queue Time y Burnout Risk</span>
    </div>
  </div>
</div>

<div style="margin-top:14px; padding:10px 16px; background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.3); border-radius:8px; font-size:0.82rem; color:var(--cl-text); text-align:center">
  💡 <strong>Sin instrumentar una sola línea de código.</strong> La observabilidad de ingeniería vive en los datos que GitHub ya captura.
</div>

---

## La Arquitectura: GitHub en el Centro

<div class="section-desc">GitHub como fuente primaria. DevLake como motor de normalización. Grafana como capa de observabilidad.</div>

```mermaid {scale: 0.82}
flowchart LR
    GH["🐙 GitHub\nFUENTE PRIMARIA\n1,897 repos · PRs · Commits\nGitHub Actions CI/CD"]:::primary
    JI["📋 Jira\nFuente complementaria\nBugs · Sprints · Issues"]
    LA["🏷️ Labels API Falabella\nCatálogo interno\n212 FAIs · 6 portafolios"]

    RR["⚙️ devlake-repo-register\nMicroservicio Go (custom CleverIT)\nMapeo FAI → repos GitHub"]

    DL["🔧 Apache DevLake\nIngesta · Normalización · ETL\nModelo de datos DevOps unificado"]

    DB[("🗄️ Cloud SQL\nMySQL 8.0")]

    GF["📊 Grafana\nObservabilidad de Ingeniería\nDORA · DX Core 4 · KPIs Ejecutivos\n5 dashboards · tiempo real"]:::output

    GH --> DL
    JI --> DL
    LA --> RR --> DB
    DL --> DB --> GF

    classDef primary fill:#1A56FF22,stroke:#1A56FF,stroke-width:2px,color:#fff
    classDef output fill:#00C8E022,stroke:#00C8E0,stroke-width:2px,color:#fff
```

<div style="margin-top:10px; font-size:0.8rem; color:var(--cl-muted)">
  GitHub aporta >90% de los datos de ingeniería. Jira aporta contexto de calidad. La Labels API permite atribuir métricas al portafolio de negocio correcto.
</div>

---
layout: center
---

<div style="text-align:center; margin-bottom:1.5rem">
  <div class="section-label">La Escala</div>
  <div style="font-size:2rem; font-weight:800; color:#fff">Todo vive en GitHub. Ahora también se ve.</div>
</div>

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-num">1,897</div>
    <div class="stat-label">Repositorios GitHub con observabilidad</div>
    <div class="stat-sub">94.8% con FAI de negocio mapeado</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">87K+</div>
    <div class="stat-label">Pipelines CI/CD analizados</div>
    <div class="stat-sub">GitHub Actions · ramas productivas</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">9,520</div>
    <div class="stat-label">PRs humanos reales medidos</div>
    <div class="stat-sub">Filtro anti-bot aplicado en 35 paneles</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">212</div>
    <div class="stat-label">Aplicaciones con métricas asignadas</div>
    <div class="stat-sub">6 portafolios · visibilidad por FAI</div>
  </div>
</div>

<div class="stats-grid" style="margin-top:12px; grid-template-columns: repeat(3,1fr)">
  <div class="stat-card">
    <div class="stat-num">4</div>
    <div class="stat-label">Métricas DORA activas</div>
    <div class="stat-sub">Lead Time · DF · CFR · DSR</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">4</div>
    <div class="stat-label">Pilares DX Core 4</div>
    <div class="stat-sub">Velocidad · Calidad · CI/CD · Bienestar</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">5</div>
    <div class="stat-label">Dashboards en producción 24/7</div>
    <div class="stat-sub">Grafana · tiempo real</div>
  </div>
</div>

---

## DORA — Observabilidad de Entrega de Software

<div class="section-desc">DORA convierte los datos de GitHub en señales claras sobre la capacidad de entrega de cada equipo.</div>
<div class="cl-divider"></div>

<div class="dora-grid">
  <div class="dora-card">
    <div class="dora-label">⚡ Velocidad</div>
    <div class="dora-name">Lead Time for Changes</div>
    <div class="dora-desc">¿Cuánto tarda una idea en llegar a producción? Se mide directo en GitHub: primer commit → merge a main. Sin supuestos.</div>
    <div><span class="dora-badge badge-live">✓ Activo · fuente: GitHub</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🚀 Frecuencia</div>
    <div class="dora-name">Deployment Frequency</div>
    <div class="dora-desc">¿Con qué frecuencia despliega cada equipo? GitHub Actions registra cada pipeline exitoso en ramas de producción.</div>
    <div><span class="dora-badge badge-live">✓ Activo · fuente: GitHub Actions</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🛡️ Estabilidad</div>
    <div class="dora-name">Change Failure Rate</div>
    <div class="dora-desc">% de deployments fallidos vs exitosos. Filtrado solo a ramas productivas vía GitHub Actions. CFR + DSR = 100% siempre.</div>
    <div><span class="dora-badge badge-live">✓ Activo · fuente: GitHub Actions</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🔄 Recuperación</div>
    <div class="dora-name">MTTR — Time to Recover</div>
    <div class="dora-desc">Tiempo de restauración tras incidente. Proxy activo vía Jira. MTTR real: pendiente integración con datos SRE (Splunk).</div>
    <div><span class="dora-badge badge-pend">⏳ En progreso</span></div>
  </div>
</div>

---

## DX Core 4 — Observabilidad del Desarrollador

<div class="section-desc">DX Core 4 mide lo que DORA no ve: el día a día del desarrollador. Todo extraído de GitHub.</div>
<div class="cl-divider"></div>

<div class="dx-grid">
  <div class="dx-card">
    <div class="dx-num">P1</div>
    <div class="dx-title">Velocidad</div>
    <ul class="dx-items">
      <li>Coding Time <span style="font-size:0.7rem; color:var(--cl-muted)">(commit → PR)</span></li>
      <li>PR Review Time <span style="font-size:0.7rem; color:var(--cl-muted)">(apertura → merge)</span></li>
      <li>Batch Size <span style="font-size:0.7rem; color:var(--cl-muted)">(commits por PR)</span></li>
    </ul>
    <div style="font-size:0.7rem; color:var(--cl-cyan); margin-top:8px">→ fuente: GitHub PRs & commits</div>
  </div>
  <div class="dx-card">
    <div class="dx-num">P2</div>
    <div class="dx-title">Calidad</div>
    <ul class="dx-items">
      <li>Tasa de retrabajo <span style="font-size:0.7rem; color:var(--cl-muted)">(PRs cerrados sin merge)</span></li>
      <li>Bugs Jira por proyecto</li>
      <li>PRs rechazados</li>
    </ul>
    <div style="font-size:0.7rem; color:var(--cl-cyan); margin-top:8px">→ fuente: GitHub PRs + Jira</div>
  </div>
  <div class="dx-card">
    <div class="dx-num">P3</div>
    <div class="dx-title">Eficiencia CI/CD</div>
    <ul class="dx-items">
      <li>Build Time <span style="font-size:0.7rem; color:var(--cl-muted)">(pipelines exitosos)</span></li>
      <li>Queue Time <span style="font-size:0.7rem; color:var(--cl-muted)">(creación → inicio)</span></li>
      <li>Tendencias históricas</li>
    </ul>
    <div style="font-size:0.7rem; color:var(--cl-cyan); margin-top:8px">→ fuente: GitHub Actions</div>
  </div>
  <div class="dx-card">
    <div class="dx-num">P4</div>
    <div class="dx-title">Bienestar</div>
    <ul class="dx-items">
      <li>Burnout Risk</li>
      <li>Commits fines de semana</li>
      <li>Tendencia mensual</li>
    </ul>
    <div style="font-size:0.7rem; color:var(--cl-cyan); margin-top:8px">→ fuente: GitHub commits</div>
  </div>
</div>

<div style="margin-top:12px; font-size:0.8rem; color:var(--cl-muted); text-align:center">
  12+ métricas activas · 100% extraídas de datos que GitHub ya captura · cero instrumentación adicional
</div>

---

## Calidad de Datos: El Problema de los Bots

<div class="section-desc">Sin filtros de calidad, las métricas de equipo eran estadísticas de bots, no de personas.</div>

<div class="bot-compare">
  <div class="bot-box before">
    <div class="bot-tag">Antes del filtro</div>
    <div class="bot-big">56%</div>
    <div style="font-size:1.1rem; font-weight:700; color:#fff; margin:8px 0">de los PRs en GitHub</div>
    <div class="bot-desc">eran de <strong style="color:var(--cl-red)">Dependabot</strong><br>(bot de dependencias)<br><br>12,153 de 21,673 PRs<br>11,407 commits de bots<br><br><em>DORA inflado · DX Core 4 sin sentido</em></div>
  </div>
  <div class="bot-arrow">→</div>
  <div class="bot-box after">
    <div class="bot-tag">Después del filtro</div>
    <div class="bot-big">0%</div>
    <div style="font-size:1.1rem; font-weight:700; color:#fff; margin:8px 0">ruido de bots</div>
    <div class="bot-desc">Filtro <code style="font-size:0.75rem; background:rgba(32,227,160,0.1); padding:2px 6px; border-radius:4px">head_ref NOT LIKE 'dependabot/%'</code> en <strong style="color:var(--cl-green)">35 paneles</strong><br><br>9,520 PRs humanos reales<br>DORA y DX Core 4 confiables<br><br><em>Calidad de datos = observabilidad real</em></div>
  </div>
</div>

---

## 5 Dashboards de Observabilidad en Producción

<div class="cl-divider"></div>

<div class="dash-list">
  <div class="dash-row">
    <div class="dash-icon">🏠</div>
    <div>
      <div class="dash-info-name">Portal de Inicio</div>
      <div class="dash-info-desc">Navegación central · 6 métricas en tiempo real: repos activos, FAIs mapeados, PRs humanos, pipelines GitHub Actions</div>
    </div>
    <div class="dash-audience">Todos</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">📊</div>
    <div>
      <div class="dash-info-name">Métricas DORA</div>
      <div class="dash-info-desc">Lead Time · Deployment Frequency · CFR · DSR · Pipeline Duration · PR Review Time — por FAI y portafolio</div>
    </div>
    <div class="dash-audience">Tech Leads</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">💡</div>
    <div>
      <div class="dash-info-name">DX Core 4</div>
      <div class="dash-info-desc">Velocidad del dev · Calidad del código · Eficiencia CI/CD · Bienestar del equipo — todo desde GitHub</div>
    </div>
    <div class="dash-audience">Eng. Managers</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">🔍</div>
    <div>
      <div class="dash-info-name">Detalle Coding</div>
      <div class="dash-info-desc">Análisis granular de Coding Time, distribución de commits por PR y tendencias semanales por equipo</div>
    </div>
    <div class="dash-audience">Tech Leads</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">🎯</div>
    <div>
      <div class="dash-info-name">Vista Ejecutiva KPIs</div>
      <div class="dash-info-desc">Panel consolidado con drill-down a DORA, DX Core 4 y Coding Detail. Filtros preservados entre dashboards.</div>
    </div>
    <div class="dash-audience">CTO · VPs</div>
  </div>
</div>

---
layout: center
---

<div style="text-align:center; margin-bottom:2rem">
  <div class="section-label">Resultados</div>
  <div style="font-size:2rem; font-weight:800; color:#fff; line-height:1.2">La observabilidad de ingeniería<br>que Falabella tiene hoy</div>
</div>

<div class="result-grid">
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Observabilidad completa desde GitHub</strong>: 1,897 repos, 212 apps y 87K+ pipelines con métricas en tiempo real.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>DORA y DX Core 4 activos</strong> por equipo, FAI y portafolio — drill-down desde la vista ejecutiva hasta el repo.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Señal limpia, no ruido</strong>: filtros anti-bot en 35 paneles. DORA y DX Core 4 reflejan trabajo humano real.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Cero instrumentación de código</strong>: toda la observabilidad se extrae de los datos que GitHub ya captura.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Integración automática</strong>: el microservicio Go sincroniza repos nuevos de GitHub sin intervención manual.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Capacidad instalada</strong>: el equipo de Falabella opera autónomamente con documentación y runbooks completos.</div>
  </div>
</div>
