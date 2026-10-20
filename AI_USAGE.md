# AI Usage Log

## 1. Công cụ AI
- **Tên công cụ:** Antigravity / Gemini 3.8 Flash (High)
- **URL:** https://antigravity.google/

## 2. Mục đích sử dụng
- Hỗ trợ xác định vấn đề trong cách hiển thị thẻ sản phẩm và danh mục sản phẩm của website Tiki.
- Đề xuất bố cục 2 cột và các thành phần HTML cần thiết.
- Hỗ trợ tạo khung mã HTML5 và CSS3.
- Giải thích responsive design và cách kiểm tra giao diện trên nhiều kích thước màn hình.

## 3. Prompt đã sử dụng

### Prompt 1 – Phân tích website
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
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

### Prompt 2 – Đề xuất giao diện
Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.

Tôi muốn cải tiến khu vực thẻ sản phẩm trong danh mục sản phẩm ngành hàng Dụng Cụ Nhà Bếp của website Tiki. Tôi muốn khách hàng dễ nhận biết giá khuyến mãi, giá gốc và mức giảm giá; thể hiện rõ thông tin người bán chính hãng và tiện ích giao nhanh; đồng thời nút thao tác cần dễ nhìn và bố cục cần phù hợp với điện thoại.

Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.

Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.

Trước tiên, hãy giải thích phương án thiết kế, chưa tạo mã nguồn.

### Prompt 3 – Tạo mã nguồn
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.

Yêu cầu:
- Có thanh điều hướng, cây danh mục bên trái và khu vực sản phẩm bên phải.
- Có tối thiểu 4 sản phẩm mẫu thực tế (dụng cụ nhà bếp Tiki).
- Mỗi sản phẩm có hình ảnh tỉ lệ 1:1, tên, giá bán, giá gốc, nhãn giảm giá và nút thao tác.
- Thể hiện rõ người bán (Tiki Trading) và dịch vụ giao nhanh 2H.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng, sử dụng thẻ ngữ nghĩa.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện ngoài (Bootstrap/Tailwind) vào dự án.

Giải thích cách chạy trang web và những phần cần kiểm tra.

## 4. Kết quả AI đề xuất
AI gợi ý sử dụng bố cục gồm cột cây danh mục/bộ lọc bên trái và lưới sản phẩm bên phải. Thẻ sản phẩm gồm hình ảnh 1:1, thông tin người bán (Tiki Trading), tên sản phẩm, giá khuyến mãi, giá gốc, nhãn giảm giá, số tiền tiết kiệm, đánh giá và nút thao tác. Giá khuyến mãi được làm nổi bật bằng màu đỏ và cỡ chữ lớn; giá gốc được hiển thị nhỏ hơn, màu xám và gạch ngang. CSS Grid được dùng để sắp xếp các thẻ sản phẩm, kết hợp media queries để điều chỉnh bố cục theo kích thước màn hình.

## 5. Kiểm tra và điều chỉnh
Sau khi mở trang bằng Chrome, cần kiểm tra:
- Tất cả hình ảnh có hiển thị đúng hay không.
- Tên và giá sản phẩm có bị tràn hoặc che khuất không.
- Giá khuyến mãi và giá gốc có dễ phân biệt không.
- Nút thao tác có dễ nhìn và dễ bấm trên điện thoại không.
- Bố cục có xuất hiện thanh cuộn ngang ngoài ý muốn không.
- Giao diện ở màn hình máy tính, máy tính bảng và điện thoại.

**Ghi lại sau khi tự kiểm tra:**  
- **Kích thước màn hình đã thử:** Desktop 1920x1080, Laptop 1366x768, iPad Air 820x1180, iPhone 12 Pro 390x844, Galaxy S20 360x800.  
- **Vấn đề tự phát hiện:**  
  1. Ban đầu có một số liên kết trỏ thẳng ra ngoài trang `tiki.vn`, khi bấm vào người dùng bị chuyển hướng rời khỏi trang demo bài tập.
  2. Tên các sản phẩm có độ dài không đều nhau (có sản phẩm 1 dòng, có sản phẩm 3 dòng) khiến chiều cao các thẻ bị so le, làm vỡ hàng lưới khi xem 2 cột trên điện thoại.
  3. Cột danh mục và bộ lọc trên điện thoại nằm cố định phía trên chiếm nhiều diện tích, đẩy danh sách sản phẩm xuống dưới sâu.
- **Điều chỉnh đã thực hiện:**  
  1. Chuyển toàn bộ các đường link thành liên kết nội bộ trong trang (`#product-1`, `#xay-cat`, `#trang-chu`).
  2. Thêm thuộc tính CSS `-webkit-line-clamp: 2` và cố định chiều cao khối tiêu đề để giữ các thẻ sản phẩm luôn bằng phẳng, đều đặn.
  3. Thiết kế lại cột danh mục trên di động thành dạng bảng trượt (Off-Canvas Drawer) đóng/mở qua nút bấm `[Danh Mục & Bộ Lọc Tìm Kiếm]`, giúp người dùng điện thoại thấy ngay sản phẩm ở đầu trang.
  4. Thêm hiệu ứng nảy số badge giỏ hàng và thông báo toast khi bấm nút "Thêm vào giỏ".
- **Kết quả sau khi sửa:** Giao diện hiển thị cân đối, không xuất hiện thanh cuộn ngang, thao tác thuận tiện và trực quan trên cả máy tính và điện thoại.

## 6. Phần tôi hiểu và có thể giải thích
- `header`, `nav`, `aside`, `main`, `section`, `article` và `footer` giúp tổ chức nội dung HTML theo từng khu vực ngữ nghĩa rõ ràng.
- `img` hiển thị hình ảnh; thuộc tính `alt` mô tả hình ảnh để hỗ trợ khả năng tiếp cận (accessibility).
- `class` cho phép CSS chọn và định dạng các thành phần.
- `display: grid` và `grid-template-columns` sắp xếp các thẻ sản phẩm và phân chia bố cục 2 cột (sidebar + danh sách sản phẩm).
- `@media` điều chỉnh bố cục theo chiều rộng màn hình (responsive design).
- `aspect-ratio: 1 / 1` và `object-fit: cover` giữ hình ảnh sản phẩm vuông vức và sắc nét.
- `-webkit-line-clamp: 2` khống chế tiêu đề sản phẩm tối đa 2 dòng để chiều cao thẻ luôn bằng phẳng.
- `:hover` và `:active` thể hiện trạng thái tương tác của thẻ và nút bấm.
- `position: sticky` giữ thanh header và thanh lọc cố định khi cuộn trang.
- JavaScript thuần được dùng với lượng nhỏ để xử lý đóng mở bộ lọc trên mobile và tăng số lượng giỏ hàng mà không cần thư viện ngoài.
