import { readFile } from 'node:fs/promises';
import { createPool } from '../src/db.js';

const db = createPool();

try {
  const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8');
  await db.query(schema);
  const [[info]] = await db.query('SELECT DATABASE() AS databaseName, VERSION() AS version');
  console.log(`Đã tạo hoặc kiểm tra bảng tasks trong ${info.databaseName} · ${info.version}`);
} finally {
  await db.end();
}
