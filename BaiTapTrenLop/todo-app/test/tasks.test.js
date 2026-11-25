import assert from 'node:assert/strict';
import test from 'node:test';
import { addDays, dayInZone, isDay } from '../src/dates.js';
import { taskInput } from '../src/validation.js';

test('ngày ứng dụng đổi theo giờ địa phương ở ranh giới UTC', () => {
  assert.equal(dayInZone(new Date('2026-11-24T18:00:00Z'), 'Asia/Bangkok'), '2026-11-25');
  assert.equal(addDays('2024-03-01', -1), '2024-02-29');
});

test('chỉ chấp nhận ngày tồn tại trên lịch', () => {
  assert.equal(isDay('2025-02-29'), false);
  assert.equal(isDay('2026-11-31'), false);
  assert.equal(isDay('0000-01-01'), false);
  assert.equal(isDay('2024-02-29'), true);
});

test('dữ liệu công việc có giá trị mặc định và bỏ khoảng trắng thừa', () => {
  assert.deepEqual(taskInput({ title: '  Học Node.js  ', dueDate: '2026-11-25' }), {
    title: 'Học Node.js', description: '', dueDate: '2026-11-25',
    priority: 'medium', status: 'todo', category: 'personal'
  });
});

test('từ chối tiêu đề trống, ngày sai và trạng thái ngoài danh sách', () => {
  for (const input of [
    { title: '   ', dueDate: '2026-11-25' },
    { title: 'Việc mới', dueDate: '2026-02-30' },
    { title: 'Việc mới', dueDate: '2026-11-25', status: 'unknown' },
    { title: 'Việc mới', dueDate: '2026-11-25', description: 12 }
  ]) {
    assert.throws(() => taskInput(input), { status: 400 });
  }
});
