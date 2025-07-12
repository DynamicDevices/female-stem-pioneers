/* global d3 */
// D3.js visualizations for Female STEM Pioneers
// Assumes window.pioneers is available from pioneers.js

document.addEventListener('DOMContentLoaded', function () {
  if (!window.pioneers || !Array.isArray(window.pioneers)) return;
  
  // Set up toggle functionality
  const toggleBtn = document.getElementById('toggleVisualizations');
  const chartsSection = document.getElementById('charts-section');
  const timelineSection = document.getElementById('timeline-section');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const isHidden = chartsSection.classList.contains('hidden');
      
      if (isHidden) {
        // Show visualizations
        chartsSection.classList.remove('hidden');
        timelineSection.classList.remove('hidden');
        toggleBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3v18h18"/>
            <path d="M18 17V9"/>
            <path d="M13 17V5"/>
            <path d="M8 17v-3"/>
          </svg>
          Hide Data Visualizations
        `;
        
        // Render charts if not already rendered
        if (!chartsSection.querySelector('svg')) {
          renderFieldChart(window.pioneers);
          renderCountryChart(window.pioneers);
          renderEraChart(window.pioneers);
          renderTimeline(window.pioneers);
        }
      } else {
        // Hide visualizations
        chartsSection.classList.add('hidden');
        timelineSection.classList.add('hidden');
        toggleBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3v18h18"/>
            <path d="M18 17V9"/>
            <path d="M13 17V5"/>
            <path d="M8 17v-3"/>
          </svg>
          Show Data Visualizations
        `;
      }
    });
  }
});

function renderFieldChart(pioneers) {
  // Count by field
  const fieldCounts = d3.rollup(
    pioneers,
    v => v.length,
    d => d.field
  );
  const data = Array.from(fieldCounts, ([field, count]) => ({ field, count }));
  data.sort((a, b) => b.count - a.count);

  const width = 400, height = 250, margin = { top: 30, right: 20, bottom: 40, left: 80 };
  const svg = d3.select('#field-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([margin.left, width - margin.right]);
  const y = d3.scaleBand()
    .domain(data.map(d => d.field))
    .range([margin.top, height - margin.bottom])
    .padding(0.2);

  svg.append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', x(0))
    .attr('y', d => y(d.field))
    .attr('width', d => x(d.count) - x(0))
    .attr('height', y.bandwidth())
    .attr('fill', '#60a5fa');

  svg.append('g')
    .attr('transform', `translate(0,${margin.top})`)
    .call(d3.axisTop(x).ticks(5).tickFormat(d3.format('d')));

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
}

function renderCountryChart(pioneers) {
  // Count by country
  const countryCounts = d3.rollup(
    pioneers,
    v => v.length,
    d => d.country
  );
  const data = Array.from(countryCounts, ([country, count]) => ({ country, count }));
  data.sort((a, b) => b.count - a.count);

  const width = 400, height = 250, margin = { top: 30, right: 20, bottom: 40, left: 80 };
  const svg = d3.select('#country-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([margin.left, width - margin.right]);
  const y = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([margin.top, height - margin.bottom])
    .padding(0.2);

  svg.append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', x(0))
    .attr('y', d => y(d.country))
    .attr('width', d => x(d.count) - x(0))
    .attr('height', y.bandwidth())
    .attr('fill', '#a78bfa');

  svg.append('g')
    .attr('transform', `translate(0,${margin.top})`)
    .call(d3.axisTop(x).ticks(5).tickFormat(d3.format('d')));

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
}

function renderEraChart(pioneers) {
  // Group by era (decade of birth)
  const getEra = p => {
    if (!p.birth || isNaN(Number(p.birth))) return 'Unknown';
    const year = Number(p.birth);
    return `${Math.floor(year / 10) * 10}s`;
  };
  const eraCounts = d3.rollup(
    pioneers,
    v => v.length,
    getEra
  );
  const data = Array.from(eraCounts, ([era, count]) => ({ era, count }));
  data.sort((a, b) => a.era.localeCompare(b.era));

  const width = 400, height = 250, margin = { top: 30, right: 20, bottom: 40, left: 80 };
  const svg = d3.select('#era-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const x = d3.scaleBand()
    .domain(data.map(d => d.era))
    .range([margin.left, width - margin.right])
    .padding(0.2);
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([height - margin.bottom, margin.top]);

  svg.append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => x(d.era))
    .attr('y', d => y(d.count))
    .attr('width', x.bandwidth())
    .attr('height', d => y(0) - y(d.count))
    .attr('fill', '#f472b6');

  svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('d')));
}

function renderTimeline(pioneers) {
  // Timeline: one dot per pioneer, x = birth year
  const data = pioneers
    .filter(p => p.birth && !isNaN(Number(p.birth)))
    .map(p => ({
      name: p.name,
      field: p.field,
      birth: Number(p.birth),
      death: p.death ? Number(p.death) : null
    }))
    .sort((a, b) => a.birth - b.birth);

  const width = 800, height = 120, margin = { top: 30, right: 30, bottom: 40, left: 60 };
  const svg = d3.select('#timeline')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.birth))
    .range([margin.left, width - margin.right]);

  svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(10).tickFormat(d3.format('d')));

  svg.append('g')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(d.birth))
    .attr('cy', height / 2)
    .attr('r', 7)
    .attr('fill', '#60a5fa')
    .attr('opacity', 0.7)
    .on('mouseover', function (event, d) {
      d3.select(this).attr('fill', '#fbbf24');
      showTooltip(`${d.name} (${d.birth}${d.death ? '–' + d.death : ''})<br>${d.field}`, event.pageX, event.pageY);
    })
    .on('mouseout', function () {
      d3.select(this).attr('fill', '#60a5fa');
      hideTooltip();
    });

  // Tooltip
  const tooltip = d3.select('body').selectAll('.d3-tooltip').data([null]).join('div')
    .attr('class', 'd3-tooltip')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .style('background', 'rgba(30,41,59,0.95)')
    .style('color', '#fff')
    .style('padding', '8px 12px')
    .style('border-radius', '8px')
    .style('font-size', '1rem')
    .style('z-index', 1000)
    .style('display', 'none');

  function showTooltip(html, x, y) {
    tooltip.html(html)
      .style('left', (x + 10) + 'px')
      .style('top', (y - 28) + 'px')
      .style('display', 'block');
  }
  function hideTooltip() {
    tooltip.style('display', 'none');
  }
} 