/**
 * TRIBALONE - Coverage Analytics & SVG Chart Rendering Engine
 * Pure SVG vector visualizations tailored for Government Statistical Dashboards
 */

export class AnalyticsEngine {
  constructor(db) {
    this.db = db;
  }

  // Render Scheme Distribution Donut Chart
  renderSchemeChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const data = this.db.data.coverageStats.schemeBreakdown;
    const total = data.reduce((acc, d) => acc + d.count, 0);

    let startAngle = 0;
    const paths = [];

    data.forEach((d) => {
      const sliceAngle = (d.count / total) * 360;
      const endAngle = startAngle + sliceAngle;

      const x1 = 100 + 75 * Math.cos((Math.PI * (startAngle - 90)) / 180);
      const y1 = 100 + 75 * Math.sin((Math.PI * (startAngle - 90)) / 180);
      const x2 = 100 + 75 * Math.cos((Math.PI * (endAngle - 90)) / 180);
      const y2 = 100 + 75 * Math.sin((Math.PI * (endAngle - 90)) / 180);

      const largeArc = sliceAngle > 180 ? 1 : 0;
      const pathData = `M 100 100 L ${x1} ${y1} A 75 75 0 ${largeArc} 1 ${x2} ${y2} Z`;

      paths.push(`
        <path d="${pathData}" fill="${d.color}" stroke="#FFFFFF" stroke-width="2" class="chart-slice">
          <title>${d.name}: ${d.count.toLocaleString('en-IN')} students (${((d.count / total) * 100).toFixed(1)}%)</title>
        </path>
      `);

      startAngle = endAngle;
    });

    const legend = data.map(d => `
      <div class="chart-legend-item">
        <span class="legend-dot" style="background:${d.color}"></span>
        <span class="legend-label">${d.name}</span>
        <span class="legend-val"><strong>${d.count.toLocaleString('en-IN')}</strong> (${((d.count / total) * 100).toFixed(1)}%)</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="chart-wrapper">
        <svg viewBox="0 0 200 200" class="donut-svg" role="img" aria-label="Scheme distribution donut chart">
          ${paths.join('')}
          <circle cx="100" cy="100" r="42" fill="#FFFFFF"></circle>
          <text x="100" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#0B2545">${total.toLocaleString('en-IN')}</text>
          <text x="100" y="110" text-anchor="middle" font-size="8" fill="#64748B">Students</text>
        </svg>
        <div class="chart-legend">${legend}</div>
      </div>
    `;
  }

  // Render Monthly Application & Disbursement Bar / Line Trend Chart
  renderTrendChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const data = this.db.data.coverageStats.monthlyApplications;
    const maxVal = Math.max(...data.map(d => d.count));
    const width = 420;
    const height = 180;
    const padding = 35;

    const points = data.map((d, i) => {
      const x = padding + (i * (width - 2 * padding)) / (data.length - 1);
      const y = height - padding - (d.count / maxVal) * (height - 2 * padding);
      return { x, y, ...d };
    });

    const pathData = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');
    const areaData = `${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

    const dots = points.map(p => `
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="#1338BE" stroke="#FFFFFF" stroke-width="2">
        <title>${p.month} 2026: ${p.count.toLocaleString('en-IN')} applications</title>
      </circle>
      <text x="${p.x}" y="${p.y - 8}" text-anchor="middle" font-size="9" font-weight="600" fill="#0B2545">${p.count}</text>
      <text x="${p.x}" y="${height - padding + 16}" text-anchor="middle" font-size="9" fill="#64748B">${p.month}</text>
    `).join('');

    container.innerHTML = `
      <div class="chart-wrapper">
        <svg viewBox="0 0 ${width} ${height}" class="trend-svg" role="img" aria-label="Monthly application progression trend">
          <!-- Background Grids -->
          <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#E2E8F0" stroke-width="1"/>
          <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="#E2E8F0" stroke-dasharray="2,2" stroke-width="1"/>
          
          <!-- Gradient Area -->
          <defs>
            <linearGradient id="trendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1338BE" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#1338BE" stop-opacity="0.01"/>
            </linearGradient>
          </defs>
          <path d="${areaData}" fill="url(#trendGrad)" />
          <path d="${pathData}" fill="none" stroke="#1338BE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          ${dots}
        </svg>
      </div>
    `;
  }

  // Render State Coverage Comparison Bar Chart
  renderStateCoverageChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const data = this.db.data.coverageStats.stateBreakdown;
    const maxVal = Math.max(...data.map(d => d.totalST));

    const bars = data.map(d => {
      const recPct = ((d.recipients / d.totalST) * 100).toFixed(1);
      const unreachedPct = ((d.unreached / d.totalST) * 100).toFixed(1);

      return `
        <div class="state-bar-row">
          <div class="state-name-col">
            <strong>${d.state}</strong>
            <span class="state-meta">Total ST: ${d.totalST.toLocaleString('en-IN')}</span>
          </div>
          <div class="state-progress-track">
            <div class="bar-segment bar-recipient" style="width: ${recPct}%;" title="Recipients: ${d.recipients} (${recPct}%)"></div>
            <div class="bar-segment bar-unreached" style="width: ${unreachedPct}%;" title="Unreached: ${d.unreached} (${unreachedPct}%)"></div>
          </div>
          <div class="state-val-col">
            <span class="pct-badge recipient-badge">${recPct}% Availing</span>
            <span class="pct-badge unreached-badge">${d.unreached} Unreached</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="state-chart-box">
        <div class="state-chart-header">
          <div class="legend-pair">
            <span class="legend-swatch" style="background: #046A38;"></span> Availing Scholarship
            <span class="legend-swatch" style="background: #D97706; margin-left: 12px;"></span> Eligible but Unreached
          </div>
        </div>
        <div class="state-bars-list">${bars}</div>
      </div>
    `;
  }
}
