# Exercise 10.10 — jqXHR Handling

Mở `index.html` bằng Chrome. Riêng GET (10.9–10.10) cần Live Server/HTTP; không dùng file://.

## Ảnh minh chứng

- [01-ready.png](screenshot/01-ready.png): Ban đầu spinner bị ẩn, nút Consume sẵn sàng.
- [02-loading.png](screenshot/02-loading.png): Đang GET thật dịch vụ: spinner hiển thị, nút Consume tạm khóa.
- [03-done-always.png](screenshot/03-done-always.png): done tạo 53 li; always đã fadeOut spinner và mở lại nút.
- [04-fail-alert.png](screenshot/04-fail-alert.png): Thử HTTPS bị lỗi chứng chỉ: fail hiển thị alert failed loading data; spinner vẫn chờ always.
- [05-fail-always.png](screenshot/05-fail-always.png): Sau lỗi, always vẫn ẩn spinner và mở lại nút; trạng thái GET thất bại được giữ trên trang.
- [06-saved-json-done.png](screenshot/06-saved-json-done.png): Bản lưu JSON chạy qua done và always; nguồn cục bộ được ghi rõ.

Dịch vụ HTTP trong đề đã trả về 53 thành phố khi kiểm tra. HTTPS của cùng dịch vụ báo chứng chỉ hết hạn. Các ảnh ghi rõ kết quả thật và nguồn trực tuyến/bản lưu cục bộ; không dùng mock thay phản hồi của dịch vụ.
