import mysql from 'mysql2/promise';

export const timeZone = process.env.APP_TIMEZONE ?? 'Asia/Bangkok';

export function createPool() {
  return mysql.createPool({
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: Number(process.env.DB_PORT ?? 3306),
    socketPath: process.env.DB_SOCKET || undefined,
    database: process.env.DB_NAME ?? 'todo_app',
    user: process.env.DB_USER ?? 'todo_app',
    password: process.env.DB_PASSWORD ?? '',
    charset: 'utf8mb4',
    dateStrings: true,
    connectionLimit: 5
  });
}
