# Exercise 10.9 — GET Requests

Mở `index.html` bằng Chrome. Riêng GET (10.9–10.10) cần Live Server/HTTP; không dùng file://.

## Ảnh minh chứng

- [00-service-json.png](screenshot/00-service-json.png): Bước 2: mở trực tiếp địa chỉ dịch vụ trong Chrome, nhận JSON thành phố.
- [01-ready.png](screenshot/01-ready.png): Trang sẵn sàng gửi GET đến dịch vụ trong đề.
- [01b-for-loop-lines.png](screenshot/01b-for-loop-lines.png): Bước 3–4: callback success duyệt bằng for và xuất tên thành phố với ngắt dòng.
- [02-live-get-success.png](screenshot/02-live-get-success.png): GET trực tiếp dịch vụ qua HTTP thành công; $.each tạo 53 li.
- [03-saved-json-success.png](screenshot/03-saved-json-success.png): GET bản JSON đã lưu từ dịch vụ: hiển thị cùng danh sách, ghi rõ nguồn cục bộ.
- [04-https-service-error.png](screenshot/04-https-service-error.png): Thử HTTPS của cùng dịch vụ: yêu cầu thất bại do chứng chỉ hết hạn; trang hiển thị thông báo lỗi.

Dịch vụ HTTP trong đề đã trả về 53 thành phố khi kiểm tra. HTTPS của cùng dịch vụ báo chứng chỉ hết hạn. Các ảnh ghi rõ kết quả thật và nguồn trực tuyến/bản lưu cục bộ; không dùng mock thay phản hồi của dịch vụ.
