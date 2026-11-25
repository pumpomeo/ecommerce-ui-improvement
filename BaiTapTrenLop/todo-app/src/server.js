import { createApp } from './app.js';
import { createPool, timeZone } from './db.js';
import { dayInZone } from './dates.js';

const db = createPool();
const host = process.env.HOST ?? '127.0.0.1';
const port = Number(process.env.PORT ?? 3000);

try {
  dayInZone(new Date(), timeZone);
  await db.query('SELECT id FROM tasks LIMIT 1');
  const server = createApp(db, timeZone).listen(port, host, () => {
    console.log(`Todo App · http://${host}:${port}`);
  });
  server.once('error', async error => {
    console.error(`Không thể mở máy chủ: ${error.code ?? error.message}`);
    await db.end();
    process.exitCode = 1;
  });
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.once(signal, () => server.close(() => db.end()));
  }
} catch (error) {
  console.error(`Không thể khởi động Todo App (${error.code ?? error.message}). Kiểm tra kết nối DB và chạy npm run db:init.`);
  await db.end();
  process.exitCode = 1;
}
