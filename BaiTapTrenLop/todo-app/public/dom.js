export const $ = selector => document.querySelector(selector);

export const statusLabels = {
  todo: 'Chưa làm', doing: 'Đang làm', done: 'Hoàn thành'
};

export const categoryInfo = {
  work: { label: 'Công việc', icon: 'briefcase' },
  study: { label: 'Học tập', icon: 'book' },
  personal: { label: 'Cá nhân', icon: 'person' }
};

export function icon(name) {
  return `<svg aria-hidden="true"><use href="/icons.svg#${name}"></use></svg>`;
}

export function percent(part, total) {
  return total ? Math.round(part / total * 100) : 0;
}

export function utcDate(day) {
  return new Date(`${day}T00:00:00Z`);
}

export function formatDay(day, options) {
  return utcDate(day).toLocaleDateString('vi-VN', { ...options, timeZone: 'UTC' });
}

export const longDate = day => formatDay(day, {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
});

export const shortDate = day => formatDay(day, { day: 'numeric', month: 'numeric' });
