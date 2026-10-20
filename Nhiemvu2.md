# Báo cáo Nhiệm vụ 2 – Sử dụng AI hỗ trợ phân tích nghiệp vụ và UX

## 1. Công cụ AI và mục đích sử dụng
- **Công cụ AI:** Antigravity / Gemini 3.8 Flash (High)
- **Mục đích:** Sử dụng AI hỗ trợ phân tích cấu trúc giao diện và trải nghiệm người dùng (UX) cho 5 khu vực của website Tiki.vn, làm cơ sở để chọn phương án cải tiến giao diện.
- **Nguyên tắc làm việc:** Không xem câu trả lời của AI là kết quả khảo sát thực tế nếu chưa kiểm tra trên website; phân biệt rõ giữa quan sát thực tế và đề xuất của AI.

## 2. Prompt đã sử dụng (Prompt 1)

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

## 3. Bảng phân tích và đối chiếu thực tế 5 khu vực

| Khu vực | Mục đích của chức năng | Thành phần giao diện cần có (quan sát) | Điểm thuận tiện đối với khách hàng (quan sát) | Một vấn đề có thể phát sinh (nhận định) | Đề xuất cải tiến (AI) |
|---|---|---|---|---|---|
| **Trang chủ** | Giúp khách bắt đầu hành trình mua sắm: tìm sản phẩm, đi đến danh mục hoặc chương trình nổi bật, xem tiện ích và thông tin hỗ trợ. | **Quan sát:** đầu trang có ô tìm kiếm, liên kết Trang chủ/Tài khoản, biểu tượng giỏ hàng kèm số lượng, các từ khóa gợi ý và lựa chọn địa chỉ giao. Có thông điệp về hàng thật, vận chuyển/đổi trả; khu vực Danh mục liệt kê nhiều ngành hàng; các liên kết ưu đãi và tiện ích. ([Tiki](https://tiki.vn/)) | Người mua có nhiều lối vào: tìm trực tiếp bằng từ khóa, duyệt danh mục hoặc chọn chương trình; vị trí giao hàng được đưa lên đầu hành trình. | Nhiều ngành hàng, ưu đãi và liên kết cùng xuất hiện có thể làm người mới khó nhận ra đâu là lối đi phù hợp hoặc nội dung ưu tiên. | **Đề xuất của AI:** ưu tiên một số lối đi chính theo nhu cầu (tìm kiếm, danh mục, đơn đã xem/mua nếu phù hợp), gom ưu đãi theo chủ đề và tăng khả năng quét nhanh bằng thứ bậc thị giác rõ ràng. |
| **Danh mục sản phẩm** | Thu hẹp tập sản phẩm từ ngành hàng rộng thành nhóm có liên quan để khách khám phá và so sánh. | **Quan sát:** danh mục “Dụng Cụ Nhà Bếp” có khu vực “Khám phá theo danh mục” với các nhánh như ấm nước, hộp đựng thực phẩm, dao kéo, nồi chảo; trang có tiêu đề danh mục, khu nội dung thông tin và nhóm sản phẩm bán chạy. ([Trang danh mục](https://tiki.vn/nha-bep/c1951)) | Các nhánh con giúp đi nhanh đến loại sản phẩm cụ thể; danh sách sản phẩm bán chạy tạo điểm bắt đầu cho người chưa biết chọn món nào. | Trang mẫu được khảo sát dành phần đáng kể cho nội dung giới thiệu dài; người mua muốn so sánh sản phẩm có thể phải cuộn qua nhiều nội dung trước khi đến phần phù hợp. | **Đề xuất của AI:** đặt danh sách sản phẩm và công cụ lọc/sắp xếp dễ nhận biết ở gần đầu trang; cho phép thu gọn nội dung giới thiệu dài và giữ đường dẫn nhánh danh mục dễ truy cập. |
| **Chi tiết sản phẩm** | Cung cấp thông tin đủ để đánh giá một mặt hàng cụ thể và quyết định có mua hay không. | **Quan sát:** đã mở được trang sản phẩm từ danh mục; công cụ trích xuất trang không trả về nội dung chi tiết sản phẩm trong phiên này, do đó chưa xác minh được đầy đủ các khối như lựa chọn biến thể, đánh giá, thông tin giao hàng hay nút mua. ([Trang sản phẩm mẫu](https://tiki.vn/dung-cu-xay-toi-ot-locknlock-cks321grn-cks312grn-cks327grn-cks326grn-ke-o-tay-don-gia-n-p279331995.html)) | **Quan sát giới hạn:** trang sản phẩm có URL riêng và được liên kết từ danh sách sản phẩm; chưa đủ dữ liệu trích xuất để kết luận các tiện ích khác trên trang. | Nếu các thông tin ảnh hưởng quyết định mua (giá cuối, người bán, giao hàng, đổi trả, biến thể) nằm xa nhau hoặc khó thấy, khách có thể mất công tìm hiểu trước khi đặt hàng. Đây là rủi ro UX cần kiểm tra trực quan thêm, không phải khẳng định về trang Tiki hiện tại. | **Đề xuất của AI:** nhóm các thông tin quyết định mua ở cùng vùng dễ quét; làm rõ giá/khuyến mãi, người bán, tồn kho, thời gian giao dự kiến theo địa chỉ, chính sách đổi trả và lựa chọn biến thể trước hành động thêm giỏ. |
| **Tìm kiếm** | Giúp khách chuyển nhu cầu thành tập kết quả có thể duyệt, lọc và sắp xếp. | **Quan sát:** tìm với từ khóa `iphone` hiển thị ô tìm kiếm, gợi ý từ khóa, bộ lọc (ví dụ giao siêu tốc 2H, siêu rẻ, từ 4 sao và thuộc tính sản phẩm), lựa chọn sắp xếp “Phổ biến”, phân trang và thẻ kết quả có tên/giá/thông tin người bán. Trang cũng có nội dung SEO dài phía dưới kết quả. ([Kết quả tìm kiếm](https://tiki.vn/search?q=iphone)) | Gợi ý truy vấn giúp khám phá cách gọi khác; lọc và sắp xếp hỗ trợ thu hẹp lựa chọn; một số thẻ cho thấy người bán, giá và tín hiệu như lượt bán. | Truy vấn “iphone” có thể trả cả phụ kiện liên quan; đồng thời nội dung biên tập dài xuất hiện trên trang kết quả có thể khiến ranh giới giữa kết quả mua hàng và nội dung tham khảo kém rõ. | **Đề xuất của AI:** cung cấp bộ lọc “chỉ sản phẩm đúng loại” hoặc phân nhóm điện thoại/phụ kiện; làm rõ nội dung tài trợ và giữ bộ lọc đang chọn dễ nhìn khi cuộn. |
| **Giỏ hàng** | Cho khách rà soát các sản phẩm đã chọn và chuẩn bị bước đặt hàng. | **Quan sát:** trang chủ có biểu tượng giỏ hàng với số `0` trong phiên khảo sát. URL `/cart` không tải được qua công cụ truy cập, nên không thể xác minh giao diện nội dung giỏ, chỉnh số lượng, xóa sản phẩm, phí giao hàng hay bước thanh toán. ([Trang chủ](https://tiki.vn/), [URL giỏ hàng](https://tiki.vn/cart)) | **Quan sát giới hạn:** biểu tượng kèm số lượng cho biết có một điểm truy cập đến giỏ và trạng thái số món; nội dung trang giỏ chưa quan sát được. | Do chưa xem được trang giỏ, không thể kết luận thao tác cụ thể. Một rủi ro cần đánh giá là tổng tiền, phí vận chuyển hoặc điều kiện ưu đãi chỉ hiện rõ ở bước muộn, gây bất ngờ trước khi đặt hàng. | **Đề xuất của AI:** trong giỏ, trình bày rõ từng sản phẩm/biến thể/số lượng, giá từng món, tạm tính, phí giao và ưu đãi áp dụng; cập nhật tổng tiền ngay khi chỉnh sửa và cho phép quay lại mua sắm mà không mất lựa chọn. |

## 4. Quá trình kiểm tra và điều chỉnh của sinh viên

### 4.1 Những điểm sinh viên đã loại bỏ từ phản hồi của AI:
- **Loại bỏ suy diễn về trang giỏ hàng (`/cart`):** AI ban đầu có xu hướng tự mô tả chi tiết quy trình thanh toán một bước và các ô nhập voucher. Tuy nhiên trên thực tế, URL `/cart` không tải được qua công cụ kiểm tra khi chưa đăng nhập. Sinh viên đã loại bỏ các mô tả suy đoán này và ghi nhận trung thực: *"chưa xác minh được nội dung trang giỏ hàng qua công cụ, không khẳng định điều chưa kiểm chứng"*.
- **Loại bỏ khẳng định về trang chi tiết sản phẩm:** AI tự động liệt kê các bảng thông số kỹ thuật phức tạp, nhưng trên trang sản phẩm mẫu (dụng cụ xay tỏi ớt Lock&Lock), một số thành phần render bằng JavaScript phía client không trích xuất được. Sinh viên đã hạ mức độ xuống thành "rủi ro UX cần kiểm tra thêm" thay vì khẳng định lỗi của Tiki.

### 4.2 Những điểm sinh viên tiếp thu từ AI và áp dụng vào Nhiệm vụ 3:
- **Đề xuất ở khu vực danh mục sản phẩm:** Đưa công cụ lọc và danh sách sản phẩm lên đầu trang, chuyển bài viết dài vào khối thu gọn. Đã hiện thực hóa bằng thẻ `<details>` và `<summary>` trong HTML5.
- **Đề xuất ở khu vực thẻ sản phẩm:** Nhóm các thông tin ra quyết định mua hàng (người bán Tiki Trading, giá bán đỏ nổi bật, mức tiết kiệm, giao nhanh 2h, đổi trả 30 ngày) vào cùng một vùng quét mắt thuận tiện.

### 4.3 Nhận xét bổ sung của sinh viên:
- AI đưa ra các gợi ý tốt về lý thuyết trải nghiệm người dùng, nhưng khi triển khai cần bổ sung các kỹ thuật CSS thực tế như `-webkit-line-clamp: 2` để cố định chiều cao tên sản phẩm tránh xô lệch lưới trên di động, và thiết kế bảng điều khiển trượt (off-canvas drawer) cho cột danh mục trên màn hình nhỏ.
