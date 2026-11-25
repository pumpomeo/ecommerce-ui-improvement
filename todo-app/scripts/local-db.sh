#!/usr/bin/env bash
set -euo pipefail
umask 077

cd -- "$(dirname -- "$0")/.."
db_dir="$PWD/.mariadb"
db_socket="$db_dir/mariadb.sock"
db_admin="$(id -un)"
client=(mariadb --no-defaults --protocol=SOCKET --socket="$db_socket" --user="$db_admin")
admin=(mariadb-admin --no-defaults --protocol=SOCKET --socket="$db_socket" --user="$db_admin")

if [[ ${1:-start} == stop ]]; then
  if "${admin[@]}" ping --silent; then
    "${admin[@]}" shutdown
    echo "Đã dừng MariaDB của todo-app."
  fi
  exit
fi

for tool in mariadb-install-db mariadbd mariadb mariadb-admin; do
  command -v "$tool" >/dev/null || { echo "Thiếu lệnh $tool. Hãy cài MariaDB hoặc cấu hình MySQL trong .env." >&2; exit 1; }
done

mkdir -p "$db_dir"
if [[ ! -d "$db_dir/data/mysql" ]]; then
  mariadb-install-db --no-defaults --datadir="$db_dir/data" --auth-root-socket-user="$db_admin" --skip-test-db
fi

if ! "${admin[@]}" ping --silent; then
  server=("$(command -v mariadbd)" --no-defaults --datadir="$db_dir/data" --socket="$db_socket"
    --pid-file="$db_dir/mariadb.pid" --log-error="$db_dir/mariadb.log" \
    --skip-networking --innodb-buffer-pool-size=64M)
  db_key=$(node -e "console.log(require('node:crypto').createHash('sha256').update(process.argv[1]).digest('hex').slice(0, 12))" "$db_dir")
  if ! command -v systemd-run >/dev/null || ! systemd-run --user --quiet --collect \
    --unit="todo-app-mariadb-$db_key" -- "${server[@]}" 2>/dev/null; then
    nohup "${server[@]}" </dev/null >/dev/null 2>&1 &
  fi
  for ((attempt=0; attempt<50; attempt++)); do
    "${admin[@]}" ping --silent && break
    sleep .2
  done
fi

"${admin[@]}" ping --silent || { echo "Không thể khởi động MariaDB. Xem .mariadb/mariadb.log." >&2; exit 1; }

if [[ ! -f "$db_dir/app-password" ]]; then
  node -e "console.log(require('node:crypto').randomBytes(24).toString('hex'))" > "$db_dir/app-password"
fi
read -r db_password < "$db_dir/app-password"
"${client[@]}" <<SQL
CREATE DATABASE IF NOT EXISTS todo_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'todo_app'@'localhost' IDENTIFIED BY '$db_password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE ON todo_app.* TO 'todo_app'@'localhost';
SQL

if [[ ! -e .env ]]; then
  cat > .env <<ENV
HOST=127.0.0.1
PORT=3000
APP_TIMEZONE=Asia/Bangkok
DB_NAME=todo_app
DB_USER=todo_app
DB_PASSWORD=$db_password
DB_SOCKET=.mariadb/mariadb.sock
ENV
fi

echo "MariaDB của todo-app đang chạy qua .mariadb/mariadb.sock"
