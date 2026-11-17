# Lab09 — JavaScript 2: DOM and Events

Đã hoàn thành Exercise 9.1–9.8 theo Lab09.pdf. Mở `index.html` để chọn bài và xem ảnh minh chứng. Mỗi bài có `index.html`, `css/`, `js/`, tài nguyên cần thiết và `screenshot/` riêng.

## Tổ chức và nguồn

- Bài 9.6 dùng template 9.5, được tách riêng trong Exercise06 để giữ kết quả độc lập.
- Bootstrap 3.3.5 và Font Awesome 4.4.0 được tải qua CDN HTTPS, phù hợp khi đưa bài lên GitHub Pages. Cần Internet để tải CSS và font; không cần thư mục `vendor/`.
- Bản CSS bài 9.4 đã sửa dấu chấm phẩy thiếu ở `filter: grayscale(100%)`, bổ sung transition tiêu chuẩn cho Chrome; timer cũ được hủy khi nhấn Hide/Show liên tiếp.
- Form giữ cấu trúc bài mẫu, có tên truy cập cho các trường và vùng thông báo lỗi. Dữ liệu trong ảnh là dữ liệu minh họa. Bài 9.8 kiểm tra trường trống; không phải hệ thống đăng ký tài khoản có backend.
- Mã cuối không chứa các lỗi cố tình tạo khi thực hành. Các giai đoạn trước được ghi lại bằng ảnh và chú thích trong README của từng Exercise.

## Kiểm tra thực tế

| Exercise | Nội dung đã kiểm tra | Số ảnh |
| --- | --- | --- |
| 9.1 | Basic DOM Selection | 7 |
| 9.2 | DOM Family Relations | 2 |
| 9.3 | Modifying the DOM | 3 |
| 9.4 | Simple Event Handling | 6 |
| 9.5 | Responding to Load Events | 3 |
| 9.6 | Debugging Events | 5 |
| 9.7 | Working with Forms | 5 |
| 9.8 | Form Validation | 5 |

Đã kiểm tra bằng Chrome: chọn và sửa DOM; phân biệt nút văn bản/phần tử; thêm/xóa node; click/mouseover/mouseout; Hide/Show cả khi nhấn liên tiếp; load event; breakpoint Sources và e.target; focus/blur bằng Tab; chặn Form thiếu dữ liệu và cho phép gửi Form đủ dữ liệu. Cả tám bản cuối mở bằng file:// không có ngoại lệ JavaScript.
