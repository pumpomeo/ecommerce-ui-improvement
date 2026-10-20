# BÀI TẬP CÁ NHÂN VỀ NHÀ CHƯƠNG 1
## Khảo sát ứng dụng web, GitHub và quy trình sử dụng AI

* **Họ và tên:** Hoàng Anh Thi
* **MSSV:** 31241027492
* **Lớp:** EE0001
* **Môn học:** Phát triển ứng dụng WEB/TMĐT (UEH)
* **Giảng viên hướng dẫn:** TS Nguyễn Mạnh Tuấn

---

## Nhiệm vụ 2 - Sử dụng AI hỗ trợ phân tích

### Prompt 1 - Phân tích website

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

---

### Tóm tắt nội dung của AI

| Khu vực | Mục đích chức năng | Thành phần giao diện cần có | Điểm thuận tiện đối với khách hàng | Một vấn đề có thể phát sinh | Một đề xuất cải tiến (AI) và nhận xét của bản thân |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Trang chủ** | Giúp khách bắt đầu hành trình mua sắm: tìm sản phẩm, đi đến danh mục hoặc chương trình nổi bật, xem tiện ích và thông tin hỗ trợ. | Đầu trang có ô tìm kiếm, liên kết Trang chủ/Tài khoản, biểu tượng giỏ hàng kèm số lượng, từ khóa gợi ý và lựa chọn địa chỉ giao. Có thông điệp về hàng thật, vận chuyển/đổi trả; khu vực Danh mục liệt kê nhiều ngành hàng; các liên kết ưu đãi và tiện ích. | Người mua có nhiều cách truy cập: tìm trực tiếp bằng từ khóa, duyệt danh mục hoặc chọn chương trình; vị trí giao hàng được đưa lên đầu hành trình. | Nhiều ngành hàng, ưu đãi và liên kết cùng xuất hiện có thể làm người mới khó nhận ra đâu là lối đi phù hợp hoặc nội dung ưu tiên. | Ưu tiên một số lối đi chính theo nhu cầu (tìm kiếm, danh mục, đơn đã xem/mua nếu phù hợp), gom ưu đãi theo chủ đề và tăng khả năng quét nhanh bằng thứ bậc thị giác rõ ràng.<br><br>**Nhận xét:** Theo em, trang chủ có nhiều lối truy cập như ô tìm kiếm, danh mục và chương trình khuyến mãi. Tuy nhiên, cần phân cấp nội dung rõ ràng để khách hàng dễ nhận ra khu vực mình cần. |
| **2. Danh mục sản phẩm** | Thu hẹp tập sản phẩm từ ngành hàng rộng thành nhóm có liên quan để khách khám phá và so sánh. | Các trang danh mục trên Tiki được tổ chức theo ngành hàng và nhóm sản phẩm. Người dùng có thể điều hướng đến nhóm nhỏ hơn; tùy trang, có các bộ lọc như thương hiệu, khoảng giá, đánh giá hoặc dịch vụ giao hàng, cùng lựa chọn sắp xếp danh sách. | Cấu trúc phân cấp giúp khách hàng thu hẹp phạm vi sản phẩm; bộ lọc và sắp xếp giúp tìm những lựa chọn phù hợp hơn mà không phải xem lần lượt toàn bộ danh sách. | Khi danh mục có nhiều sản phẩm và tiêu chí lọc, người dùng có thể mất thời gian tìm bộ lọc phù hợp; nội dung giới thiệu dài hoặc thẻ sản phẩm trình bày thiếu đồng bộ có thể làm việc so sánh giá và đặc điểm trở nên khó khăn. | Đưa bộ lọc, sắp xếp và danh sách sản phẩm đến vị trí dễ nhận biết; cho phép thu gọn phần giới thiệu dài; chuẩn hóa cách trình bày hình ảnh, tên, giá bán, giá gốc, ưu đãi và đánh giá để khách hàng dễ quét và so sánh sản phẩm.<br><br>**Nhận xét:** Theo em, bộ lọc theo thương hiệu, giá và đánh giá giúp khách thu hẹp lựa chọn. Việc trình bày giá bán, ưu đãi và đánh giá nhất quán cũng sẽ giúp khách so sánh sản phẩm thuận tiện hơn. |
| **3. Chi tiết sản phẩm** | Cung cấp thông tin đủ để đánh giá một mặt hàng cụ thể và quyết định có mua hay không. | [Quan sát] Đã mở được trang sản phẩm từ danh mục; công cụ trích xuất trang không trả về nội dung chi tiết trong phiên này, nên chưa xác minh được đầy đủ các khối như biến thể, đánh giá, thông tin giao hàng hay nút mua. | [Quan sát giới hạn] Trang sản phẩm có URL riêng và được liên kết từ danh sách sản phẩm; chưa đủ dữ liệu để kết luận các tiện ích khác trên trang. | [Rủi ro UX] Nếu các thông tin ảnh hưởng quyết định mua (giá cuối, người bán, giao hàng, đổi trả, biến thể) nằm xa nhau hoặc khó thấy, khách có thể mất công tìm hiểu trước khi đặt hàng. Cần kiểm tra trực quan thêm, không phải khẳng định về Tiki hiện tại. | [Đề xuất AI] Nhóm các thông tin quyết định mua ở cùng vùng dễ quét; làm rõ giá/khuyến mãi, người bán, tồn kho, thời gian giao dự kiến, chính sách đổi trả và lựa chọn biến thể trước hành động thêm giỏ.<br><br>**Nhận xét:** Theo em, giá bán, mức giảm giá, thông tin giao hàng và nút mua hàng đều ảnh hưởng đến quyết định mua. Những thông tin này nên được bố trí dễ nhìn để khách không phải tìm kiếm qua nhiều khu vực. |
| **4. Tìm kiếm** | Giúp khách chuyển nhu cầu thành tập kết quả có thể duyệt, lọc và sắp xếp. | Tìm với từ khóa “iphone” hiển thị ô tìm kiếm, gợi ý từ khóa, bộ lọc (giao siêu tốc 2-3H, siêu rẻ, từ 4 sao, thuộc tính sản phẩm), sắp xếp “Phổ biến”, phân trang và thẻ kết quả có tên/giá/người bán. Có nội dung SEO dài phía dưới kết quả. | Gợi ý truy vấn giúp khám phá cách gọi khác; lọc và sắp xếp hỗ trợ thu hẹp lựa chọn; một số thẻ cho thấy người bán, giá và tín hiệu như lượt bán. | [Rủi ro UX] Truy vấn “iphone” có thể trả cả phụ kiện; nội dung biên tập dài trên trang kết quả khiến ranh giới giữa kết quả mua hàng và nội dung tham khảo kém rõ. | Cung cấp bộ lọc “chỉ sản phẩm đúng loại” hoặc phân nhóm điện thoại/phụ kiện; làm rõ nội dung tài trợ và giữ bộ lọc đang chọn dễ nhìn khi cuộn.<br><br>**Nhận xét:** Khi tìm từ khóa “iPhone”, kết quả có thể bao gồm cả phụ kiện. Theo em, phân nhóm điện thoại và phụ kiện rõ ràng hơn sẽ giúp khách tìm đúng loại sản phẩm nhanh hơn. |
| **5. Giỏ hàng** | Cho khách rà soát các sản phẩm đã chọn và chuẩn bị bước đặt hàng. | [Quan sát] Trang chủ có biểu tượng giỏ hàng với số 0 trong phiên khảo sát. URL /cart không tải được qua công cụ truy cập, nên chưa xác minh được nội dung giỏ, chỉnh số lượng, xóa sản phẩm, phí giao hàng hay bước thanh toán. | [Quan sát giới hạn] Biểu tượng kèm số lượng cho biết có điểm truy cập đến giỏ và trạng thái số món; nội dung trang giỏ chưa quan sát được. | [Rủi ro UX] Chưa xem được trang giỏ nên không kết luận thao tác cụ thể. Rủi ro cần đánh giá: tổng tiền, phí vận chuyển hoặc điều kiện ưu đãi chỉ hiện rõ ở bước muộn, gây bất ngờ trước khi đặt hàng. | [Đề xuất AI] Trong giỏ, trình bày rõ từng sản phẩm/biến thể/số lượng, giá từng món, tạm tính, phí giao và ưu đãi áp dụng; cập nhật tổng tiền ngay khi chỉnh sửa và cho phép quay lại mua sắm mà không mất lựa chọn.<br><br>**Nhận xét:** Theo em, việc hiển thị rõ sản phẩm đã chọn, số lượng, giảm giá và tổng tiền dự kiến sẽ giúp khách kiểm tra đơn hàng trước khi đặt. Đây là tiêu chí cải tiến trải nghiệm, không phải khẳng định Tiki đang thiếu những thông tin đó. |
