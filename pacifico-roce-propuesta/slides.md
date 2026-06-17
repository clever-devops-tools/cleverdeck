---
theme: default
colorSchema: dark
title: "ROCE — Reliability & Observability Center of Excellence"
fonts:
  sans: Inter
  mono: JetBrains Mono
drawings:
  persist: false
transition: fade
---

<div class="cover-chip">Propuesta de Servicio · 2026</div>

<div class="cover-title">Observabilidad de Ingeniería<br>para los equipos<br>de Pacífico</div>

<div class="cover-sub">DORA · DX Core 4 · GitHub como fuente primaria<br>Reliability & Observability Center of Excellence</div>

<div class="cover-row">
  <div class="cover-badge"><strong>CleverIT</strong></div>
  <div class="cover-badge">Para <strong>Pacífico Seguros</strong></div>
  <div class="cover-badge">DORA · DX Core 4 · GitHub</div>
</div>

---

## Lo que escuchamos

<div class="section-desc">Entendemos el problema antes de proponer la solución.</div>
<div class="cl-divider"></div>

<div class="problem-grid">
  <div class="problem-card">
    <div class="problem-icon">🗂️</div>
    <div class="problem-title">Muchos proveedores, poca claridad</div>
    <div class="problem-desc">Dynatrace, Grafana, GitHub Actions, Jira — los datos existen en múltiples herramientas pero no hay una capa que los unifique en métricas accionables de ingeniería.</div>
  </div>
  <div class="problem-card">
    <div class="problem-icon">🐙</div>
    <div class="problem-title">GitHub está subutilizado</div>
    <div class="problem-desc">Los equipos ya usan GitHub para todo: código, PRs, y pipelines CI/CD. Esos datos contienen DORA y DX Core 4 completos. Pero nadie los está midiendo.</div>
  </div>
  <div class="problem-card">
    <div class="problem-icon">🎯</div>
    <div class="problem-title">Calidad sobre cantidad</div>
    <div class="problem-desc">No se necesita más observabilidad genérica — se necesita observabilidad de ingeniería accionable: saber qué tan rápido entrega cada equipo y dónde están los cuellos de botella.</div>
  </div>
</div>

<div style="margin-top:20px; padding:14px 20px; background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.3); border-radius:10px; font-size:0.85rem; color:var(--cl-text)">
  💡 <strong>La conclusión:</strong> La mayoría de los datos que Pacífico necesita para DORA y DX Core 4 ya viven en GitHub. Sin necesidad de Dynatrace como intermediario para métricas de desarrollo.
</div>

---

## GitHub ya tiene lo que necesitan

<div class="section-desc">Antes de agregar herramientas, primero extraer el valor de lo que ya existe.</div>

<div class="gh-grid">
  <div class="gh-source">
    <div class="gh-source-icon">🐙</div>
    <div class="gh-source-title">Lo que ya tienen en GitHub</div>
    <div class="gh-source-items">
      <div class="gh-item"><span class="gh-dot"></span>Todos los repositorios de Pacífico</div>
      <div class="gh-item"><span class="gh-dot"></span>Pull Requests con fechas de creación y merge</div>
      <div class="gh-item"><span class="gh-dot"></span>Commits de cada desarrollador con timestamps</div>
      <div class="gh-item"><span class="gh-dot"></span>GitHub Actions: pipelines CI/CD con resultado y tiempos</div>
      <div class="gh-item"><span class="gh-dot"></span>Ramas de producción (main / master)</div>
    </div>
  </div>
  <div class="gh-arrow-col">→</div>
  <div class="gh-metrics">
    <div class="gh-metric-title">Lo que eso permite medir — sin Dynatrace</div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Lead Time: primer commit → merge a producción</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Deployment Frequency: deploys exitosos por equipo</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dora-tag">DORA</span>
      <span>Change Failure Rate: % pipelines fallidos en prod</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>Coding Time, PR Review Time, Batch Size</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>Build Time, Queue Time (GitHub Actions)</span>
    </div>
    <div class="gh-metric-item">
      <span class="gh-tag dx-tag">DX Core 4</span>
      <span>Burnout Risk (commits en fin de semana)</span>
    </div>
  </div>
</div>

<div style="margin-top:12px; padding:10px 16px; background:rgba(32,227,160,0.07); border:1px solid rgba(32,227,160,0.2); border-radius:8px; font-size:0.8rem; color:var(--cl-text); text-align:center">
  🔌 <strong>Dynatrace lo complementamos</strong> para APM (traces, errores, latencia) y métricas de infraestructura — no como intermediario de datos de desarrollo.
</div>

---

## Los Frameworks: DORA + DX Core 4

<div class="section-desc">Dos frameworks internacionales que dan observabilidad completa al ciclo de vida del software.</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:1rem">
  <div style="background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:12px; padding:20px">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--cl-blue); margin-bottom:10px">DORA — Velocidad y Estabilidad de Entrega</div>
    <div style="font-size:0.88rem; color:var(--cl-muted); margin-bottom:14px">Google & DORA Research Program. El estándar para medir la capacidad de entrega de software de un equipo.</div>
    <div style="display:flex; flex-direction:column; gap:8px">
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-blue); font-weight:700; min-width:20px">⚡</span>
        <span><strong>Lead Time for Changes</strong> — ¿cuánto tarda un cambio en llegar a prod?</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-blue); font-weight:700; min-width:20px">🚀</span>
        <span><strong>Deployment Frequency</strong> — ¿con qué frecuencia despliega el equipo?</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-blue); font-weight:700; min-width:20px">🛡️</span>
        <span><strong>Change Failure Rate</strong> — % de deployments que fallan en prod</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-blue); font-weight:700; min-width:20px">🔄</span>
        <span><strong>MTTR</strong> — ¿cuánto tarda el equipo en recuperarse de un fallo?</span>
      </div>
    </div>
    <div style="margin-top:12px; font-size:0.72rem; color:var(--cl-cyan)">→ fuente primaria: GitHub Actions + Dynatrace (MTTR)</div>
  </div>
  <div style="background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:12px; padding:20px">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--cl-cyan); margin-bottom:10px">DX Core 4 — El Día a Día del Desarrollador</div>
    <div style="font-size:0.88rem; color:var(--cl-muted); margin-bottom:14px">DX Research. Lo que DORA no mide: la experiencia y eficiencia del desarrollador en su flujo de trabajo diario.</div>
    <div style="display:flex; flex-direction:column; gap:8px">
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-cyan); font-weight:700; min-width:20px">P1</span>
        <span><strong>Velocidad</strong> — Coding Time · PR Review Time · Batch Size</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-cyan); font-weight:700; min-width:20px">P2</span>
        <span><strong>Calidad</strong> — Retrabajo · Bugs · PRs rechazados</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-cyan); font-weight:700; min-width:20px">P3</span>
        <span><strong>Eficiencia CI/CD</strong> — Build Time · Queue Time · tendencias</span>
      </div>
      <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--cl-text)">
        <span style="color:var(--cl-cyan); font-weight:700; min-width:20px">P4</span>
        <span><strong>Bienestar</strong> — Burnout Risk · carga fuera de horario</span>
      </div>
    </div>
    <div style="margin-top:12px; font-size:0.72rem; color:var(--cl-cyan)">→ fuente primaria: GitHub (100% — commits, PRs, Actions)</div>
  </div>
</div>

---

## Nuestra Propuesta

<div class="cl-divider"></div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:1rem">
  <div>
    <div style="font-size:1.6rem; font-weight:800; color:#fff; line-height:1.2; margin-bottom:12px">
      DORA + DX Core 4<br>
      <span style="color:var(--cl-cyan)">para los equipos de Pacífico.</span>
    </div>
    <div style="font-size:0.88rem; color:var(--cl-muted); line-height:1.7; margin-bottom:16px">
      No somos una consultoría que entrega un documento. Somos el equipo que extrae métricas reales de lo que ya tienen en GitHub, las complementa con Dynatrace para APM, y le entrega a Pacífico visibilidad accionable mes a mes.
    </div>
    <div style="display:flex; flex-direction:column; gap:8px">
      <div style="display:flex; align-items:center; gap:10px; font-size:0.82rem">
        <span style="color:var(--cl-green); font-weight:700">✓</span>
        <span style="color:var(--cl-text)"><strong>GitHub primero</strong> — DORA y DX Core 4 desde lo que ya tienen, sin nueva instrumentación</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; font-size:0.82rem">
        <span style="color:var(--cl-green); font-weight:700">✓</span>
        <span style="color:var(--cl-text)"><strong>Dynatrace complementario</strong> — APM, latencia, uptime: donde GitHub no llega</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; font-size:0.82rem">
        <span style="color:var(--cl-green); font-weight:700">✓</span>
        <span style="color:var(--cl-text)"><strong>Vista unificada</strong> — una sola plataforma con DORA + DX Core 4 + operacional</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px; font-size:0.82rem">
        <span style="color:var(--cl-green); font-weight:700">✓</span>
        <span style="color:var(--cl-text)"><strong>Capacidad instalada</strong> — al finalizar, Pacífico opera sin depender de CleverIT</span>
      </div>
    </div>
  </div>
  <div style="background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:12px; padding:24px">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--cl-cyan); margin-bottom:12px">La arquitectura en una línea</div>
    <div style="font-size:0.82rem; color:var(--cl-muted); margin-bottom:16px; line-height:1.6">
      <span style="color:var(--cl-text); font-weight:600">GitHub</span> (repos, PRs, Actions) + <span style="color:var(--cl-text); font-weight:600">Dynatrace</span> (APM, infra)
      <br>↓
      <br><span style="color:var(--cl-cyan); font-weight:600">DevLake</span> (normalización, ETL)
      <br>↓
      <br><span style="color:var(--cl-cyan); font-weight:600">Grafana</span> (DORA · DX Core 4 · Ejecutivo · Operacional)
    </div>
    <div style="height:1px; background:var(--cl-border); margin:14px 0"></div>
    <div style="font-size:0.78rem; color:var(--cl-muted)">
      El mismo stack que implementamos en Falabella para <strong style="color:var(--cl-text)">1,897 repos</strong>. Adaptado al ecosistema de Pacífico.
    </div>
  </div>
</div>

---

## Fase 1 — Fundación (3 Meses)

<div class="section-desc">En 12 semanas: GitHub conectado, DORA y DX Core 4 activos, Dynatrace integrado para APM.</div>

<div class="timeline">
  <div class="tl-phase">
    <div class="tl-dot">🔎</div>
    <div class="tl-weeks">Semanas 1–3</div>
    <div class="tl-name">Discovery</div>
    <ul class="tl-items">
      <li>Relevamiento de equipos y repos GitHub</li>
      <li>Inventario de pipelines CI/CD activos</li>
      <li>Identificación servicios críticos (Dynatrace)</li>
      <li>Definición SLIs/SLOs por servicio</li>
      <li>Diseño del catálogo de métricas DORA + DX Core 4</li>
    </ul>
  </div>
  <div class="tl-phase">
    <div class="tl-dot">🔧</div>
    <div class="tl-weeks">Semanas 4–8</div>
    <div class="tl-name">Implementación</div>
    <ul class="tl-items">
      <li>Plataforma DevLake + Grafana</li>
      <li><strong>GitHub primero</strong>: DORA + DX Core 4 activos</li>
      <li>Integración Dynatrace (APM + uptime)</li>
      <li>Dashboard operacional + ejecutivo</li>
      <li>Filtros de calidad de datos (anti-ruido)</li>
    </ul>
  </div>
  <div class="tl-phase">
    <div class="tl-dot">⚙️</div>
    <div class="tl-weeks">Semanas 9–12</div>
    <div class="tl-name">Operación</div>
    <ul class="tl-items">
      <li>Ajuste alertas (sin ruido)</li>
      <li>Primer Reliability Review con DORA</li>
      <li>Capacitación al equipo de Pacífico</li>
      <li>Definición modelo Fase 2</li>
      <li>Handoff parcial</li>
    </ul>
  </div>
</div>

<div style="margin-top:20px; display:grid; grid-template-columns:repeat(4,1fr); gap:10px">
  <div style="background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.25); border-radius:8px; padding:10px 12px; font-size:0.78rem">
    <div style="color:var(--cl-cyan); font-weight:700; margin-bottom:4px">📄 Entregable</div>
    <div style="color:var(--cl-muted)">DORA + DX Core 4 en producción</div>
  </div>
  <div style="background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.25); border-radius:8px; padding:10px 12px; font-size:0.78rem">
    <div style="color:var(--cl-cyan); font-weight:700; margin-bottom:4px">📊 Entregable</div>
    <div style="color:var(--cl-muted)">Dashboard operacional + ejecutivo</div>
  </div>
  <div style="background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.25); border-radius:8px; padding:10px 12px; font-size:0.78rem">
    <div style="color:var(--cl-cyan); font-weight:700; margin-bottom:4px">📋 Entregable</div>
    <div style="color:var(--cl-muted)">Primer Reliability Review Report</div>
  </div>
  <div style="background:rgba(26,86,255,0.1); border:1px solid rgba(26,86,255,0.25); border-radius:8px; padding:10px 12px; font-size:0.78rem">
    <div style="color:var(--cl-cyan); font-weight:700; margin-bottom:4px">⚠️ Entregable</div>
    <div style="color:var(--cl-muted)">Risk Register + Improvement Backlog</div>
  </div>
</div>

---

## Fase 2 — Servicio Continuo

<div class="section-desc">Un especialista CleverIT embebido en el equipo Pacífico, respaldado por el ROCE central.</div>
<div class="cl-divider"></div>

<div class="phase2-grid">
  <div class="phase2-card">
    <div class="phase2-title">
      <span style="font-size:1.3rem">👤</span> Staffing — Especialista Embebido
    </div>
    <ul class="phase2-items">
      <li>Integrado al equipo de Pacífico</li>
      <li>Opera DORA + DX Core 4 mes a mes</li>
      <li>Onboarding de nuevos repos/servicios</li>
      <li>Genera Reliability Reviews mensuales</li>
      <li>Capacita al equipo interno</li>
      <li>Ajusta métricas con el equipo</li>
    </ul>
  </div>
  <div class="phase2-card">
    <div class="phase2-title">
      <span style="font-size:1.3rem">🏛️</span> ROCE Central — CleverIT
    </div>
    <ul class="phase2-items">
      <li>Backup especializado para escalado</li>
      <li>Troubleshooting de incidentes complejos</li>
      <li>Evolución de estándares y gobierno</li>
      <li>Revisión de arquitecturas cloud</li>
      <li>Roadmap trimestral de mejoras</li>
      <li>SLA: respuesta &lt; 2h hábiles (P1/P2)</li>
    </ul>
  </div>
</div>

<div style="margin-top:16px; padding:16px 20px; background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:10px">
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px; text-align:center">
    <div>
      <div style="font-size:1.4rem; font-weight:800; color:var(--cl-cyan)">Mensual</div>
      <div style="font-size:0.78rem; color:var(--cl-muted)">DORA · Reliability Review Report</div>
    </div>
    <div>
      <div style="font-size:1.4rem; font-weight:800; color:var(--cl-cyan)">Trimestral</div>
      <div style="font-size:0.78rem; color:var(--cl-muted)">Roadmap de Mejoras</div>
    </div>
    <div>
      <div style="font-size:1.4rem; font-weight:800; color:var(--cl-cyan)">&lt; 2h</div>
      <div style="font-size:0.78rem; color:var(--cl-muted)">SLA respuesta incidentes P1/P2</div>
    </div>
  </div>
</div>

---

## KPIs — Qué Medimos para Pacífico

<div class="section-desc">Métricas de ingeniería (DORA + DX Core 4) y métricas operacionales de sus servicios.</div>

<table class="kpi-table">
  <thead>
    <tr>
      <th>Métrica</th>
      <th>Framework</th>
      <th>Fuente</th>
      <th>Objetivo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Lead Time for Changes</strong></td>
      <td><span class="gh-tag dora-tag" style="font-size:0.65rem">DORA</span></td>
      <td>GitHub</td>
      <td><span class="kpi-target">Referencia por equipo</span></td>
    </tr>
    <tr>
      <td><strong>Deployment Frequency</strong></td>
      <td><span class="gh-tag dora-tag" style="font-size:0.65rem">DORA</span></td>
      <td>GitHub Actions</td>
      <td><span class="kpi-target">Referencia por equipo</span></td>
    </tr>
    <tr>
      <td><strong>Change Failure Rate</strong></td>
      <td><span class="gh-tag dora-tag" style="font-size:0.65rem">DORA</span></td>
      <td>GitHub Actions</td>
      <td><span class="kpi-target">&lt; 10%</span></td>
    </tr>
    <tr>
      <td><strong>MTTR</strong></td>
      <td><span class="gh-tag dora-tag" style="font-size:0.65rem">DORA</span></td>
      <td>Dynatrace + incidentes</td>
      <td><span class="kpi-target">&lt; 30 min (P1)</span></td>
    </tr>
    <tr>
      <td><strong>Coding Time · PR Review Time</strong></td>
      <td><span class="gh-tag dx-tag" style="font-size:0.65rem">DX Core 4</span></td>
      <td>GitHub PRs</td>
      <td><span class="kpi-target">Referencia por equipo</span></td>
    </tr>
    <tr>
      <td><strong>Build Time · Queue Time</strong></td>
      <td><span class="gh-tag dx-tag" style="font-size:0.65rem">DX Core 4</span></td>
      <td>GitHub Actions</td>
      <td><span class="kpi-target">Referencia por equipo</span></td>
    </tr>
    <tr>
      <td><strong>Disponibilidad · SLO Compliance</strong></td>
      <td><span style="font-size:0.65rem; background:rgba(255,165,0,0.15); color:#FFA500; border:1px solid rgba(255,165,0,0.3); border-radius:4px; padding:1px 6px; font-weight:700">Operacional</span></td>
      <td>Dynatrace</td>
      <td><span class="kpi-target">≥ 99.5% · ≥ 90% SLO</span></td>
    </tr>
  </tbody>
</table>

---

## Caso de Éxito — Falabella Retail

<div class="section-desc">GitHub como fuente de verdad de ingeniería para uno de los ecosistemas más grandes de Latam.</div>

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-num">1,897</div>
    <div class="stat-label">Repos GitHub con DORA y DX Core 4 activos</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">87K+</div>
    <div class="stat-label">Pipelines GitHub Actions analizados</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">9,520</div>
    <div class="stat-label">PRs humanos reales (filtro anti-bot)</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">212</div>
    <div class="stat-label">Apps con métricas de ingeniería asignadas</div>
  </div>
</div>

<div style="margin-top:14px; display:grid; grid-template-columns:1fr 1fr; gap:12px">
  <div style="background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:10px; padding:16px">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--cl-cyan); margin-bottom:10px">El enfoque GitHub-primero</div>
    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.82rem; color:var(--cl-muted)">
      <div>→ DORA completo desde GitHub Actions (sin intermediarios)</div>
      <div>→ DX Core 4 completo desde PRs y commits de GitHub</div>
      <div>→ Jira complementario para calidad (bugs, retrabajo)</div>
      <div>→ Filtro anti-bot: 56% del ruido eliminado en 35 paneles</div>
      <div>→ 0 líneas de código instrumentadas en los servicios</div>
    </div>
  </div>
  <div style="background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:10px; padding:16px">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--cl-green); margin-bottom:10px">Resultados</div>
    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.82rem; color:var(--cl-muted)">
      <div>✓ De cero visibilidad a métricas en tiempo real</div>
      <div>✓ 5 dashboards en producción 24/7 (DORA, DX Core 4, Ejecutivo)</div>
      <div>✓ Integración automática de repos nuevos</div>
      <div>✓ Capacidad instalada: el equipo opera autónomamente</div>
      <div>✓ Infraestructura resiliente: zero downtime</div>
    </div>
  </div>
</div>

---

## Por Qué CleverIT

<div class="cl-divider"></div>

<div class="why-grid">
  <div class="why-card">
    <div class="why-icon">🐙</div>
    <div class="why-title">Especialistas en GitHub como fuente de datos</div>
    <div class="why-desc">Sabemos extraer DORA y DX Core 4 directamente de GitHub. No necesitas Dynatrace para medir a tus desarrolladores.</div>
  </div>
  <div class="why-card">
    <div class="why-icon">🏆</div>
    <div class="why-title">Experiencia probada en escala</div>
    <div class="why-desc">Implementamos DORA + DX Core 4 para Falabella con 1,897 repos y 212 apps. No es teoría — es producción.</div>
  </div>
  <div class="why-card">
    <div class="why-icon">🎯</div>
    <div class="why-title">Outcomes, no entregables</div>
    <div class="why-desc">Medimos el éxito en mejoras reales de Lead Time y CFR — no en slides. DORA al día 30, evolucionando mensualmente.</div>
  </div>
  <div class="why-card">
    <div class="why-icon">🔗</div>
    <div class="why-title">Integración sin fricción</div>
    <div class="why-desc">GitHub primero. Dynatrace donde corresponde (APM + infra). Todo unificado en Grafana sin reemplazar lo que ya tienen.</div>
  </div>
  <div class="why-card">
    <div class="why-icon">🌱</div>
    <div class="why-title">Capacidad instalada</div>
    <div class="why-desc">Al terminar, Pacífico tiene el sistema, la documentación y el equipo formado para operar y evolucionar sin depender de CleverIT.</div>
  </div>
</div>

---
layout: center
---

<div style="text-align:center; margin-bottom:2rem">
  <div class="section-label">Próximos Pasos</div>
  <div style="font-size:2rem; font-weight:800; color:#fff; line-height:1.2; margin-bottom:8px">¿Arrancamos?</div>
  <div style="font-size:0.9rem; color:var(--cl-muted)">DORA + DX Core 4 para los equipos de Pacífico — desde GitHub, desde el día 1.</div>
</div>

<div class="steps-grid">
  <div class="step-card">
    <div class="step-num">01</div>
    <div class="step-title">Workshop de Discovery</div>
    <div class="step-desc">2 horas con stakeholders técnicos. Mapeamos repos en GitHub, pipelines CI/CD activos y servicios en Dynatrace. Resultado: catálogo de métricas DORA y DX Core 4 para Pacífico.</div>
  </div>
  <div class="step-card">
    <div class="step-num">02</div>
    <div class="step-title">Propuesta Técnica Detallada</div>
    <div class="step-desc">Plan semana a semana con el stack específico para Pacífico: GitHub integration, DevLake, Grafana, y cómo complementamos con Dynatrace para APM.</div>
  </div>
  <div class="step-card">
    <div class="step-num">03</div>
    <div class="step-title">Kick-off Fase 1</div>
    <div class="step-desc">En 2–3 semanas desde la firma. DORA y DX Core 4 activos antes del día 30. Primeras métricas reales de ingeniería de los equipos de Pacífico en producción.</div>
  </div>
</div>

<div style="margin-top:2rem; text-align:center">
  <div style="display:inline-flex; align-items:center; gap:16px; background:var(--cl-surface); border:1px solid var(--cl-border); border-radius:12px; padding:16px 28px">
    <div style="font-size:1.5rem">💬</div>
    <div style="text-align:left">
      <div style="font-size:0.9rem; font-weight:600; color:#fff">¿Conversamos esta semana?</div>
      <div style="font-size:0.8rem; color:var(--cl-muted)">CleverIT — DORA · DX Core 4 · Reliability & Observability Center of Excellence</div>
    </div>
  </div>
</div>
