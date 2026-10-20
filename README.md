# E-commerce UI Improvement

Dự án bài tập cá nhân Chương 1 - Môn **Phát triển ứng dụng WEB/TMĐT**  
* **Họ và tên:** Hoàng Anh Thi  
* **MSSV:** 31241027492  
* **Lớp:** EE0001  
* **Trường:** Đại học Kinh tế TP. Hồ Chí Minh (UEH)  
* **Giảng viên hướng dẫn:** TS Nguyễn Mạnh Tuấn  
* **Đường dẫn repository GitHub:** https://github.com/pumpomeo/ecommerce-ui-improvement  
* **Đường dẫn GitHub Pages:** https://pumpomeo.github.io/ecommerce-ui-improvement/  

---

## 1. Giới thiệu
Đây là trang giao diện minh họa được xây dựng bằng HTML5 và CSS3. Dựa trên kết quả khảo sát website Tiki, dự án tập trung cải tiến khu vực thẻ sản phẩm và bố cục danh mục ngành hàng Dụng Cụ Nhà Bếp. Giao diện mới giúp khách hàng dễ duyệt sản phẩm, nhận biết giá khuyến mãi, giá gốc, mức tiết kiệm cụ thể và tối ưu trải nghiệm thao tác trên cả máy tính lẫn điện thoại di động.

## 2. Website tham khảo
- **Tên website:** Tiki
- **URL:** https://tiki.vn/
- **Khu vực đã khảo sát:** Trang chủ, Danh mục Dụng cụ nhà bếp (https://tiki.vn/nha-bep/c1951), Chi tiết sản phẩm mẫu (Dụng cụ xay tỏi ớt Lock&Lock CKS321GRN), Tìm kiếm (từ khóa "iphone", "nồi chiên") và Giỏ hàng.

> Đây là giao diện minh họa độc lập cho bài tập, không phải bản sao hoàn chỉnh của Tiki và không kết nối với hệ thống Tiki.

## 3. Chức năng
- Hiển thị cây danh mục sản phẩm (Category Tree) và bộ lọc thuộc tính đa tiêu chí (TikiNOW giao siêu tốc 2-3H, Tiki Trading chính hãng, khoảng giá, thương hiệu Lock&Lock, Tefal, Elmich và đánh giá sao).
- Hiển thị danh sách gồm 6 sản phẩm mẫu thuộc ngành hàng Dụng cụ nhà bếp thực tế trên Tiki.
- Mỗi thẻ sản phẩm hiển thị ảnh tỉ lệ 1:1, thông tin người bán (Tiki Trading / Official Store), tên sản phẩm, giá bán đỏ nổi bật, giá gốc gạch ngang, tag số tiền tiết kiệm, đánh giá sao, thời gian giao hàng và nút mua hàng.
- Bố cục tự điều chỉnh theo màn hình: trên máy tính hiển thị lưới 3 cột cạnh sidebar; trên điện thoại hiển thị lưới 2 cột và sidebar chuyển thành bảng điều khiển trượt (Off-Canvas Drawer) tiện lợi.
- Hiệu ứng tương tác: thẻ nâng nhẹ khi rê chuột, phóng nhẹ ảnh, nút thêm giỏ hàng có nảy số badge và hiển thị thông báo Toast.
- Không có backend, cơ sở dữ liệu, đăng nhập hoặc thanh toán.

## 4. Công nghệ
- HTML5 (sử dụng cấu trúc thẻ ngữ nghĩa rõ ràng: `header`, `nav`, `aside`, `main`, `section`, `article`, `figure`, `details`, `summary`, `footer`)
- CSS3 (tách thành file riêng `style.css`, sử dụng CSS Variables, CSS Grid, Flexbox và Media Queries)
- JavaScript thuần (dung lượng nhẹ phục vụ đóng/mở drawer bộ lọc trên mobile và tăng số lượng giỏ hàng, không sử dụng thư viện ngoài)

## 5. Cách chạy
1. Tải và giải nén thư mục dự án (hoặc clone từ GitHub repository).
2. Mở thư mục `ecommerce-ui-improvement`.
3. Nhấp đúp vào `index.html` hoặc nhấp chuột phải và chọn mở bằng trình duyệt Google Chrome.
4. Để kiểm tra trên điện thoại, mở Chrome DevTools bằng phím `F12`, bật chế độ thiết bị bằng `Ctrl + Shift + M`, sau đó chọn kích thước màn hình mong muốn.

Hoặc xem trực tiếp qua GitHub Pages: https://pumpomeo.github.io/ecommerce-ui-improvement/

Không cần cài đặt máy chủ hay thư viện bên ngoài.

## 6. Cải tiến đã thực hiện
Dựa trên vấn đề xác định ở bước khảo sát, các cải tiến cụ thể đã được áp dụng vào giao diện:
- **Khắc phục nội dung giới thiệu dài:** Đưa cây danh mục, bộ lọc và sản phẩm lên ngay đầu trang; phần giới thiệu dài được đưa vào khối thu gọn bằng thẻ `<details>` để khách hàng không phải cuộn nhiều.
- **Quy hoạch lại vị trí nhãn (Badges):** Nhãn khuyến mãi và người bán được đặt gọn gàng ở góc trên để không che khuất hình ảnh sản phẩm 1:1.
- **Phân cấp hiển thị giá tương phản cao:** Dùng màu đỏ cỡ lớn cho giá bán, giá gốc hiển thị nhỏ và gạch ngang, bổ sung tag "Tiết kiệm [số tiền]₫" giúp khách nhận biết ngay lợi ích tài chính.
- **Khống chế độ dài tên sản phẩm:** Sử dụng thuộc tính CSS `-webkit-line-clamp: 2` để tên sản phẩm luôn hiển thị tối đa 2 dòng, giúp các thẻ sản phẩm luôn bằng phẳng, không bị so le chiều cao khi hiển thị 2 cột trên điện thoại.
- **Tối ưu cột danh mục trên điện thoại:** Thay vì để sidebar chiếm diện tích đẩy sản phẩm xuống dưới, đã áp dụng giải pháp Off-Canvas Drawer với nút `[Danh Mục & Bộ Lọc Tìm Kiếm]` và lớp phủ mờ (`.sidebar-backdrop`), giúp điện thoại hiển thị ngay lưới 2 cột sản phẩm.
- **Loại bỏ liên kết ngoài không cần thiết:** Ban đầu khi nhấp chuột vào xem chi tiết sản phẩm, trang web dẫn tới web của Tiki, phần này là không cần thiết và đã được loại bỏ hoàn toàn thành liên kết nội bộ để người dùng ở lại trang bài tập.

## 7. Hỗ trợ từ AI
AI được sử dụng để hỗ trợ phân tích nghiệp vụ/UX website Tiki (Nhiệm vụ 2), đề xuất phương án thiết kế bố cục 2 cột, hỗ trợ tạo khung mã HTML5/CSS3 và giải thích cách bố trí đáp ứng nhiều kích thước màn hình. 

Sau đó, sinh viên đã tự mở trang trên trình duyệt, kiểm tra ở kích thước máy tính và điện thoại bằng Chrome DevTools, kiểm tra hình ảnh, nội dung, bố cục và tự tay điều chỉnh các điểm thực tế: loại bỏ liên kết trỏ ra ngoài Tiki, tối ưu cột danh mục trên điện thoại thành drawer và loại bỏ các suy đoán chưa kiểm chứng của AI về trang giỏ hàng. Chi tiết prompt và nhật ký tương tác được ghi đầy đủ tại file `AI_USAGE.md`.
