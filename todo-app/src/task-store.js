const columns = 'id, title, description, due_date AS dueDate, priority, status, category';
const fields = 'title = ?, description = ?, due_date = ?, priority = ?, status = ?, category = ?';

function values(task) {
  return [task.title, task.description, task.dueDate, task.priority, task.status, task.category];
}

export async function listTasks(db, date) {
  const where = date ? 'WHERE due_date = ?' : '';
  const [tasks] = await db.execute(
    `SELECT ${columns} FROM tasks ${where} ORDER BY status = 'done', due_date, priority, id`,
    date ? [date] : []
  );
  return tasks;
}

export async function createTask(db, task) {
  const [result] = await db.execute(
    'INSERT INTO tasks (title, description, due_date, priority, status, category) VALUES (?, ?, ?, ?, ?, ?)',
    values(task)
  );
  return { id: result.insertId, ...task };
}

export async function updateTask(db, id, task) {
  const [result] = await db.execute(`UPDATE tasks SET ${fields} WHERE id = ?`, [...values(task), id]);
  return result.affectedRows > 0;
}

export async function updateStatus(db, id, status) {
  const [result] = await db.execute('UPDATE tasks SET status = ? WHERE id = ?', [status, id]);
  return result.affectedRows > 0;
}

export async function deleteTask(db, id) {
  const [result] = await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

export async function statsByDay(db, from, to) {
  const [rows] = await db.execute(
    `SELECT due_date AS date, COUNT(*) AS total,
       SUM(status = 'done') AS done, SUM(status = 'doing') AS doing
     FROM tasks WHERE due_date BETWEEN ? AND ?
     GROUP BY due_date ORDER BY due_date`,
    [from, to]
  );
  return rows.map(({ date, total, done, doing }) => ({
    date, total: Number(total), done: Number(done), doing: Number(doing)
  }));
}
