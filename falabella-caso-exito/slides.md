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
routerMode: hash
---

<div class="cover-chip">Caso de Éxito · 2025–2026</div>

<div class="cover-title">De datos dispersos<br>a inteligencia DevOps<br>en tiempo real</div>

<div class="cover-sub">Plataforma DevOps Intelligence para uno de los mayores<br>ecosistemas de desarrollo tecnológico de Latinoamérica</div>

<div class="cover-row">
  <div class="cover-badge"><strong>CleverIT</strong></div>
  <div class="cover-badge">× <strong>Falabella Retail</strong></div>
  <div class="cover-badge">GKE · DevLake · Grafana · Go</div>
</div>

---

## El Desafío

<div class="cl-divider"></div>

<div class="challenge-grid">
  <div class="challenge-card">
    <div class="challenge-icon">🔍</div>
    <div class="challenge-num">1,897</div>
    <div class="challenge-title">Repositorios. Cero visibilidad unificada.</div>
    <div class="challenge-desc">Datos de GitHub, Jira y pipelines CI/CD en silos. Sin una capa que los cruzara ni los interpretara.</div>
  </div>
  <div class="challenge-card">
    <div class="challenge-icon">🗂️</div>
    <div class="challenge-num">212</div>
    <div class="challenge-title">Aplicaciones sin métricas de ingeniería.</div>
    <div class="challenge-desc">6 portafolios de negocio. Ningún líder podía responder cuánto tardaba un cambio en llegar a producción.</div>
  </div>
  <div class="challenge-card">
    <div class="challenge-icon">🤖</div>
    <div class="challenge-num">56%</div>
    <div class="challenge-title">Del ruido era invisible para todos.</div>
    <div class="challenge-desc">Más de la mitad de los PRs eran generados por bots (Dependabot), contaminando cualquier métrica de equipo.</div>
  </div>
</div>

---

## La Arquitectura

<div class="section-desc">Un pipeline de datos unificado — de 3 fuentes dispersas a 5 dashboards en producción.</div>

```mermaid {scale: 0.85}
flowchart LR
    GH["🐙 GitHub API\n1,897 repos\nPRs · Commits\nActions CI/CD"]
    JI["📋 Jira API\nIssues & Boards\nBugs · Sprints"]
    LA["🏷️ Labels API\nAPI Interna Falabella\n212 FAIs · 6 portafolios"]

    RR["⚙️ devlake-repo-register\nGo Microservice\nMapeo FAI → DevLake\n(desarrollado por CleverIT)"]

    DL["🔧 Apache DevLake\nETL · Normalización\nModelo de datos DevOps"]

    DB[("🗄️ Cloud SQL\nMySQL 8.0\ndevlake · devlake_meta")]

    GF["📊 Grafana\n5 dashboards en producción\nDORA · DX Core 4 · KPIs Ejecutivos"]

    GH --> DL
    JI --> DL
    LA --> RR
    RR --> DB
    DL --> DB
    DB --> GF
```

<div style="margin-top:12px; font-size:0.8rem; color:var(--cl-muted)">
  💡 El servicio Go custom fue la clave — sin él, los 1,897 repos no tendrían dueño de negocio asignado.
</div>

---
layout: center
---

<div style="text-align:center; margin-bottom:1.5rem">
  <div class="section-label">La Escala del Proyecto</div>
  <div style="font-size:2rem; font-weight:800; color:#fff">Números que hablan solos</div>
</div>

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-num">1,897</div>
    <div class="stat-label">Repositorios GitHub monitoreados</div>
    <div class="stat-sub">94.8% con FAI mapeado</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">212</div>
    <div class="stat-label">Aplicaciones en catálogo</div>
    <div class="stat-sub">6 portafolios de negocio</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">5</div>
    <div class="stat-label">Dashboards en producción</div>
    <div class="stat-sub">Disponibles 24/7</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">35</div>
    <div class="stat-label">Paneles con calidad de datos</div>
    <div class="stat-sub">Filtros anti-bot aplicados</div>
  </div>
</div>

<div class="stats-grid" style="margin-top:12px; grid-template-columns: repeat(3,1fr)">
  <div class="stat-card">
    <div class="stat-num">87K</div>
    <div class="stat-label">Pipelines CI/CD totales</div>
    <div class="stat-sub">26,972 en ramas productivas</div>
  </div>
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
</div>

---

## Framework DORA — Métricas de Ingeniería

<div class="section-desc">Estándar Google DORA para medir la capacidad de entrega de software de los equipos.</div>
<div class="cl-divider"></div>

<div class="dora-grid">
  <div class="dora-card">
    <div class="dora-label">⚡ Velocidad</div>
    <div class="dora-name">Lead Time for Changes</div>
    <div class="dora-desc">Tiempo real desde el primer commit hasta merge a producción. Mide la agilidad del equipo para entregar valor.</div>
    <div><span class="dora-badge badge-live">✓ Activo</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🚀 Frecuencia</div>
    <div class="dora-name">Deployment Frequency</div>
    <div class="dora-desc">¿Con qué frecuencia el equipo despliega a producción? Normalizado por célula y portafolio para comparación justa.</div>
    <div><span class="dora-badge badge-live">✓ Activo</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🛡️ Estabilidad</div>
    <div class="dora-name">Change Failure Rate</div>
    <div class="dora-desc">% de deployments que terminan en fallo. Solo ramas de producción (main/master). CFR + DSR = 100% siempre.</div>
    <div><span class="dora-badge badge-live">✓ Activo</span></div>
  </div>
  <div class="dora-card">
    <div class="dora-label">🔄 Recuperación</div>
    <div class="dora-name">MTTR — Time to Recover</div>
    <div class="dora-desc">Tiempo medio de restauración del servicio tras un incidente. Proxy activo via Jira. MTTR real pendiente integración SRE.</div>
    <div><span class="dora-badge badge-pend">⏳ En progreso</span></div>
  </div>
</div>

---

## DX Core 4 — Experiencia del Desarrollador

<div class="section-desc">Framework complementario que mide el impacto del entorno de trabajo en la productividad y bienestar del equipo.</div>
<div class="cl-divider"></div>

<div class="dx-grid">
  <div class="dx-card">
    <div class="dx-num">P1</div>
    <div class="dx-title">Velocidad</div>
    <ul class="dx-items">
      <li>Coding Time</li>
      <li>PR Review Time</li>
      <li>Batch Size</li>
    </ul>
  </div>
  <div class="dx-card">
    <div class="dx-num">P2</div>
    <div class="dx-title">Calidad</div>
    <ul class="dx-items">
      <li>Tasa de retrabajo</li>
      <li>Bugs Jira por proyecto</li>
      <li>PRs rechazados</li>
    </ul>
  </div>
  <div class="dx-card">
    <div class="dx-num">P3</div>
    <div class="dx-title">Eficiencia CI/CD</div>
    <ul class="dx-items">
      <li>Build Time (éxitos)</li>
      <li>Queue Time</li>
      <li>Tendencias históricas</li>
    </ul>
  </div>
  <div class="dx-card">
    <div class="dx-num">P4</div>
    <div class="dx-title">Bienestar</div>
    <ul class="dx-items">
      <li>Burnout Risk</li>
      <li>Commits fines de semana</li>
      <li>Tendencia mensual</li>
    </ul>
  </div>
</div>

<div style="margin-top:14px; font-size:0.8rem; color:var(--cl-muted); text-align:center">
  4 pilares · 12+ métricas activas · Datos en tiempo real desde GitHub y Jira
</div>

---

## El Problema de los Bots — Calidad de Datos

<div class="section-desc">Sin filtros de calidad, las métricas de equipo eran estadísticas de bots, no de personas.</div>

<div class="bot-compare">
  <div class="bot-box before">
    <div class="bot-tag">Antes del filtro</div>
    <div class="bot-big">56%</div>
    <div style="font-size:1.1rem; font-weight:700; color:#fff; margin:8px 0">de los PRs</div>
    <div class="bot-desc">eran de <strong style="color:var(--cl-red)">Dependabot</strong><br>(bot de dependencias)<br><br>12,153 de 21,673 PRs<br>11,407 commits de bots<br><br><em>Métricas de velocidad infladas artificialmente</em></div>
  </div>
  <div class="bot-arrow">→</div>
  <div class="bot-box after">
    <div class="bot-tag">Después del filtro</div>
    <div class="bot-big">0%</div>
    <div style="font-size:1.1rem; font-weight:700; color:#fff; margin:8px 0">ruido de bots</div>
    <div class="bot-desc">Filtro <code style="font-size:0.75rem; background:rgba(32,227,160,0.1); padding:2px 6px; border-radius:4px">head_ref NOT LIKE 'dependabot/%'</code> en <strong style="color:var(--cl-green)">35 paneles</strong><br><br>9,520 PRs humanos reales<br>Métricas confiables para decisiones<br><br><em>Calidad de datos = calidad de decisiones</em></div>
  </div>
</div>

---

## 5 Dashboards en Producción

<div class="cl-divider"></div>

<div class="dash-list">
  <div class="dash-row">
    <div class="dash-icon">🏠</div>
    <div>
      <div class="dash-info-name">Portal de Inicio</div>
      <div class="dash-info-desc">Navegación central con 6 métricas en tiempo real de la plataforma: repos activos, FAIs mapeados, PRs humanos y pipelines</div>
    </div>
    <div class="dash-audience">Todos los usuarios</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">📊</div>
    <div>
      <div class="dash-info-name">Métricas DORA</div>
      <div class="dash-info-desc">Lead Time · Deployment Frequency · Change Failure Rate · DSR · Pipeline Duration · PR Review Time</div>
    </div>
    <div class="dash-audience">Líderes técnicos</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">💡</div>
    <div>
      <div class="dash-info-name">DX Core 4</div>
      <div class="dash-info-desc">4 pilares: Velocidad del dev · Calidad del código · Eficiencia CI/CD · Bienestar del equipo</div>
    </div>
    <div class="dash-audience">Engineering Managers</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">🔍</div>
    <div>
      <div class="dash-info-name">Detalle Coding</div>
      <div class="dash-info-desc">Análisis granular: Coding Time por FAI, distribución de commits por PR, tendencias semanales</div>
    </div>
    <div class="dash-audience">Tech Leads</div>
  </div>
  <div class="dash-row">
    <div class="dash-icon">🎯</div>
    <div>
      <div class="dash-info-name">Vista Ejecutiva KPIs</div>
      <div class="dash-info-desc">Panel ejecutivo consolidado. Navegación cruzada a DORA, DX Core 4 y Detalle Coding con filtros preservados</div>
    </div>
    <div class="dash-audience">CTO · VPs</div>
  </div>
</div>

---

## Stack Tecnológico

<div class="section-desc">Tecnología open source enterprise-grade, desplegada en Google Cloud.</div>
<div class="cl-divider"></div>

<div class="stack-grid">
  <div class="stack-row">
    <div class="stack-icon">🔧</div>
    <div>
      <div class="stack-info-name">Apache DevLake</div>
      <div class="stack-info-role">Motor de ingesta y normalización de datos DevOps</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">📊</div>
    <div>
      <div class="stack-info-name">Grafana (custom image)</div>
      <div class="stack-info-role">Visualización · Dashboards · Executive view</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">☸️</div>
    <div>
      <div class="stack-info-name">GKE Autopilot</div>
      <div class="stack-info-role">Orquestación serverless en Google Cloud</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">🗄️</div>
    <div>
      <div class="stack-info-name">Cloud SQL (MySQL 8.0)</div>
      <div class="stack-info-role">Base de datos gestionada · Alta disponibilidad</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">⚙️</div>
    <div>
      <div class="stack-info-name">Go Microservice (custom)</div>
      <div class="stack-info-role">Puente Labels API ↔ DevLake — desarrollado por CleverIT</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">📦</div>
    <div>
      <div class="stack-info-name">Kubernetes ConfigMaps</div>
      <div class="stack-info-role">Aprovisionamiento declarativo · Zero downtime</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">🐙</div>
    <div>
      <div class="stack-info-name">GitHub API</div>
      <div class="stack-info-role">Source: repos · PRs · commits · GitHub Actions</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">📋</div>
    <div>
      <div class="stack-info-name">Jira API</div>
      <div class="stack-info-role">Source: issues · bugs · sprints · boards</div>
    </div>
  </div>
  <div class="stack-row">
    <div class="stack-icon">🔐</div>
    <div>
      <div class="stack-info-name">Keycloak / OIDC</div>
      <div class="stack-info-role">SSO corporativo · Control de acceso por rol</div>
    </div>
  </div>
</div>

---
layout: center
---

<div style="text-align:center; margin-bottom:2rem">
  <div class="section-label">Resultados</div>
  <div style="font-size:2rem; font-weight:800; color:#fff; line-height:1.2">Lo que Falabella tiene hoy<br>que no tenía antes</div>
</div>

<div class="result-grid">
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Visibilidad en tiempo real</strong> de 1,897 repositorios, 212 apps y 6 portafolios desde un único portal.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Métricas DORA + DX Core 4</strong> disponibles por equipo, FAI y portafolio — con drill-down desde la vista ejecutiva.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Datos de ingeniería confiables</strong>: filtros anti-bot en 35 paneles. Las métricas reflejan trabajo humano real.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Integración automática de repos</strong>: el servicio Go custom sincroniza repositorios nuevos sin intervención manual.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Infraestructura resiliente</strong>: dashboards persisten entre reinicios via Kubernetes ConfigMaps. Zero downtime.</div>
  </div>
  <div class="result-item">
    <div class="result-check">✓</div>
    <div class="result-text"><strong>Capacidad instalada</strong>: el equipo de Falabella (Juan Cuzmar) toma ownership completo con documentación y runbooks.</div>
  </div>
</div>
