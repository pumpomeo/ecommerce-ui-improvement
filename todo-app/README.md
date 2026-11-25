# Mỗi Ngày

Ứng dụng web tiếng Việt để quản lý công việc cá nhân. Trang mặc định hiển thị các việc đến hạn hôm nay theo múi giờ Việt Nam. Có thể chọn ngày trên lịch, xem tất cả công việc, tìm theo tên hoặc mô tả và kết hợp bộ lọc trạng thái, mức ưu tiên, nhóm.

## Chạy trên máy này

Cần Node.js 22 trở lên và MariaDB đã được cài trên Linux. Chạy từ thư mục gốc của repo.

```bash
cd todo-app
npm ci
npm run db:local
npm run db:init
npm run db:seed
npm start
```

Mở [http://127.0.0.1:3000](http://127.0.0.1:3000). Bỏ qua `db:seed` nếu muốn bắt đầu với danh sách trống. Lệnh nạp dữ liệu mẫu giữ nguyên các mục mẫu đã có và dùng ngày hiện tại cho lần nạp đầu tiên.

`db:local` chạy một phiên MariaDB riêng qua Unix socket trong `.mariadb/` và tạo `.env` nếu chưa có. Dữ liệu ở `.mariadb/data/` tiếp tục được lưu giữa các lần chạy. Chạy `npm run db:stop` để dừng phiên này.

## Dùng MySQL hoặc MariaDB có sẵn

Dùng tài khoản quản trị để tạo cơ sở dữ liệu và tài khoản riêng cho ứng dụng. Thay giá trị mật khẩu trong ví dụ bằng mật khẩu của bạn.

```sql
CREATE DATABASE IF NOT EXISTS todo_app
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'todo_app'@'127.0.0.1' IDENTIFIED BY 'replace-with-your-password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE ON todo_app.* TO 'todo_app'@'127.0.0.1';
```

Sao chép `.env.example` thành `.env` và điền thông tin kết nối. Để kết nối TCP, dùng `DB_HOST` và `DB_PORT` và để trống `DB_SOCKET`. Sau đó chạy `npm ci`, `npm run db:init`, `npm run db:seed` nếu cần dữ liệu mẫu, rồi `npm start`.

## Mã nguồn và dữ liệu

- `public/` chứa HTML, CSS và JavaScript thuần. Giao diện và API chạy chung một máy chủ HTTP.
- `src/app.js` định nghĩa API Express. `src/validation.js` kiểm tra đầu vào và `src/task-store.js` truy vấn bằng mysql2.
- `database/schema.sql` định nghĩa bảng `tasks` với khóa chính, ngày đến hạn, trạng thái, mức ưu tiên, nhóm, dấu thời gian và chỉ mục theo ngày đến hạn và trạng thái.
- `GET /api/tasks` trả về tất cả công việc. Thêm `?date=today` hoặc `?date=YYYY-MM-DD` để giới hạn theo ngày. Giao diện áp dụng tìm kiếm và các bộ lọc trên danh sách nhận được.
- `POST /api/tasks`, `PUT /api/tasks/:id`, `PATCH /api/tasks/:id/status` và `DELETE /api/tasks/:id` hỗ trợ thêm, sửa, đổi trạng thái và xóa.
- `GET /api/stats?days=7` hoặc `days=30` tổng hợp các việc có ngày đến hạn trong kỳ, tính đến hôm nay. Số việc hoàn thành dựa trên trạng thái hiện tại.

App mặc định lắng nghe trên `127.0.0.1` cho một người dùng và không có đăng nhập. `APP_TIMEZONE` cấu hình cách xác định ngày hiện tại. Chạy `npm test` để kiểm thử ngày và dữ liệu đầu vào.

## Ảnh minh chứng

- [Cơ sở dữ liệu và bảng tasks](docs/evidence/database.png)
- [Giao diện công việc hôm nay](docs/evidence/today.png)
- [Giao diện thống kê](docs/evidence/statistics.png)
