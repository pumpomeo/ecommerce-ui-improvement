import express from 'express';
import { fileURLToPath } from 'node:url';
import { addDays, dayInZone, isDay } from './dates.js';
import { httpError, statuses, taskInput } from './validation.js';
import * as store from './task-store.js';

export function createApp(db, timeZone) {
  const app = express();
  const today = () => dayInZone(new Date(), timeZone);
  app.disable('x-powered-by');
  app.use((_req, res, next) => {
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Content-Security-Policy', "default-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
    next();
  });
  app.use('/api', express.json({ limit: '16kb' }));
  app.use('/api', (_req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
  });

  app.param('id', (req, _res, next, id) => {
    if (!/^[1-9]\d{0,9}$/.test(id) || Number(id) > 4_294_967_295) {
      return next(httpError(400, 'Mã công việc không hợp lệ.'));
    }
    req.taskId = Number(id);
    next();
  });

  app.get('/api/tasks', async (req, res) => {
    const currentDay = today();
    const date = req.query.date === 'today' ? currentDay : req.query.date;
    if (date !== undefined && !isDay(date)) throw httpError(400, 'Ngày lọc không hợp lệ.');
    res.json({ today: currentDay, tasks: await store.listTasks(db, date) });
  });

  app.post('/api/tasks', async (req, res) => {
    const task = await store.createTask(db, taskInput(req.body));
    res.status(201).json(task);
  });

  app.put('/api/tasks/:id', async (req, res) => {
    if (!await store.updateTask(db, req.taskId, taskInput(req.body))) {
      throw httpError(404, 'Không tìm thấy công việc.');
    }
    res.sendStatus(204);
  });

  app.patch('/api/tasks/:id/status', async (req, res) => {
    const status = req.body?.status;
    if (!statuses.includes(status)) throw httpError(400, 'Trạng thái công việc không hợp lệ.');
    if (!await store.updateStatus(db, req.taskId, status)) {
      throw httpError(404, 'Không tìm thấy công việc.');
    }
    res.sendStatus(204);
  });

  app.delete('/api/tasks/:id', async (req, res) => {
    if (!await store.deleteTask(db, req.taskId)) throw httpError(404, 'Không tìm thấy công việc.');
    res.sendStatus(204);
  });

  app.get('/api/stats', async (req, res) => {
    const range = req.query.days ?? '7';
    if (!['7', '30'].includes(range)) throw httpError(400, 'Chỉ hỗ trợ khoảng 7 hoặc 30 ngày.');
    const to = today();
    const days = Array.from({ length: Number(range) }, (_, index) =>
      addDays(to, index - Number(range) + 1)
    );
    const rows = await store.statsByDay(db, days[0], to);
    const byDate = new Map(rows.map(row => [row.date, row]));
    res.json({
      today: to,
      days: days.map(date => byDate.get(date) ?? { date, total: 0, done: 0, doing: 0 })
    });
  });

  app.use('/api', (_req, res) => res.status(404).json({ message: 'Đường dẫn không tồn tại.' }));
  app.use(express.static(fileURLToPath(new URL('../public/', import.meta.url))));
  app.use((error, _req, res, _next) => {
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'Dữ liệu JSON không hợp lệ.' });
    }
    if (error.type === 'entity.too.large') {
      return res.status(413).json({ message: 'Dữ liệu gửi lên quá lớn.' });
    }
    if ([400, 404].includes(error.status)) {
      return res.status(error.status).json({ message: error.message });
    }
    console.error(error.code ?? error.message);
    res.status(500).json({ message: 'Máy chủ gặp lỗi. Vui lòng thử lại.' });
  });
  return app;
}
