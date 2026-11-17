# Bài thực hành JavaScript — Lab08, Lab09 và Lab10

Thư mục tổng hợp mã nguồn và ảnh minh chứng của ba bài Lab trong học phần **Phát triển ứng dụng thương mại điện tử**, được bổ sung vào repository đã sử dụng trong học phần. Nội dung được phân chia theo từng Lab và từng Exercise để thuận tiện kiểm tra.

## 1. Thông tin sinh viên

| Thông tin | Nội dung |
| --- | --- |
| Họ và tên | Hoàng Anh Thi |
| Mã số sinh viên | 312410274692 |
| Lớp học phần | 26C1INF50902701 |
| GitHub cá nhân | [pumpomeo](https://github.com/pumpomeo) |
| GitHub Repository | [pumpomeo/ecommerce-ui-improvement](https://github.com/pumpomeo/ecommerce-ui-improvement) |
| GitHub Pages | [JavaScript Labs](https://pumpomeo.github.io/ecommerce-ui-improvement/JavaScript-Labs/) |

## 2. Mục tiêu thực hiện ba bài Lab

- Nắm được cú pháp JavaScript, cách nhúng mã trong HTML và sử dụng tệp JavaScript riêng; thực hành biến, kiểu dữ liệu, điều kiện, vòng lặp, hàm, mảng và đối tượng.
- Thao tác với DOM để đọc, thay đổi, thêm và xóa phần tử; xử lý sự kiện và kiểm tra dữ liệu biểu mẫu.
- Sử dụng jQuery để chọn phần tử, xử lý sự kiện, chèn nội dung, tạo hiệu ứng và gửi yêu cầu GET bất đồng bộ.
- Rèn luyện cách kiểm tra kết quả, tìm lỗi bằng công cụ trình duyệt và ghi nhận quá trình thực hiện bằng ảnh minh chứng.
- Vận dụng các kỹ thuật đã học vào chức năng của website thương mại điện tử như phản hồi khi nhập liệu, cập nhật nội dung, xem trước ảnh sản phẩm và tải dữ liệu.

## 3. Cấu trúc thư mục

```text
JavaScript-Labs/
├── README.md
├── index.html                 # Trang chủ tổng hợp
├── css/
│   └── style.css
├── js/
│   └── main.js
├── Lab08/
│   ├── index.html             # Danh sách bài 8.1–8.11
│   ├── Lab08.pdf
│   ├── README.md
│   ├── Exercise01/
│   ├── ...
│   └── Exercise11/
├── Lab09/
│   ├── index.html             # Danh sách bài 9.1–9.8
│   ├── Lab09.pdf
│   ├── README.md
│   ├── Exercise01/
│   ├── ...
│   └── Exercise08/
└── Lab10/
    ├── index.html             # Danh sách bài 10.1–10.10
    ├── Lab10.pdf
    ├── README.md
    ├── Exercise01/
    ├── ...
    └── Exercise10/
```

Trong mỗi Exercise, `index.html` là trang chạy bài. Các thư mục `js/`, `css/`, `images/`, `flags/` hoặc `data/` được sử dụng tùy yêu cầu. Ảnh minh chứng nằm trong `screenshot/`; riêng Exercise 8.1 dùng tên `screenshots/`. Một số bài đơn giản đặt `hello.js` ngay cạnh HTML.

Lab09 và Lab10 tải [Bootstrap 3.3.5](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css) và [Font Awesome 4.4.0](https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css) qua CDN HTTPS, không cần thư mục `vendor/`. Cần kết nối Internet để tải các CSS và font này khi xem trên GitHub Pages hoặc chạy cục bộ.

## 4. Nội dung từng Lab

| Lab | Nội dung chính | Truy cập mã nguồn |
| --- | --- | --- |
| **Lab08 — JavaScript 1: Language Foundations** | Bài 8.1–8.11: bật/tắt JavaScript; mã nhúng và tệp ngoài; noscript; Console; String, Date, Math, Array, hàm và Object. | [Danh sách Exercise Lab08](Lab08/index.html) |
| **Lab09 — JavaScript 2: DOM and Events** | Bài 9.1–9.8: chọn phần tử; quan hệ giữa các node; thêm/xóa DOM; click, mouseover, mouseout; load event; debugger; focus/blur và kiểm tra Form. | [Danh sách Exercise Lab09](Lab09/index.html) |
| **Lab10 — JavaScript 3: jQuery** | Bài 10.1–10.10: tải jQuery và fallback; selectors; event listeners; chèn DOM; fade, slide, animate; GET và xử lý jqXHR. | [Danh sách Exercise Lab10](Lab10/index.html) |

Mỗi Lab có README riêng mô tả cách tổ chức và kết quả thực hành. Lab09 và Lab10 còn có liên kết **Ảnh minh chứng** trong trang danh sách để xem các trạng thái của từng bài theo thứ tự.

Riêng Exercise 8.1, ảnh ghi nhận lỗi truy cập trang thử nghiệm trong đề; chưa quan sát được thông báo bật/tắt JavaScript trên trang đó. Các bài GET ở Lab10 cho phép chọn dịch vụ trực tuyến hoặc bản JSON đã lưu và ghi rõ nguồn dữ liệu đang sử dụng.

## 5. Đường dẫn GitHub Pages

Các địa chỉ triển khai theo repository `pumpomeo/ecommerce-ui-improvement`:

| Trang | Đường dẫn |
| --- | --- |
| Trang chủ JavaScript Labs | [JavaScript-Labs/](https://pumpomeo.github.io/ecommerce-ui-improvement/JavaScript-Labs/) |
| Lab08 | [JavaScript-Labs/Lab08/](https://pumpomeo.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab08/) |
| Lab09 | [JavaScript-Labs/Lab09/](https://pumpomeo.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab09/) |
| Lab10 | [JavaScript-Labs/Lab10/](https://pumpomeo.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab10/) |

**Sau khi chuyển repository ngày 17/11/2026:** các đường dẫn trên đã được cập nhật theo repository đích. Cần đưa thư mục này lên GitHub và kiểm tra GitHub Pages trước khi nộp. Trang chủ cục bộ đã có thông tin cá nhân, giới thiệu nội dung và liên kết đến ba Lab.

## 6. Hướng dẫn truy cập các bài thực hành

### Xem mã nguồn trên GitHub

1. Mở [repository ecommerce-ui-improvement](https://github.com/pumpomeo/ecommerce-ui-improvement).
2. Vào thư mục `JavaScript-Labs`, chọn `Lab08`, `Lab09` hoặc `Lab10`.
3. Mở thư mục `ExerciseXX` tương ứng để xem HTML, JavaScript, CSS và ảnh minh chứng.

### Chạy trên máy tính

1. Mở thư mục repository bằng VS Code.
2. Dùng Live Server mở trang danh sách [Lab08](Lab08/index.html), [Lab09](Lab09/index.html) hoặc [Lab10](Lab10/index.html).
3. Chọn tên Exercise. Liên kết dẫn trực tiếp đến `ExerciseXX/index.html`.
4. Thực hiện thao tác được yêu cầu: nhấn nút, rê chuột, chuyển trường nhập bằng Tab hoặc gửi Form.
5. Trên Chrome, nhấn **Ctrl + Shift + J** để xem Console; dùng Elements, Sources và Network khi cần kiểm tra DOM, breakpoint hoặc yêu cầu mạng.

**Bài 10.9 và 10.10 cần chạy qua HTTP/HTTPS**, chẳng hạn Live Server, để thực hiện GET; không mở bằng `file://`. Nếu dịch vụ trực tuyến không truy cập được, chọn **Bản JSON đã lưu từ dịch vụ** rồi nhấn **Consume**.
