# AI Usage Log

## 1. Công cụ AI
- **Tên công cụ:** Antigravity / Gemini 3.8 Flash (High)
- **URL:** https://antigravity.google/

## 2. Mục đích sử dụng
- Hỗ trợ phân tích nghiệp vụ và trải nghiệm người dùng (UX) cho 5 khu vực của website Tiki.
- Đề xuất phương án bố cục 2 cột và các thành phần HTML cần thiết cho ngành hàng Dụng Cụ Nhà Bếp.
- Hỗ trợ tạo khung mã HTML5 và CSS3 ban đầu.
- Giải thích responsive design và cách kiểm tra giao diện trên nhiều kích thước màn hình.

## 3. Prompt đã sử dụng

### Prompt 1 – Phân tích website (Nhiệm vụ 2)
```text
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng
cho website thương mại điện tử.
Tôi đang khảo sát website: Tiki, đường dẫn: https://tiki.vn/
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

### Prompt 2 – Nhờ AI đề xuất giao diện (Nhiệm vụ 3 - Bước 2)
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

Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.
```

### Prompt 3 – Tạo mã nguồn (Nhiệm vụ 3 - Bước 3)
```text
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.

Yêu cầu:
- Giao diện có tiêu đề, cây danh mục và khu vực sản phẩm 2 cột.
- Có tối thiểu 4 sản phẩm mẫu (dụng cụ nhà bếp thực tế trên Tiki).
- Mỗi sản phẩm có hình ảnh 1:1, tên, giá bán đỏ nổi bật, giá gốc, mức tiết kiệm, nhãn Tiki Trading và nút mua hàng.
- Bố cục phù hợp với màn hình máy tính (grid 3 cột kế sidebar) và điện thoại (grid 2 cột, sidebar chuyển thành drawer).
- Mã HTML có cấu trúc ngữ nghĩa rõ ràng.
- CSS được tách thành file riêng style.css, sử dụng CSS Variables.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện ngoài (Bootstrap/Tailwind) vào dự án.

Giải thích cách chạy trang web và những phần tôi cần kiểm tra.
```

## 4. Kết quả AI đề xuất

### Đề xuất từ AI:
- **Bố cục 2 cột:** Cột trái là cây danh mục và bộ lọc; cột phải gồm breadcrumb, khối giới thiệu thu gọn và lưới sản phẩm.
- **Thẻ sản phẩm:** Ảnh tỉ lệ 1:1, giá bán đỏ nổi bật, giá gốc gạch ngang, tag số tiền tiết kiệm, nhãn Tiki Trading và nút mua hàng; nhãn đặt gọn ở góc để không che ảnh.
- **Cấu trúc kỹ thuật:** Sử dụng các thẻ HTML5 ngữ nghĩa. Tổ chức CSS thành file riêng, dùng CSS Variables, CSS Grid, Flexbox và Media Queries.
- **Hiển thị đa thiết bị:** Máy tính hiển thị lưới 3 cột cạnh sidebar; điện thoại hiển thị lưới 2 cột, sidebar chuyển thành drawer.
- **Khả năng sử dụng:** Kiểm tra vùng chạm nút bấm, độ tương phản giá, độ đồng đều chiều cao thẻ, trạng thái focus và tính tương thích thiết bị.

### Phương án lựa chọn:
Bố cục 2 cột kiểu thương mại điện tử, đưa cây danh mục, bộ lọc và sản phẩm lên đầu trang, thu gọn phần giới thiệu, thiết kế lại thẻ sản phẩm với phân cấp giá rõ ràng và chuyển sidebar thành Off-Canvas Drawer trên điện thoại.

### Lý do lựa chọn:
Phương án giải quyết trực tiếp các vấn đề đã xác định ở khảo sát, phù hợp thói quen mua sắm trên điện thoại của khách Việt Nam và triển khai được hoàn toàn bằng HTML5/CSS3, không cần backend hay cơ sở dữ liệu.

## 5. Kiểm tra và tự điều chỉnh (Bước 4)

Sau khi AI tạo ra trang `index.html` (gồm 6 sản phẩm mẫu), file `css/style.css` và thư mục `images/`, sinh viên đã mở trang trên trình duyệt, kiểm tra ở kích thước máy tính và điện thoại bằng Chrome DevTools, kiểm tra hình ảnh, nội dung, bố cục và tự tay chỉnh sửa các điểm sau:

- **Loại bỏ liên kết trỏ ra ngoài:** Ban đầu khi nhấp chuột vào để xem chi tiết sản phẩm, trang web dẫn tới web của Tiki, phần này là không cần thiết và đã bị loại bỏ hoàn toàn thành liên kết nội bộ (`#product-1`, `#xay-cat`, `#trang-chu`) để người dùng ở lại trang bài tập demo.
- **Tối ưu cột danh mục trên điện thoại:** Nếu để sidebar nằm trên lưới sản phẩm, người dùng phải cuộn qua rất nhiều checkbox. Tôi yêu cầu giải pháp Off-Canvas Drawer với nút `[Danh Mục & Bộ Lọc Tìm Kiếm]` và lớp phủ mờ (`.sidebar-backdrop`), giúp điện thoại hiển thị ngay dưới 2 cột sản phẩm.
- **Không sử dụng các suy đoán của AI về những phần website chưa kiểm chứng được:** Ở trang giỏ hàng (`/cart`), do công cụ không truy cập được khi chưa đăng nhập nên AI có xu hướng tự suy đoán giao diện thanh toán; sinh viên đã chủ động loại bỏ các suy đoán này khỏi báo cáo khảo sát.
- **Cố định độ dài tên sản phẩm:** Tự bổ sung thuộc tính CSS `-webkit-line-clamp: 2` để các thẻ sản phẩm luôn bằng phẳng, không bị so le chiều cao khi tên sản phẩm dài ngắn khác nhau.

## 6. Phần tôi hiểu và có thể giải thích
- `header`, `nav`, `aside`, `main`, `section`, `article`, `figure` và `footer` giúp tổ chức nội dung HTML theo từng khu vực ngữ nghĩa chuẩn SEO và accessibility.
- `details` và `summary` cho phép tạo khối giới thiệu có thể đóng/mở trực tiếp bằng HTML nguyên bản mà không cần JavaScript.
- `img` hiển thị hình ảnh; thuộc tính `alt` mô tả hình ảnh để hỗ trợ khả năng tiếp cận.
- `class` cho phép CSS chọn và định dạng các thành phần một cách có hệ thống.
- `display: grid` và `grid-template-columns` sắp xếp các thẻ sản phẩm và phân chia bố cục 2 cột (sidebar + danh sách sản phẩm).
- `@media` điều chỉnh bố cục theo chiều rộng màn hình (responsive design).
- `aspect-ratio: 1 / 1` và `object-fit: cover` giữ hình ảnh sản phẩm vuông vức và sắc nét.
- `-webkit-line-clamp: 2` khống chế tiêu đề sản phẩm tối đa 2 dòng để chiều cao thẻ luôn bằng phẳng.
- `:hover` và `:active` thể hiện trạng thái tương tác của thẻ và nút bấm.
- `position: sticky` giữ thanh header và thanh lọc cố định khi cuộn trang.
- JavaScript thuần được dùng với lượng nhỏ để xử lý đóng mở bộ lọc trên mobile, hiệu ứng nảy số badge giỏ hàng và thông báo Toast mà không cần thư viện ngoài.
