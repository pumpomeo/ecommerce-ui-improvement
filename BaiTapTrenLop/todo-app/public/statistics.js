import { $, icon, longDate, percent, shortDate, statusLabels } from './dom.js';

export function showStats(days) {
  const totals = days.reduce((sum, day) => ({
    total: sum.total + day.total,
    done: sum.done + day.done,
    doing: sum.doing + day.doing
  }), { total: 0, done: 0, doing: 0 });
  const metrics = [
    ['list', '', 'Tổng việc đến hạn', totals.total],
    ['check', 'done', 'Đã hoàn thành', totals.done],
    ['target', 'rate', 'Tỷ lệ hoàn thành', `${percent(totals.done, totals.total)}%`]
  ];

  $('#stats-period').textContent = `${shortDate(days[0].date)} – ${shortDate(days.at(-1).date)}`;
  $('#metrics').innerHTML = metrics.map(([symbol, theme, label, value]) => `
    <article class="panel metric">
      <span class="metric-icon ${theme}">${icon(symbol)}</span>
      <p>${label}</p><strong>${value}</strong>
    </article>
  `).join('');

  const values = { todo: totals.total - totals.doing - totals.done, doing: totals.doing, done: totals.done };
  const breakdown = $('#breakdown');
  breakdown.innerHTML = Object.entries(statusLabels).map(([status, label]) => `
    <div class="breakdown-row">
      <p class="breakdown-label"><span>${label}</span><strong>${values[status]}</strong></p>
      <div class="breakdown-track" aria-hidden="true"><div class="breakdown-fill ${status}"></div></div>
    </div>
  `).join('');
  for (const [status, count] of Object.entries(values)) {
    breakdown.querySelector(`.${status}`).style.setProperty('--fill', `${percent(count, totals.total)}%`);
  }
  showPlot(days);
}

function showPlot(days) {
  const step = Math.max(1, Math.ceil(Math.max(...days.map(day => day.total)) / 4));
  const max = step * 4;
  const axis = document.createElement('div');
  axis.className = 'chart-axis';
  axis.setAttribute('aria-hidden', 'true');
  for (let tick = max; tick >= 0; tick -= step) {
    const label = document.createElement('span');
    label.textContent = tick;
    axis.append(label);
  }
  const plot = document.createElement('div');
  plot.className = days.length > 7 ? 'plot long' : 'plot';
  plot.style.setProperty('--days', days.length);
  plot.setAttribute('role', 'list');
  plot.setAttribute('aria-label', 'Số công việc đến hạn và đã hoàn thành theo ngày');

  days.forEach(({ date, total, done }, index) => {
    const column = document.createElement('div');
    column.className = 'chart-column';
    column.setAttribute('role', 'listitem');
    const summary = `${longDate(date)}: ${done} / ${total} việc hoàn thành`;
    column.setAttribute('aria-label', summary);
    column.title = summary;
    column.innerHTML = `
      <div class="bars" aria-hidden="true"><span class="bar"></span><span class="bar done"></span></div>
      <span class="chart-date" aria-hidden="true"></span>
    `;
    const [totalBar, doneBar] = column.querySelectorAll('.bar');
    totalBar.style.setProperty('--height', `${percent(total, max)}%`);
    doneBar.style.setProperty('--height', `${percent(done, max)}%`);
    if (days.length <= 7 || (index + 1) % 5 === 0) {
      column.querySelector('.chart-date').textContent = shortDate(date);
    }
    plot.append(column);
  });
  $('#chart').replaceChildren(axis, plot);
}
