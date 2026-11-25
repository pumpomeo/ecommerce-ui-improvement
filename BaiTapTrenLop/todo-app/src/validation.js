import { isDay } from './dates.js';

export const statuses = ['todo', 'doing', 'done'];
export const priorities = ['high', 'medium', 'low'];
export const categories = ['work', 'study', 'personal'];

export function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

export function taskInput(body) {
  const {
    title, description = '', dueDate, priority = 'medium', status = 'todo', category = 'personal'
  } = body ?? {};
  if (typeof title !== 'string' || !title.trim() || title.trim().length > 160) {
    throw httpError(400, 'Tên công việc phải có từ 1 đến 160 ký tự.');
  }
  if (typeof description !== 'string' || description.length > 2000) {
    throw httpError(400, 'Mô tả chỉ được chứa tối đa 2.000 ký tự.');
  }
  if (!isDay(dueDate)) throw httpError(400, 'Ngày đến hạn không hợp lệ.');
  if (!priorities.includes(priority)) throw httpError(400, 'Mức ưu tiên không hợp lệ.');
  if (!statuses.includes(status)) throw httpError(400, 'Trạng thái công việc không hợp lệ.');
  if (!categories.includes(category)) throw httpError(400, 'Nhóm công việc không hợp lệ.');
  return { title: title.trim(), description: description.trim(), dueDate, priority, status, category };
}
