CREATE TABLE IF NOT EXISTS tasks (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  description VARCHAR(2000) NOT NULL DEFAULT '',
  due_date DATE NOT NULL,
  priority ENUM('high', 'medium', 'low') NOT NULL DEFAULT 'medium',
  status ENUM('todo', 'doing', 'done') NOT NULL DEFAULT 'todo',
  category ENUM('work', 'study', 'personal') NOT NULL DEFAULT 'personal',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  seed_key VARCHAR(40) NULL UNIQUE,
  INDEX idx_tasks_due_status (due_date, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
