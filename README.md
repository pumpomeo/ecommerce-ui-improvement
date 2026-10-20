# E-commerce UI Improvement

Dự án bài tập cá nhân Chương 1 - Môn **Phát triển ứng dụng WEB/TMĐT**  
* **Trường:** Đại học Kinh tế TP. Hồ Chí Minh (UEH) - Khoa Công nghệ Thông tin Kinh doanh  
* **Giảng viên hướng dẫn:** TS Nguyễn Mạnh Tuấn (`tuannm@ueh.edu.vn`)  
* **Sinh viên thực hiện:** Hoàng Anh Thi
* **MSSV:** 31241027492  
* **Tài khoản GitHub:** [pumpomeo](https://github.com/pumpomeo)  
* **Đường dẫn xem trực tiếp (GitHub Pages):** [https://pumpomeo.github.io/ecommerce-ui-improvement/](https://pumpomeo.github.io/ecommerce-ui-improvement/)

---

## 1. Giới thiệu
Dự án tập trung khảo sát trải nghiệm người dùng thực tế trên sàn thương mại điện tử **Tiki.vn** và xây dựng phiên bản cải tiến giao diện cho khu vực **Thẻ sản phẩm (Product Card)** kết hợp **Bố cục danh mục sản phẩm (Category Grid & Sidebar Layout)** thuộc ngành hàng *Dụng Cụ Nhà Bếp*.

Phiên bản cải tiến khắc phục các nhược điểm về tương phản giá bán, tình trạng nhãn dán che khuất hình ảnh sản phẩm, nội dung giới thiệu chiếm chỗ đầu trang và lỗi vỡ bố cục trên thiết bị di động, mang lại trải nghiệm duyệt và mua sắm mượt mà, trực quan.

---

## 2. Website tham khảo
* **Tên website:** Tiki
* **URL:** [https://tiki.vn](https://tiki.vn)
* **Khu vực đã khảo sát:** 
  1. *Trang chủ* (`https://tiki.vn/`)
  2. *Danh mục sản phẩm* (Ngành hàng Dụng Cụ Nhà Bếp: `https://tiki.vn/nha-bep/c1951`)
  3. *Chi tiết sản phẩm* (Sản phẩm mẫu: Dụng cụ xay tỏi ớt Lock&Lock CKS321GRN)
  4. *Tìm kiếm* (Từ khóa kiểm thử: `iphone`, `nồi chiên`)
  5. *Giỏ hàng* (`https://tiki.vn/cart`)

---

## 3. Chức năng
* **Bố cục 2 cột chuẩn TMĐT:** Cột bên trái hiển thị Cây danh mục sản phẩm phân tầng (Category Tree) và các nhóm bộ lọc thuộc tính (Dịch vụ TikiNOW 2H, Tiki Trading, Khoảng giá, Thương hiệu, Đánh giá sao).
* **Hiển thị danh sách sản phẩm nổi bật:** Lưới 6 sản phẩm gia dụng nhà bếp thực tế với hình ảnh tỉ lệ 1:1 rõ nét, có hiệu ứng zoom nhẹ khi rê chuột.
* **Hiển thị thông tin giá và nhãn ưu đãi rõ ràng:** Nổi bật giá khuyến mãi bằng màu đỏ cỡ lớn, giá gốc gạch ngang mờ, tag hiển thị số tiền tiết kiệm cụ thể (*Tiết kiệm [Số tiền]₫*) và nhãn người bán chính hãng (*Tiki Trading / Official Store*).
* **Bố cục thích ứng đa màn hình (Responsive Web Design):**
  * *Màn hình máy tính ($\ge 992\text{px}$):* Bố cục 2 cột với sidebar 260px cố định khi cuộn (`position: sticky`) và lưới 3 cột sản phẩm.
  * *Màn hình điện thoại & tablet ($< 992\text{px}$):* Sidebar chuyển đổi thành bảng điều khiển trượt (Off-Canvas Drawer) với nút bật/tắt tiện dụng; lưới sản phẩm hiển thị **2 cột** chuẩn theo thói quen lướt app di động.
  * *Tối ưu thao tác chạm (Touch Ergonomics):* Nút bấm mua hàng đạt chiều cao chuẩn $\ge 40-42\text{px}$ vừa vặn ngón tay cái, tiêu đề sản phẩm cố định 2 dòng không bị lệch hàng.
* **Tương tác trực tiếp không cần backend:** Nút *Thêm vào giỏ hàng* có hiệu ứng nảy số badge trên thanh điều hướng và hiện thông báo Toast; nút *Yêu thích* (Wishlist) hỗ trợ bật/tắt màu đỏ; nút *Sắp xếp* chuyển đổi trạng thái tức thì.

---

## 4. Công nghệ
* **HTML5:** Cấu trúc ngữ nghĩa chuẩn SEO và hỗ trợ tiếp cận (Accessibility - a11y) với các thẻ `<header>`, `<nav>`, `<aside>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<details>`, `<summary>`, `<footer>`.
* **CSS3:** 
  * Hệ thống biến CSS (`:root`) quản lý bảng màu, bóng đổ và thông số toàn cục.
  * Bố cục hiện đại kết hợp giữa **CSS Grid** và **Flexbox**.
  * Thuộc tính nâng cao: `-webkit-line-clamp: 2`, `aspect-ratio: 1 / 1`, `backdrop-filter: blur()`.
  * Media Queries xử lý thích ứng linh hoạt qua 4 mốc Breakpoint (1100px, 992px, 768px, 480px).
* **JavaScript (Vanilla JS nhẹ):** Xử lý tương tác giao diện người dùng (Off-canvas drawer trên mobile, tăng số lượng giỏ hàng, thông báo Toast) mà không sử dụng bất kỳ thư viện hay framework cồng kềnh nào bên ngoài.

---

## 5. Cách chạy
Dự án được xây dựng hoàn toàn bằng mã nguồn tĩnh phía client (không cần cài đặt môi trường backend hay database):

### Cách 1: Chạy trực tiếp trên trình duyệt máy tính
1. Tải hoặc clone repository về máy tính:
   ```bash
   git clone https://github.com/pumpomeo/ecommerce-ui-improvement.git
   cd ecommerce-ui-improvement
   ```
2. Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Brave):
   * Nhấp đúp chuột vào file `index.html`.
   * Hoặc mở bằng dòng lệnh Linux:
     ```bash
     google-chrome index.html
     # hoặc
     xdg-open index.html
     ```

### Cách 2: Xem trực tuyến qua GitHub Pages
Truy cập trực tiếp tại đường dẫn:  
👉 **[https://pumpomeo.github.io/ecommerce-ui-improvement/](https://pumpomeo.github.io/ecommerce-ui-improvement/)**

---

## 6. Cải tiến đã thực hiện

| Khu vực / Thành phần | Vấn đề ban đầu ghi nhận tại Tiki.vn | Thay đổi và Cải tiến đã thực hiện |
| :--- | :--- | :--- |
| **Bố cục đầu trang danh mục** | Trang dành diện tích quá lớn cho bài viết giới thiệu/SEO dài dòng, người mua phải cuộn nhiều mới tới danh sách sản phẩm. | Đưa cây danh mục, bộ lọc và sản phẩm lên ngay đầu trang; đưa nội dung giới thiệu vào thẻ thu gọn `<details>` để khách chủ động xem khi cần. |
| **Quy hoạch Nhãn dán (Badges)** | Quá nhiều nhãn quảng cáo (Freeship, Rẻ vô địch, Đổi trả...) dán đè trực tiếp lên ảnh làm che khuất các chi tiết của sản phẩm. | Đưa nhãn lên góc trên với kích thước gọn gàng; giữ trọn khung ảnh 1:1 thoáng đãng, bổ sung hiệu ứng zoom nhẹ khi hover để xem rõ chi tiết. |
| **Phân cấp hiển thị giá** | Giá bán và giá gốc có kích thước chữ gần bằng nhau, người mua không thấy ngay số tiền thực tế mình tiết kiệm được. | Phân cấp giá tương phản cao: giá bán đỏ nổi bật (`font-weight: 800`), bổ sung tag *"Tiết kiệm [Số tiền]₫"* ngay cạnh giá gốc gạch ngang. |
| **Độ đồng đều thẻ trên Mobile** | Tên sản phẩm dài ngắn khác nhau làm các thẻ bị lệch chiều cao (so le), phá vỡ nhịp đọc thị giác của lưới 2 cột. | Cố định tiêu đề tối đa đúng 2 dòng bằng CSS `-webkit-line-clamp: 2`, đảm bảo 100% các thẻ sản phẩm luôn bằng phẳng đều đặn trên mọi thiết bị. |
| **Bố cục Sidebar trên Mobile** | Trên điện thoại, cột danh mục nếu nằm trên sản phẩm sẽ choán hết màn hình, đẩy sản phẩm xuống sâu. | Chuyển đổi sidebar thành **Off-Canvas Drawer** ẩn sau nút bấm `[Danh Mục & Bộ Lọc]`, khi bấm sẽ trượt êm ái từ trái sang kèm nền mờ. |
| **Vùng chạm nút mua (Tap Target)** | Nút mua hàng trên điện thoại quá bé hoặc bị ẩn, khó thao tác bằng ngón tay cái. | Thiết kế nút *"Thêm vào giỏ"* với chiều cao đạt chuẩn $\ge 40-42\text{px}$, bấm có phản hồi tức thì qua thông báo Toast và nảy số giỏ hàng. |

---

## 7. Hỗ trợ từ AI
* **Những phần AI hỗ trợ:**
  * Đóng vai trò chuyên gia phân tích trải nghiệm người dùng để khảo sát 5 khu vực của website thương mại điện tử theo prompt mẫu của giảng viên.
  * Đề xuất phương án phân cấp thị giác và gợi ý khung mã HTML/CSS ban đầu.
  * Hỗ trợ kỹ thuật CSS Grid và Flexbox để xây dựng bố cục responsive.
* **Những phần sinh viên đã kiểm tra, điều chỉnh và bổ sung:**
  * **Đối chiếu và loại bỏ ảo giác của AI:** Loại bỏ những phần AI suy diễn không có bằng chứng (như chi tiết quy trình trang giỏ hàng khi công cụ không trích xuất được URL `/cart`).
  * **Sửa toàn bộ liên kết bên ngoài:** Thay thế các đường link trỏ ra ngoài website Tiki thành các liên kết nội bộ (`#product-1`, `#dung-cu-nha-bep`) để người dùng không bị chuyển hướng khỏi trang demo.
  * **Phát hiện và sửa lỗi lệch chiều cao thẻ:** Tự tay thêm thuộc tính CSS `-webkit-line-clamp: 2` để khống chế chiều cao tiêu đề sản phẩm.
  * **Tối ưu trải nghiệm di động:** Yêu cầu chuyển đổi sidebar dạng khối tĩnh trên máy tính thành dạng Drawer trượt trên màn hình nhỏ.
  * Chi tiết toàn bộ quá trình tương tác, prompt sử dụng và bài học rút ra được lưu tại file: 👉 [AI_USAGE.md](AI_USAGE.md).
