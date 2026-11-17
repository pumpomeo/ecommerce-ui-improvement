# Lab10 — JavaScript 3: jQuery

Đã hoàn thành Exercise 10.1–10.10 theo Lab10.pdf, kiểm tra bằng Chrome và lưu 60 ảnh thực tế. Mở `index.html` để chọn bài hoặc xem ảnh theo thứ tự.

## Tổ chức và điều chỉnh từ bộ mẫu

- Bài 10.2 dùng lại HTML của 10.1, được tách riêng trong Exercise02. Bài 10.1 có tệp JavaScript riêng để tránh trỏ nhầm tệp của bài 10.2.
- Bài 10.1 tải jQuery 3.1.1 qua CDN HTTPS và có fallback cục bộ theo đề. Bài 10.2–10.10 dùng bản 3.1.1 cục bộ của template. Bootstrap 3.3.5 và Font Awesome 4.4.0 tải qua CDN HTTPS, không cần thư mục `vendor/`; cần Internet để tải CSS và font khi chạy cục bộ hoặc trên GitHub Pages.
- Theo lệnh trong đề, `$('#first').html('new Title')` xóa cả textarea trong first. Vì vậy thao tác val()/attr() được chụp trước khi thay nội dung first; mã cuối vẫn thể hiện đúng tác dụng thay toàn bộ nội dung.
- Các phương thức chèn ảnh (after, before, append, prepend, appendTo, prependTo, insertBefore) được thử riêng và có đủ ảnh; mã cuối giữ insertBefore theo bước cuối.
- Các ảnh trạng thái animation được chụp trong khi chạy thật; không dựng lại kết quả bằng cách sửa DOM.
- Dữ liệu bên ngoài được đưa vào trang bằng text()/text nodes để tránh diễn giải tên thành phố như HTML.

## GET và nguồn dữ liệu

Mở qua Live Server hoặc một máy chủ HTTP/HTTPS để thực hành 10.9–10.10; Ajax cục bộ không chạy như mong đợi qua file://.

- Dịch vụ trong đề: http://www.randyconnolly.com/funwebdev/services/travel/cities.php
- Khi kiểm tra ngày 16/11/2026, HTTP trả 200 và 53 thành phố, có header CORS cho phép truy cập.
- HTTPS của cùng dịch vụ báo chứng chỉ hết hạn. Ảnh nhánh fail ghi lại lỗi thật, không bỏ qua kiểm tra TLS.
- Trên trang HTTPS, mã chọn URL HTTPS để tránh mixed content. Nếu dịch vụ không truy cập được, chọn **Bản JSON đã lưu từ dịch vụ**; giao diện ghi rõ đây là nguồn cục bộ.
- `Exercise09/data/` và `Exercise10/data/` chứa bản lưu trực tiếp của JSON gốc, kèm README nguồn/ngày tải. Việc kiểm tra nhánh thành công vẫn có yêu cầu GET thật đến dịch vụ HTTP và yêu cầu GET thật đến bản JSON cục bộ.
- Bài 10.10 có đủ ảnh loading, done, fail và always. Luôn xóa danh sách cũ trước yêu cầu mới, khóa nút khi tải và mở lại sau khi kết thúc.

## Nội dung và số ảnh

| Exercise | Nội dung | Ảnh |
| --- | --- | --- |
| 10.1 | Set Up jQuery | 4 |
| 10.2 | Basic Selectors | 3 |
| 10.3 | Advanced Selectors | 3 |
| 10.4 | jQuery Listeners | 6 |
| 10.5 | Inserting DOM Elements | 7 |
| 10.6 | Simple jQuery Animation | 11 |
| 10.7 | More jQuery Animation | 7 |
| 10.8 | Complex Animations | 7 |
| 10.9 | GET Requests | 6 |
| 10.10 | jqXHR Handling | 6 |

## Tài liệu đối chiếu

- Đề gốc: Lab10.pdf.
- jQuery.get / jqXHR: https://api.jquery.com/jQuery.get/
- Animation queue: https://api.jquery.com/animate/

Mỗi Exercise có README chú thích ảnh.
