# Thư viện và hình ảnh bên thứ ba

Các thư viện được lưu trong `vendor/` để bài thực hành chạy cục bộ mà không cần CDN. Các tệp thư viện giữ nguyên nội dung từ gói npm chính thức; giấy phép đi kèm được giữ trong từng thư mục.

## Thư viện

| Thư viện | Phiên bản | Tệp sử dụng | Giấy phép | Nguồn chính thức |
|---|---|---|---|---|
| jQuery | 3.7.1 | `vendor/jquery/jquery.min.js` | MIT, xem `vendor/jquery/LICENSE.txt` | [jQuery](https://jquery.com/), [gói npm](https://registry.npmjs.org/jquery/3.7.1) |
| Bootstrap | 3.4.1 | `vendor/bootstrap/css/bootstrap.min.css`, `vendor/bootstrap/js/bootstrap.min.js`, `vendor/bootstrap/fonts/` | MIT, xem `vendor/bootstrap/LICENSE` | [Bootstrap 3.4](https://getbootstrap.com/docs/3.4/), [gói npm](https://registry.npmjs.org/bootstrap/3.4.1) |
| xZoom | 1.0.15 | `vendor/xzoom/xzoom.css`, `vendor/xzoom/xzoom.min.js` | Apache-2.0, xem `vendor/xzoom/LICENSE` | [xZoom](https://payalord.github.io/xZoom/), [mã nguồn](https://github.com/payalord/xZoom), [gói npm](https://registry.npmjs.org/xzoom/1.0.15) |
| bootstrap-star-rating | 4.1.2 | `vendor/star-rating/css/star-rating.min.css`, `vendor/star-rating/js/star-rating.min.js`, theme `krajee-svg` | BSD-3-Clause, xem `vendor/star-rating/LICENSE.md` | [Krajee](https://plugins.krajee.com/star-rating), [mã nguồn](https://github.com/kartik-v/bootstrap-star-rating), [gói npm](https://registry.npmjs.org/bootstrap-star-rating/4.1.2) |

Ngày tải: **23/11/2026**. Gói tải về được kiểm tra giá trị `dist.integrity` trước khi lấy tệp. Danh sách URL gói, phiên bản, kích thước và SHA-256 của từng tệp được lưu trong [`vendor/VERSIONS.json`](vendor/VERSIONS.json).

### Tệp hỗ trợ

- `vendor/example/images/xloading.gif`: ảnh loading đi kèm xZoom. Vị trí này giữ đúng đường dẫn `../example/images/xloading.gif` trong CSS gốc.
- `vendor/star-rating/img/loading.gif`: ảnh loading được CSS của bootstrap-star-rating tham chiếu.
- Theme `krajee-svg` dùng ảnh SVG dạng data URL trong CSS, không cần tải font biểu tượng bên ngoài.
- Gói bootstrap-star-rating 4.1.2 không có locale tiếng Việt chính thức. Các nhãn tiếng Việt của bài thực hành được cấu hình trong mã ứng dụng, không giả làm tệp locale từ upstream.

### Lưu ý tích hợp

- Nạp jQuery trước Bootstrap, xZoom và bootstrap-star-rating. Phiên bản jQuery 3.7.1 tương thích với yêu cầu của Bootstrap 3.4.1.
- xZoom sử dụng ảnh chính có thuộc tính `xoriginal`, ảnh thu nhỏ nằm trong liên kết tới ảnh gốc, và khởi tạo cho cả `.xzoom` lẫn `.xzoom-gallery`. Tài liệu: [hướng dẫn xZoom](https://github.com/payalord/xZoom#quick-start).
- Nạp `star-rating.min.css` trước `themes/krajee-svg/theme.min.css`; nạp `star-rating.min.js` trước JS của theme. Khởi tạo với `theme: 'krajee-svg'` để thay biểu tượng sao mặc định. Tài liệu: [cách dùng bootstrap-star-rating](https://plugins.krajee.com/star-rating#usage).
- Nếu gọi `.rating(...)` bằng JavaScript thì không gắn thêm class `rating` tự khởi tạo, tránh khởi tạo hai lần theo hướng dẫn của tác giả.

## Ảnh sản phẩm

Ảnh được sao chép nguyên trạng từ thư mục `ecommerce-ui-improvement/images/` sẵn có trong workspace. Không tải ảnh sản phẩm mới, không tạo thêm góc chụp và không suy diễn thông số từ hình ảnh. Nguồn/giấy phép ban đầu của những ảnh này không được ghi riêng trong tệp gốc; bài thực hành chỉ tái sử dụng tài nguyên đã có, không xác nhận quyền sử dụng cho thương mại.

| Tệp | Nội dung quan sát thực tế | Kích thước | Dung lượng |
|---|---|---|---|
| `assets/products/kitchen-1.jpg` | Chảo cơm chiên và xẻng gỗ | 500 × 333 px | 47.701 byte |
| `assets/products/kitchen-2.jpg` | Máy xay sinh tố cối thủy tinh chứa trái cây | 500 × 750 px | 48.127 byte |
| `assets/products/kitchen-3.jpg` | Bình nước màu xanh lá | 500 × 750 px | 17.869 byte |
| `assets/products/kitchen-4.jpg` | Nồi gang màu cam có nắp | 500 × 500 px | 32.743 byte |
| `assets/products/kitchen-5.jpg` | Bộ dao cán gỗ, nĩa và thanh mài kèm túi | 500 × 409 px | 24.146 byte |
| `assets/products/kitchen-6.jpg` | Túi vải đi chợ màu nâu | 500 × 750 px | 28.137 byte |

Sáu ảnh `product-1.jpg` đến `product-6.jpg` trong thư mục cũ là tai nghe, đồng hồ, bàn phím, giày, chuột và kính; chúng không phải góc chụp khác của sáu sản phẩm nhà bếp, nên không được ghép thành gallery của cùng một sản phẩm. Ảnh sơ đồ do ứng dụng tự vẽ phải được ghi là **minh họa**, không mô tả là ảnh chụp sản phẩm.

## Sơ đồ tự vẽ cho gallery

Sáu tệp SVG dưới đây được vẽ riêng bằng mã vector cho bài thực hành, kích thước `1000 × 1000`, nền trắng, nét teal/cam. Mỗi ảnh ghi **“Sơ đồ minh họa”**, có tiêu đề/mô tả truy cập được và không chứa script hoặc tài nguyên bên ngoài. Thông số là dữ liệu minh họa của bài, không phải phép đo suy ra từ ảnh chụp.

| Tệp | Nội dung minh họa |
|---|---|
| `assets/products/kitchen-1-diagram.svg` | Chảo đường kính 26 cm |
| `assets/products/kitchen-2-diagram.svg` | Máy xay, dung tích cối 1,5 L |
| `assets/products/kitchen-3-diagram.svg` | Bình nước 500 ml |
| `assets/products/kitchen-4-diagram.svg` | Nồi gang đường kính 24 cm, dung tích 3,5 L |
| `assets/products/kitchen-5-diagram.svg` | Bộ 5 món: 3 dao, 1 nĩa giữ thực phẩm, 1 thanh mài |
| `assets/products/kitchen-6-diagram.svg` | Thân túi vải rộng 38 cm, cao 42 cm |

## Rà soát thư viện

Ngày 23/11/2026, đã kiểm tra integrity của gói tải, SHA-256 của 23 tệp thư viện và mọi đường dẫn `url()` nội bộ trong CSS. `npm audit` trên đúng bốn phiên bản cho kết quả **1 package mức moderate: Bootstrap 3.4.1**, gồm hai advisory:

- [CVE-2024-6485 — data-loading-text của Button](https://github.com/advisories/GHSA-vxmc-5x29-h64v).
- [CVE-2025-1647 — Tooltip và Popover](https://github.com/advisories/GHSA-q58r-hwc8-rm9j).

Giữ Bootstrap 3.4.1 để phù hợp tài liệu bài học; không tự nâng lên Bootstrap 5 vì khác API. Khi tích hợp, không đưa dữ liệu người dùng vào HTML/data attributes của Button, Tooltip hoặc Popover; nội dung nhận xét, tên và dữ liệu LMS cần được hiển thị bằng `.text()`/`textContent`.
