# Nhóm 2 — Responsive, jQuery và Flappy Bird

Ba bài thực hành theo `BaiThucHanh_Responsive_JQuery.pdf`, lưu trực tiếp trong thư mục này. Thư viện và ảnh đều được lưu cục bộ; ứng dụng không cần bước build hay tải thư viện từ CDN khi chạy.

## Mở bài làm

Tại thư mục `Chap6/Nhom2`, chạy:

```bash
npm start
```

Hoặc dùng trực tiếp Python:

```bash
python3 -m http.server 8086 --bind 127.0.0.1
```

Mở **http://127.0.0.1:8086/** để chọn bài:

| Phần              | Địa chỉ                          | Nội dung                                       |
| ----------------- | -------------------------------- | ---------------------------------------------- |
| E-commerce        | `/ecommerce/`                    | MÈO HOME — đồ dùng nhà bếp                     |
| Chi tiết sản phẩm | `/ecommerce/product.html?id=pot` | Chọn ảnh, zoom, đánh giá, biến thể và số lượng |
| Giỏ hàng          | `/ecommerce/cart.html`           | Sửa số lượng, xóa và tạo đơn demo              |
| Trạng thái đơn    | `/ecommerce/orders.html`         | Theo dõi và chuyển trạng thái đơn demo         |
| jQuery LMS        | `/jquery-lms/`                   | Dữ liệu thật lớp 43858 và bộ phân tích jQuery  |
| Flappy Bird       | `/flappy-bird/`                  | Flappy Mèo với 4 level và mục tiêu 50 điểm     |

## Cách sử dụng

### E-commerce

- Dùng danh mục, ô tìm kiếm và lựa chọn sắp xếp trên trang sản phẩm.
- Mở một sản phẩm, chọn thumbnail ảnh hoặc sơ đồ minh họa; di chuột/chạm ảnh chính để dùng xZoom.
- Chọn kích thước/dung tích, màu sắc và số lượng rồi thêm vào giỏ. Tồn kho áp dụng chung cho các biến thể cùng mã.
- Giỏ hàng được lưu trong trình duyệt. “Xác nhận đơn demo” chỉ tạo dữ liệu minh họa, không thanh toán hay gửi đơn ra ngoài.
- Nhận xét dùng bootstrap-star-rating và chỉ giữ trong phiên trang hiện tại; nội dung được hiển thị như văn bản.

### jQuery trên LMS

Dữ liệu đã đọc từ [lớp LMS UEH 43858](https://lms.ueh.edu.vn/course/view.php?id=43858) ngày **24/11/2026**, gồm **14 chủ đề và 16 bài tập**. Bài thứ 5 là **Bài tập nhóm chương 1 - Về nhà**, hạn **20/10/2026, 23:00** theo hiển thị LMS.

- `jquery-lms/course-data.js`: dữ liệu lớp thật, chỉ gồm thông tin chủ đề/bài/link/deadline; không có thông tin đăng nhập.
- `jquery-lms/lms-console.js`: script đọc `.modtype_assign`, dùng `.eq(4)` cho bài thứ 5 và `.each()` cho các chủ đề. Có hỗ trợ jQuery qua AMD của Moodle.
- Mở trang LMS đã đăng nhập, đọc nội dung script rồi chạy trong Console để lấy dữ liệu đang hiển thị. Script không nộp bài, sửa trang hoặc gửi dữ liệu ra ngoài.
- Trang local dựng lại DOM từ dữ liệu đã đọc để kiểm chứng cùng bộ chọn jQuery, được ghi rõ là DOM tái hiện.
- Có 14 bài hiện deadline. Hai bài đầu không hiển thị hạn kể cả ở trang chi tiết; không tự coi ngày Opened là hạn Due. Ba chủ đề cuối chưa có heading trong dữ liệu sao chép nên được ghi nhãn dự phòng rõ ràng.

### Flappy Mèo

- Bấm **Bắt đầu**, nhấn từng nhịp **ArrowDown (↓)** để chim bay lên. Trên điện thoại dùng nút **Bay lên**.
- **P**: tạm dừng/tiếp tục; **R**: chơi lại. Chuyển cửa sổ sẽ tự tạm dừng.
- Có chế độ luyện tập với khe ống rộng hơn và kỷ lục lưu cục bộ.

| Điểm  | Level               | Interval mô phỏng          |
| ----- | ------------------- | -------------------------- |
| 0–4   | 1                   | 40 ms                      |
| 5–19  | 2                   | 30 ms                      |
| 20–39 | 3                   | 25 ms                      |
| 40–49 | 4                   | 20 ms                      |
| 50    | Dừng và chiến thắng | Không cập nhật vật lý/điểm |

Game dùng `requestAnimationFrame`, bước mô phỏng cố định và nội suy vị trí. Chim Mèo và ống gốm là SVG tự thiết kế. Không có nút cộng điểm hay API ép thắng.

## Kiểm tra

Không cần cài thư viện npm để chạy kiểm thử logic bằng Node.js:

```bash
npm test
```

Kiểm thử trình duyệt nằm ở `tests/browser.cjs`. Cần Chrome và Playwright có sẵn; chạy server trước, rồi chạy:

```bash
node tests/browser.cjs
```

Nếu Playwright nằm ngoài project, đặt `NODE_PATH` trỏ đến thư mục `node_modules` tương ứng, hoặc đặt `PLAYWRIGHT_MODULE` bằng đường dẫn module. `CHROME_BIN` và `BASE_URL` cho phép đổi vị trí Chrome/địa chỉ server. Kiểm thử game thực sự nhấn phím ArrowDown đến 50 điểm ở chế độ luyện tập, không thay đổi điểm bằng JavaScript.

Kết quả kiểm tra trình duyệt được ghi ở `tests/browser-results.json`; ảnh minh chứng nằm trong `images/`. Xem báo cáo `BaiLam.md` để đối chiếu yêu cầu đề bài và các ảnh.

## Thư viện và nguồn

- jQuery 3.7.1, Bootstrap 3.4.1, xZoom 1.0.15, bootstrap-star-rating 4.1.2 (theme SVG).
- Xem `THIRD_PARTY.md` và `vendor/VERSIONS.json` để biết nguồn, giấy phép và hash tệp.
- Đây là bài thực hành frontend, không phải hệ thống bán hàng hay thanh toán dùng trong sản xuất.
