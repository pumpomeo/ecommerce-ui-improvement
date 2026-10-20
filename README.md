# E-commerce UI Improvement

## 1. Giới thiệu
Đây là trang giao diện minh họa được xây dựng bằng HTML5 và CSS3 cho bài tập cá nhân môn Phát triển ứng dụng WEB/TMĐT (UEH). Bài tập tập trung cải tiến thẻ sản phẩm và bố cục danh mục ngành hàng Dụng Cụ Nhà Bếp, giúp khách hàng dễ nhận biết giá khuyến mãi, giá gốc, mức tiết kiệm, thông tin người bán và thuận tiện thao tác trên thiết bị di động.

## 2. Website tham khảo
- **Tên website:** Tiki
- **URL:** https://tiki.vn/
- **Khu vực đã khảo sát:** Trang chủ, Danh mục Dụng cụ nhà bếp (https://tiki.vn/nha-bep/c1951), Chi tiết sản phẩm mẫu (Dụng cụ xay tỏi ớt Lock&Lock CKS321GRN), Tìm kiếm và Giỏ hàng.

> Đây là giao diện minh họa độc lập cho bài tập, không phải bản sao hoàn chỉnh của Tiki và không kết nối với hệ thống Tiki.

## 3. Chức năng
- Hiển thị cây danh mục sản phẩm (Category Tree) và bộ lọc thuộc tính (TikiNOW 2H, Tiki Trading, khoảng giá, thương hiệu, đánh giá).
- Hiển thị danh sách gồm 6 sản phẩm mẫu thuộc ngành hàng Dụng cụ nhà bếp.
- Mỗi thẻ hiển thị hình minh họa tỉ lệ 1:1, thông tin người bán, tên sản phẩm, giá khuyến mãi, giá gốc, tỷ lệ giảm giá, số tiền tiết kiệm, đánh giá sao, thời gian giao hàng dự kiến và nút thao tác.
- Bố cục tự điều chỉnh theo màn hình máy tính (kết hợp sidebar cố định), máy tính bảng và điện thoại (sidebar chuyển thành bảng điều khiển trượt mở khi cần).
- Hỗ trợ tương tác phía client: bấm thêm vào giỏ tăng số lượng và hiện thông báo, bấm yêu thích đổi màu, bấm sắp xếp chuyển trạng thái.
- Không có backend, cơ sở dữ liệu, đăng nhập hoặc thanh toán.

## 4. Công nghệ
- HTML5
- CSS3
- JavaScript (thuần, dung lượng nhẹ phục vụ tương tác giao diện)

## 5. Cách chạy
1. Tải và giải nén thư mục dự án (hoặc clone từ GitHub repository).
2. Mở thư mục `ecommerce-ui-improvement`.
3. Nhấp đúp vào `index.html` hoặc nhấp chuột phải và chọn mở bằng Google Chrome.
4. Để kiểm tra trên điện thoại, mở Chrome DevTools bằng `F12`, bật chế độ thiết bị bằng `Ctrl + Shift + M`, sau đó chọn kích thước màn hình mong muốn.

Hoặc xem trực tiếp qua GitHub Pages: https://pumpomeo.github.io/ecommerce-ui-improvement/

Không cần cài đặt máy chủ hay thư viện bên ngoài.

## 6. Cải tiến đã thực hiện
- Làm nổi bật giá khuyến mãi bằng màu đỏ và cỡ chữ lớn hơn.
- Hiển thị giá gốc bằng chữ nhỏ, màu xám và gạch ngang.
- Thêm nhãn phần trăm giảm giá và số tiền tiết kiệm cụ thể để khách dễ nhận ra ưu đãi.
- Tách thông tin thành từng nhóm rõ ràng: người bán (Tiki Trading), tên sản phẩm, giá bán, tiện ích giao nhanh và nút thao tác.
- Quy hoạch lại nhãn (badges) lên góc trên để không che khuất hình ảnh sản phẩm.
- Khống chế tên sản phẩm tối đa 2 dòng bằng `-webkit-line-clamp: 2` để các thẻ sản phẩm luôn bằng phẳng, không bị lệch hàng khi tên dài ngắn khác nhau.
- Dùng CSS Grid và media queries để thay đổi số cột theo kích thước màn hình; trên điện thoại hỗ trợ mở bộ lọc dạng trượt (off-canvas drawer) để không chiếm diện tích hiển thị sản phẩm.
- Tối ưu kích thước vùng chạm của nút thao tác trên điện thoại đạt chuẩn $\ge 40\text{px}$.
- Thêm trạng thái hover, focus và phản hồi trực quan khi bấm nút thêm vào giỏ để tăng khả năng nhận biết khi thao tác.

## 7. Hỗ trợ từ AI
AI được sử dụng để gợi ý phương án cải tiến thẻ sản phẩm và bố cục danh mục, hỗ trợ viết khung HTML/CSS và giải thích cách bố trí đáp ứng nhiều kích thước màn hình. Sau đó tôi đã mở trang trên trình duyệt, kiểm tra hình ảnh, nội dung và bố cục, sau đó thực hiện các điều chỉnh thực tế (như xử lý độ dài tên sản phẩm bằng line-clamp, chuyển đổi liên kết ngoài thành liên kết nội bộ, tối ưu bộ lọc mobile thành drawer). Chi tiết prompt và quá trình kiểm tra được ghi trong `AI_USAGE.md`.
