import { createPool, timeZone } from '../src/db.js';
import { addDays, dayInZone } from '../src/dates.js';

const today = dayInZone(new Date(), timeZone);
const samples = [
  [0, 'Lên kế hoạch cho tuần tới', 'Sắp xếp các đầu việc quan trọng và dành thời gian cho từng việc.', 'high', 'todo', 'work'],
  [0, 'Ôn Node.js và Express', 'Đọc lại phần middleware và viết thử một API nhỏ.', 'medium', 'doing', 'study'],
  [0, 'Gửi bản tổng hợp tiến độ', 'Kiểm tra số liệu trước khi gửi bản cập nhật.', 'high', 'todo', 'work'],
  [0, 'Đi siêu thị', 'Mua rau củ, trái cây và sữa cho cả tuần.', 'low', 'todo', 'personal'],
  [0, 'Đọc 20 trang sách', 'Ghi lại một ý tưởng hay để xem lại cuối tuần.', 'low', 'done', 'personal'],
  [0, 'Dọn email đầu ngày', 'Trả lời những email cần phản hồi sớm.', 'medium', 'done', 'work'],
  [-1, 'Tổng hợp ghi chú buổi học', '', 'medium', 'done', 'study'],
  [-1, 'Cập nhật bảng theo dõi', '', 'high', 'done', 'work'],
  [-1, 'Tập thể dục 30 phút', '', 'low', 'done', 'personal'],
  [-1, 'Nộp bài thực hành SQL', '', 'high', 'doing', 'study'],
  [-2, 'Chuẩn bị tài liệu cuộc họp', '', 'medium', 'done', 'work'],
  [-2, 'Kiểm tra chi tiêu trong tuần', '', 'low', 'done', 'personal'],
  [-2, 'Sắp xếp lại thư mục dự án', '', 'medium', 'todo', 'work'],
  [-3, 'Luyện truy vấn JOIN', '', 'medium', 'done', 'study'],
  [-3, 'Giặt và phơi đồ', '', 'low', 'done', 'personal'],
  [-3, 'Rà soát nội dung báo cáo', '', 'high', 'done', 'work'],
  [-3, 'Sao lưu tài liệu', '', 'medium', 'done', 'personal'],
  [-3, 'Ôn ghi chú SQL', '', 'medium', 'todo', 'study'],
  [-4, 'Lên thực đơn cuối tuần', '', 'low', 'done', 'personal'],
  [-4, 'Trao đổi về tiến độ dự án', '', 'high', 'done', 'work'],
  [-5, 'Đọc tài liệu JavaScript', '', 'medium', 'done', 'study'],
  [-5, 'Ghi lại các khoản chi', '', 'low', 'done', 'personal'],
  [-5, 'Tổng hợp ý tưởng buổi họp', '', 'high', 'done', 'work'],
  [-6, 'Thực hành Git', '', 'medium', 'done', 'study'],
  [-9, 'Chuẩn bị kế hoạch tháng', '', 'high', 'done', 'work'],
  [-13, 'Sắp xếp bàn làm việc', '', 'low', 'done', 'personal'],
  [-20, 'Xem lại bài tập Node.js', '', 'medium', 'done', 'study'],
  [1, 'Thử nghiệm giao diện trên điện thoại', '', 'medium', 'todo', 'work'],
  [1, 'Tập thể dục sau giờ học', '', 'low', 'todo', 'personal'],
  [3, 'Ôn tập cơ sở dữ liệu', '', 'high', 'todo', 'study']
];

const db = createPool();
try {
  const rows = samples.map(([offset, title, description, priority, status, category], index) =>
    [title, description, addDays(today, offset), priority, status, category, `demo-${index + 1}`]
  );
  await db.query(
    `INSERT INTO tasks (title, description, due_date, priority, status, category, seed_key)
     VALUES ? ON DUPLICATE KEY UPDATE seed_key = tasks.seed_key`,
    [rows]
  );
  console.log(`Đã nạp ${rows.length} công việc mẫu; các mục đã có được giữ nguyên.`);
} finally {
  await db.end();
}
