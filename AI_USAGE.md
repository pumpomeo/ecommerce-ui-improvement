# AI Usage Log

## 1. Công cụ AI
* **Tên công cụ:** Antigravity / Gemini 3.8 Flash (High) / AI Coding Assistant
* **Môi trường sử dụng:** Pair programming trong quá trình phân tích UX, lập trình HTML5/CSS3 và kiểm tra mã nguồn.

---

## 2. Mục đích sử dụng
1. **Phân tích giao diện & UX:** Đóng vai trò chuyên gia trải nghiệm người dùng để phân tích 5 khu vực trọng yếu của website thương mại điện tử Tiki.vn.
2. **Đề xuất phương án thiết kế:** Gợi ý cấu trúc phân cấp thị giác (Visual Hierarchy), bố cục lưới thích ứng (Responsive Grid) và vị trí đặt các nhãn (badges).
3. **Hỗ trợ tạo khung mã nguồn HTML5 & CSS3 ban đầu:** Khởi tạo cấu trúc ngữ nghĩa HTML semantic và file CSS tách biệt.
4. **Hỗ trợ giải thích và gỡ lỗi (Debugging):** Giải thích hoạt động của CSS Grid, Flexbox, thuộc tính `-webkit-line-clamp` và cơ chế Off-canvas Drawer trên di động.

---

## 3. Prompt đã sử dụng

### Prompt 1: Phân tích nghiệp vụ và UX website Tiki (Nhiệm vụ 2)
```text
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng
cho website thương mại điện tử.
Tôi đang khảo sát website: https://tiki.vn/.
Hãy giúp tôi lập bảng phân tích các khu vực:
1. Trang chủ.
2. Danh mục sản phẩm.
3. Chi tiết sản phẩm.
4. Tìm kiếm.
5. Giỏ hàng.
Với mỗi khu vực, hãy nêu:
- Mục đích của chức năng.
- Thành phần giao diện cần có.
- Điểm thuận tiện đối với khách hàng.
- Một vấn đề có thể phát sinh.
- Một đề xuất cải tiến.
Không khẳng định những tính năng chưa được kiểm chứng.
Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.
--> output là 1 file markdown
```

### Prompt 2: Đề xuất phương án cải tiến giao diện (Nhiệm vụ 3 - Bước 2)
```text
Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
Tôi muốn cải tiến khu vực: Thẻ sản phẩm và Bố cục danh mục sản phẩm (ngành hàng Dụng Cụ Nhà Bếp của Tiki).
Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.
Trước tiên, hãy giải thích phương án thiết kế. Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.
```

### Prompt 3: Tạo mã nguồn HTML5/CSS3 cải tiến (Nhiệm vụ 3 - Bước 3)
```text
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
Yêu cầu:
- Giao diện có tiêu đề, cây danh mục và khu vực sản phẩm 2 cột.
- Có tối thiểu 4 sản phẩm mẫu (dụng cụ nhà bếp thực tế trên Tiki).
- Mỗi sản phẩm có hình ảnh 1:1, tên, giá bán đỏ nổi bật, giá gốc, mức tiết kiệm, nhãn Tiki Trading và nút mua hàng.
- Bố cục phù hợp với màn hình máy tính (grid 3 cột kế sidebar) và điện thoại (grid 2 cột, sidebar chuyển thành drawer).
- Mã HTML có cấu trúc ngữ nghĩa rõ ràng (<header>, <main>, <aside>, <article>, <figure>).
- CSS được tách thành file riêng style.css, sử dụng CSS Variables.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện ngoài (Bootstrap/Tailwind) vào dự án.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.
```

---

## 4. Kết quả AI đề xuất
1. **Về phân tích UX:** AI chỉ ra điểm cốt lõi là trang danh mục Tiki bị nội dung bài viết dài đẩy sản phẩm xuống sâu, các nhãn khuyến mãi dán đè lên ảnh làm rối mắt, và giá bán chưa làm rõ số tiền tiết kiệm cụ thể.
2. **Về bố cục:** Đề xuất mô hình 2 cột: Cột trái chứa Cây danh mục (Category Tree) và bộ lọc; Cột phải chứa Breadcrumb, khối giới thiệu thu gọn và lưới sản phẩm.
3. **Về mã nguồn:** 
   - File `index.html` sử dụng chuẩn thẻ ngữ nghĩa HTML5.
   - File `css/style.css` sử dụng CSS Grid, Flexbox và CSS Variables (`:root`).
   - Các hiệu ứng vi mô (micro-interactions): hover nâng thẻ (`translateY(-4px)`), zoom ảnh (`scale(1.05)`), và nút thêm giỏ hàng có tương tác nảy số.

---

## 5. Kiểm tra và điều chỉnh

Sinh viên đã trực tiếp kiểm tra mã nguồn, đối chiếu thực tế và thực hiện các điều chỉnh quan trọng:

1. **Loại bỏ các đường link trỏ ra ngoài:** Ban đầu AI để một số link `target="_blank"` dẫn thẳng tới website `tiki.vn`. Sinh viên đã yêu cầu chuyển toàn bộ thành liên kết nội bộ (`#product-1`, `#dung-cu-nha-bep`) để website hoàn toàn độc lập và người dùng không bị văng ra khỏi trang demo.
2. **Chỉnh sửa lỗi xô lệch thẻ do tên sản phẩm dài ngắn khác nhau:** Sinh viên tự phát hiện khi sản phẩm có tên dài 3 dòng sẽ đẩy nút mua hàng lệch hàng so với thẻ bên cạnh. Đã điều chỉnh CSS thêm:
   ```css
   .product-title {
     height: 2.8em;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow: hidden;
   }
   ```
3. **Tối ưu Responsive cho Cột Danh Mục trên Mobile:** Sinh viên nhận thấy trên màn hình điện thoại, nếu để sidebar nằm trên lưới sản phẩm thì người dùng phải cuộn qua rất nhiều checkbox. Đã yêu cầu AI cùng xây dựng giải pháp **Off-Canvas Drawer** với nút bấm `[Danh Mục & Bộ Lọc]` và lớp phủ mờ (`.sidebar-backdrop`), giúp màn hình di động hiển thị ngay lưới 2 cột sản phẩm sạch sẽ.
4. **Loại bỏ suy diễn về trang giỏ hàng:** Không sử dụng các suy đoán của AI về những phần trang web chưa thể kiểm chứng trên thực tế.

---

## 6. Phần tôi hiểu và có thể giải thích

Sinh viên nắm vững và có thể tự tin thuyết minh trước giảng viên về các thành phần kỹ thuật sau:

1. **Cấu trúc HTML5 Ngữ nghĩa (Semantic HTML):**
   * `<header class="site-header">`: Chứa logo nhận diện thương hiệu, thanh tìm kiếm và biểu tượng giỏ hàng.
   * `<nav class="breadcrumb-nav">`: Định vị vị trí trang web trong cấu trúc phân cấp ngành hàng.
   * `<aside class="catalog-sidebar">`: Cột bên trái chứa Cây danh mục và Bộ lọc thuộc tính.
   * `<section class="catalog-main-content">`: Cột bên phải chứa tiêu đề, công cụ sắp xếp và danh sách hàng hóa.
   * `<article class="product-card">`: Đóng gói độc lập từng thẻ sản phẩm, bên trong có `<figure>` chứa ảnh và `<h3 class="product-title">` chứa tên.
   * `<details>` và `<summary>`: Thẻ HTML5 nguyên bản tạo hiệu ứng đóng/mở khối mô tả ngành hàng mà không cần viết JavaScript phức tạp.

2. **Cách tổ chức và Kỹ thuật CSS3:**
   * **CSS Variables (`:root`):** Định nghĩa tập trung các biến màu sắc (`--tiki-blue`, `--price-red`), bóng đổ (`--shadow-card`), bo góc (`--radius-md`) giúp dễ bảo trì và thay đổi giao diện.
   * **CSS Grid & Flexbox:** 
     - `.catalog-layout`: Dùng `grid-template-columns: 260px 1fr` tạo bố cục 2 cột.
     - `.product-grid`: Dùng `grid-template-columns: repeat(3, 1fr)` trên máy tính và tự chuyển thành `repeat(2, 1fr)` trên điện thoại.
     - `.product-body`: Dùng `display: flex; flex-direction: column` với `margin-top: auto` cho phần nút bấm để nút mua hàng luôn nằm ngay ngắn ở đáy thẻ.
   * **Media Queries (`@media`):** Phân chia rõ ràng các mốc Breakpoint:
     - `max-width: 1100px`: Giảm cột lưới sản phẩm.
     - `max-width: 992px`: Biến sidebar thành Drawer trượt ẩn hiện (`transform: translateX(-100%)`).
     - `max-width: 768px`: Chuyển lưới thành 2 cột chuẩn mobile app.
     - `max-width: 480px`: Ẩn chữ nút tìm kiếm, chống tràn ngang màn hình (`overflow-x: hidden`).
