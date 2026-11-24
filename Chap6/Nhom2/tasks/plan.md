# Kế hoạch thực hiện Nhóm 2

Nguồn yêu cầu: `../BaiThucHanh_Responsive_JQuery.pdf` và tài liệu Bootstrap được liên kết trong đề.

## Phạm vi đã được yêu cầu

Làm đủ ba phần trong thư mục Nhóm 2, chạy cục bộ: e-commerce MÈO HOME (đồ dùng nhà bếp), thống kê bài tập LMS bằng jQuery, Flappy Bird cá nhân hóa. Không triển khai website lên Internet.

## Thiết kế và lựa chọn kỹ thuật

- HTML/CSS/JavaScript không cần bước build; thư viện lưu offline trong `vendor/`.
- Bootstrap 3.4.1 theo đề, jQuery 3.7.1 tương thích Bootstrap 3, xZoom 1.0.15 và bootstrap-star-rating 4.1.2 dùng theme SVG.
- E-commerce ưu tiên danh mục và thao tác mua: thanh điều hướng gọn, danh mục bên trái trên desktop, lưới sản phẩm, trang chi tiết, giỏ hàng và trạng thái đơn demo. Màu teal/cam, nền trắng, cỡ chữ cơ bản 16px.
- Giảm giá góc trên trái; New/Best seller góc trên phải; tiến độ kho có nhãn chữ. Ảnh gallery gồm ảnh sản phẩm và sơ đồ minh họa được ghi rõ.
- LMS lấy bài thứ năm bằng chỉ số 4, duyệt mọi chủ đề kể cả chủ đề không có bài tập. Không tự suy đoán deadline thiếu trên trang.
- Game dùng requestAnimationFrame và bước mô phỏng cố định; interval 40/30/25/20 ms theo mốc 0/5/20/40; đạt 50 điểm dừng và thắng. Phím ArrowDown là thao tác bay.
- Kiểm tra logic bằng Node test runner có sẵn và giao diện thực tế bằng Chrome/Playwright đã có trên máy.

## Thứ tự

1. Chuẩn bị thư viện/ảnh và kiểm tra nguồn chính thức.
2. Viết kiểm thử biên rồi hoàn thiện logic giỏ hàng, giảm giá và game.
3. Hoàn thiện e-commerce: danh mục → chi tiết/zoom/đánh giá → giỏ hàng/trạng thái đơn demo.
4. Hoàn thiện bộ đọc LMS, trang kiểm chứng và dữ liệu lớp thật nếu phiên đăng nhập truy cập được.
5. Hoàn thiện game, kiểm tra va chạm, lên level, tạm dừng và chiến thắng.
6. Kiểm tra desktop/mobile, chụp ảnh, viết README và báo cáo đối chiếu từng yêu cầu.

## Kiểm chứng và giới hạn

Kiểm tra các viewport 320, 768, 1024 và 1440 px; thao tác bằng bàn phím; không có lỗi console hoặc tài nguyên thất lạc. Đây là ứng dụng frontend học tập, không có thanh toán hay tài khoản bán hàng thật. Dữ liệu mẫu LMS phải phân biệt với dữ liệu đọc từ lớp thật.
