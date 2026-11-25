import { $, categoryInfo, formatDay, icon, longDate, percent, shortDate, statusLabels, utcDate } from './dom.js';
import { showStats } from './statistics.js';

const priorityLabels = { high: 'Cao', medium: 'Vừa', low: 'Thấp' };
const state = {
  route: 'today', today: '', selectedDay: '', month: '', tasks: [],
  status: '', category: '', range: '7'
};

const taskDialog = $('#task-dialog');
const taskForm = $('#task-form');
const deleteDialog = $('#delete-dialog');
const deleteForm = $('#delete-form');
let loadId = 0;
let toastTimer;

async function api(path, method = 'GET', body) {
  const options = { method };
  if (body !== undefined) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(body);
  }
  let response;
  try {
    response = await fetch(`/api${path}`, options);
  } catch {
    throw new Error('Không kết nối được với máy chủ.');
  }
  if (response.status === 204) return;
  const data = await response.json();
  if (!response.ok) throw new Error(data.message ?? 'Không thể tải dữ liệu.');
  return data;
}

function showMessage(message, retry = false) {
  const banner = $('#status-message');
  banner.hidden = !message;
  banner.textContent = message;
  if (retry) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'secondary';
    button.textContent = 'Thử lại';
    button.addEventListener('click', () => loadView());
    banner.append(button);
  }
}

function notify(message) {
  const toast = $('#toast');
  toast.hidden = false;
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3600);
}

function routeFromHash() {
  const hash = location.hash.slice(1);
  return /^(today|all|stats|day\/\d{4}-\d{2}-\d{2})$/.test(hash) ? hash : 'today';
}

function navigate() {
  state.route = routeFromHash();
  state.status = '';
  state.category = '';
  state.month = '';
  $('#search').value = '';
  $('#priority').value = '';
  const page = state.route.startsWith('day/') ? 'today' : state.route;
  for (const link of document.querySelectorAll('[data-page]')) {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const titles = { all: 'Tất cả công việc', stats: 'Thống kê', today: 'Việc hôm nay' };
  $('#page-title').textContent = titles[state.route] ?? 'Việc trong ngày';
  $('#page-date').textContent = state.today ? longDate(state.today) : '';
  $('#add-task').hidden = state.route === 'stats';
  loadView();
}

async function loadView(keepVisible = false) {
  const id = ++loadId;
  const route = state.route;
  const tasksPanel = $('#task-view');
  const statsPanel = $('#stats-view');
  const active = route === 'stats' ? statsPanel : tasksPanel;
  if (!keepVisible) {
    tasksPanel.hidden = true;
    statsPanel.hidden = true;
    $('#add-task').disabled = true;
    showMessage('Đang tải công việc…');
  }
  try {
    if (route === 'stats') {
      const { today, days } = await api(`/stats?days=${state.range}`);
      if (id !== loadId) return;
      state.today = today;
      showStats(days);
    } else {
      const date = route === 'today' ? 'today' : route.split('/')[1];
      const { today, tasks } = await api(date ? `/tasks?date=${date}` : '/tasks');
      if (id !== loadId) return;
      state.today = today;
      state.selectedDay = date === 'today' ? today : date;
      state.month ||= (state.selectedDay ?? today).slice(0, 7);
      state.tasks = tasks;
      drawTasks();
      $('#add-task').disabled = false;
    }
    $('#page-date').textContent = longDate(route.startsWith('day/') ? state.selectedDay : state.today);
    active.hidden = false;
    showMessage('');
  } catch (error) {
    if (id !== loadId) return;
    active.hidden = true;
    showMessage(error.message, true);
  }
}

function searchable(text) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/đ/g, 'd');
}

function drawTasks() {
  const done = state.tasks.filter(task => task.status === 'done').length;
  const completion = `${percent(done, state.tasks.length)}%`;
  $('#progress-title').textContent = state.route === 'all' ? 'Tiến độ tổng thể'
    : state.route === 'today' ? 'Tiến độ hôm nay' : 'Tiến độ trong ngày';
  $('#hero-done').textContent = done;
  $('#hero-total').textContent = ` / ${state.tasks.length}`;
  $('#progress-ring').style.setProperty('--progress', completion);
  $('#progress-label').textContent = completion;
  drawTaskList();
  drawCategories();
  drawCalendar();
}

function drawTaskList() {
  const query = searchable($('#search').value.trim());
  const priority = $('#priority').value;
  const rows = state.tasks.filter(task =>
    (!state.status || task.status === state.status) &&
    (!priority || task.priority === priority) &&
    (!state.category || task.category === state.category) &&
    (!query || searchable(`${task.title} ${task.description}`).includes(query))
  );
  for (const button of $('#status-filters').querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button.dataset.status === state.status));
  }

  $('#task-count').textContent = rows.length;
  $('#task-list').replaceChildren(...rows.map(taskRow));
  const empty = $('#task-empty');
  empty.hidden = rows.length > 0;
  const filtered = query || priority || state.status || state.category;
  if (!rows.length) {
    empty.innerHTML = filtered
      ? '<strong>Không tìm thấy công việc</strong>Thử từ khóa khác hoặc đổi bộ lọc.'
      : '<strong>Chưa có công việc</strong>Chọn Thêm công việc để bắt đầu.';
  }
}

function taskRow(task) {
  const row = document.createElement('li');
  row.className = `task-row${task.status === 'done' ? ' is-done' : ''}`;
  row.dataset.id = task.id;
  row.innerHTML = `
    <div class="task-main">
      <button class="task-check" type="button" data-action="toggle"><span>${icon('check')}</span></button>
      <div class="task-copy"><span class="task-title"></span><span class="task-meta"></span></div>
    </div>
    <span class="chip"></span>
    <span class="priority-tag"></span>
    <div class="task-actions">
      <button class="icon-button" type="button" data-action="edit" title="Chỉnh sửa">${icon('edit')}</button>
      <button class="icon-button" type="button" data-action="delete" title="Xóa">${icon('trash')}</button>
    </div>
  `;
  row.querySelector('.task-title').textContent = task.title;
  const details = [statusLabels[task.status]];
  if (state.route === 'all') details.push(shortDate(task.dueDate));
  if (task.description) details.push(task.description);
  row.querySelector('.task-meta').textContent = details.join(' · ');
  const chip = row.querySelector('.chip');
  chip.classList.add(task.category);
  chip.textContent = categoryInfo[task.category].label;
  const priority = row.querySelector('.priority-tag');
  priority.classList.add(task.priority);
  priority.textContent = priorityLabels[task.priority];

  const check = row.querySelector('.task-check');
  check.setAttribute('aria-pressed', String(task.status === 'done'));
  check.setAttribute('aria-label', `Hoàn thành: ${task.title}`);
  row.querySelector('[data-action="edit"]').setAttribute('aria-label', `Chỉnh sửa: ${task.title}`);
  row.querySelector('[data-action="delete"]').setAttribute('aria-label', `Xóa: ${task.title}`);
  return row;
}

function drawCategories() {
  const group = $('#category-filters');
  group.innerHTML = Object.entries(categoryInfo).map(([key, item]) => `
    <button type="button" data-category="${key}" aria-pressed="${key === state.category}">
      <span class="category-icon ${key}">${icon(item.icon)}</span>
      ${item.label}
      <span class="category-count">${state.tasks.filter(task => task.category === key).length}</span>
    </button>
  `).join('');
}

function drawCalendar() {
  const first = utcDate(`${state.month}-01`);
  const start = (first.getUTCDay() + 6) % 7;
  const cells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(first);
    date.setUTCDate(1 - start + index);
    const day = date.toISOString().slice(0, 10);
    const button = document.createElement('button');
    button.type = 'button';
    button.disabled = !/^\d{4}-\d{2}-\d{2}$/.test(day) || day < '1000-01-01';
    if (button.disabled) return document.createElement('span');
    button.dataset.day = day;
    button.textContent = date.getUTCDate();
    button.classList.toggle('outside', day.slice(0, 7) !== state.month);
    button.setAttribute('aria-label', longDate(day));
    button.setAttribute('aria-pressed', String(day === state.selectedDay));
    if (day === state.today) button.setAttribute('aria-current', 'date');
    return button;
  });
  $('#calendar-month').textContent = formatDay(`${state.month}-01`, { month: 'long', year: 'numeric' });
  $('#previous-month').disabled = state.month === '1000-01';
  $('#next-month').disabled = state.month === '9999-12';
  $('#calendar-days').replaceChildren(...cells);
}

function shiftMonth(step) {
  const date = utcDate(`${state.month}-01`);
  date.setUTCMonth(date.getUTCMonth() + step);
  state.month = date.toISOString().slice(0, 7);
  drawCalendar();
}

function openTask(task) {
  taskForm.reset();
  taskForm.dataset.id = task?.id ?? '';
  $('#dialog-title').textContent = task ? 'Chỉnh sửa công việc' : 'Thêm công việc';
  const defaults = { dueDate: state.selectedDay ?? state.today, priority: 'medium' };
  for (const [name, value] of Object.entries(task ?? defaults)) {
    const input = taskForm.elements.namedItem(name);
    if (input) input.value = value;
  }
  taskForm.querySelector('.form-error').hidden = true;
  taskDialog.showModal();
}

function openDelete(task) {
  deleteForm.dataset.id = task.id;
  $('#delete-text').textContent = `Công việc “${task.title}” sẽ bị xóa khỏi danh sách.`;
  deleteForm.querySelector('.form-error').hidden = true;
  deleteDialog.showModal();
}

async function submitDialog(form, request, message) {
  const dialog = form.closest('dialog');
  const errorLine = form.querySelector('.form-error');
  const buttons = [...form.querySelectorAll('button')];
  buttons.forEach(button => { button.disabled = true; });
  form.dataset.saving = 'true';
  errorLine.hidden = true;
  try {
    await request();
    dialog.close();
    await loadView(true);
    notify(message);
  } catch (error) {
    errorLine.textContent = error.message;
    errorLine.hidden = false;
  } finally {
    buttons.forEach(button => { button.disabled = false; });
    delete form.dataset.saving;
  }
}

$('#add-task').addEventListener('click', () => openTask());
$('#search').addEventListener('input', drawTaskList);
$('#priority').addEventListener('change', drawTaskList);

$('#task-list').addEventListener('click', async event => {
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const id = Number(action.closest('.task-row').dataset.id);
  const task = state.tasks.find(item => item.id === id);
  if (action.dataset.action === 'edit') return openTask(task);
  if (action.dataset.action === 'delete') return openDelete(task);

  action.disabled = true;
  const status = task.status === 'done' ? 'todo' : 'done';
  const route = state.route;
  try {
    await api(`/tasks/${id}/status`, 'PATCH', { status });
    await loadView(true);
    if (state.route === route && document.activeElement === document.body) {
      const next = document.querySelector(`[data-id="${id}"] .task-check`) ?? $('#search');
      next.focus({ preventScroll: true });
    }
    notify(status === 'done' ? 'Đã hoàn thành công việc.' : 'Đã mở lại công việc.');
  } catch (error) {
    notify(error.message);
  } finally {
    action.disabled = false;
  }
});

$('#status-filters').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  state.status = button.dataset.status;
  drawTaskList();
});

$('#category-filters').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  state.category = state.category === button.dataset.category ? '' : button.dataset.category;
  for (const item of $('#category-filters').querySelectorAll('button')) {
    item.setAttribute('aria-pressed', String(item.dataset.category === state.category));
  }
  drawTaskList();
});

$('#previous-month').addEventListener('click', () => shiftMonth(-1));
$('#next-month').addEventListener('click', () => shiftMonth(1));
$('#calendar-days').addEventListener('click', event => {
  const day = event.target.closest('button')?.dataset.day;
  if (!day) return;
  if (day === state.selectedDay && state.month !== day.slice(0, 7)) {
    state.month = day.slice(0, 7);
    drawCalendar();
    $('#calendar-days button[aria-pressed="true"]')?.focus();
  }
  location.hash = day === state.today ? 'today' : `day/${day}`;
});

$('#range-filters').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.dataset.days === state.range) return;
  state.range = button.dataset.days;
  for (const item of $('#range-filters').querySelectorAll('button')) {
    item.setAttribute('aria-pressed', String(item === button));
  }
  loadView(true);
});

for (const dialog of [taskDialog, deleteDialog]) {
  dialog.addEventListener('click', event => {
    if (event.target.closest('[data-close]')) dialog.close();
  });
  dialog.addEventListener('cancel', event => {
    if (dialog.querySelector('form').dataset.saving) event.preventDefault();
  });
}

taskForm.addEventListener('submit', event => {
  event.preventDefault();
  if (taskForm.dataset.saving) return;
  const id = taskForm.dataset.id;
  const body = Object.fromEntries(new FormData(taskForm));
  submitDialog(taskForm, () => api(id ? `/tasks/${id}` : '/tasks', id ? 'PUT' : 'POST', body),
    id ? 'Đã cập nhật công việc.' : 'Đã thêm công việc.');
});

deleteForm.addEventListener('submit', event => {
  event.preventDefault();
  if (deleteForm.dataset.saving) return;
  submitDialog(deleteForm, () => api(`/tasks/${deleteForm.dataset.id}`, 'DELETE'), 'Đã xóa công việc.');
});

$('[data-skip]').addEventListener('click', event => {
  event.preventDefault();
  $('#main').focus();
});
window.addEventListener('hashchange', navigate);
navigate();
