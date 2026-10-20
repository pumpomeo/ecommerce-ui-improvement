# Báo cáo Nhiệm vụ 1 – Khảo sát website thương mại điện tử

## 1. Thông tin chung về website tham khảo
- **Tên website:** Tiki
- **URL:** https://tiki.vn/
- **Nhóm sản phẩm hoặc dịch vụ kinh doanh:**
  - Sách và ấn phẩm văn hóa.
  - Thiết bị điện tử, công nghệ, điện thoại và máy tính bảng.
  - Thiết bị gia dụng và đời sống gia đình (dụng cụ nhà bếp, điện gia dụng).
  - Thời trang, phụ kiện và chăm sóc sắc đẹp.
  - Hàng tiêu dùng nhanh (FMCG) và bách hóa online (TikiNGON).
- **Khách hàng mục tiêu:**
  - Người tiêu dùng trẻ, học sinh, sinh viên và nhân viên văn phòng tại các đô thị lớn tại Việt Nam.
  - Nhóm khách hàng có thói quen mua sắm trực tuyến thường xuyên, ưu tiên hàng chính hãng (Tiki Trading) và dịch vụ giao hàng nhanh (TikiNOW 2h).
- **Các chức năng mua sắm chính:**
  - Tìm kiếm sản phẩm với gợi ý từ khóa và bộ lọc chi tiết (giá, thương hiệu, đánh giá, nơi giao).
  - Duyệt cây danh mục phân cấp đa tầng.
  - Xem chi tiết sản phẩm: hình ảnh, video, thông số kỹ thuật và đánh giá thực tế của người mua.
  - Giỏ hàng phân nhóm theo gian hàng (shop), hỗ trợ chọn thanh toán từng phần.
  - Áp dụng đồng thời nhiều tầng mã giảm giá (mã sàn, mã shop, ưu đãi vận chuyển).
  - Thanh toán đa kênh: thẻ ngân hàng, ví điện tử (MoMo, ZaloPay), chuyển khoản VietQR, mua trước trả sau và thanh toán khi nhận hàng (COD).

## 2. Bảng khảo sát giao diện và chức năng 5 khu vực

| Khu vực | Chức năng đang được cung cấp | Điểm hợp lý trong thiết kế | Điểm có thể cải thiện | Đề xuất cải tiến và lý do |
|---|---|---|---|---|
| **Trang chủ** | - Banner trượt (carousel) quảng bá chương trình khuyến mãi lớn.<br>- Lối tắt danh mục nổi bật dạng biểu tượng tròn.<br>- Cụm Flash Sale kèm đồng hồ đếm ngược.<br>- Khu vực gợi ý hôm nay theo hành vi duyệt web. | - Hình ảnh banner rõ nét, màu sắc bắt mắt.<br>- Đồng hồ đếm ngược và thanh tiến độ đã bán tạo cảm giác gấp rút, thúc đẩy quyết định mua. | - Mật độ thông tin trên điện thoại khá dày; các nhãn quảng cáo dán đè lên ảnh sản phẩm làm che khuất góc nhìn.<br>- Banner trượt chuyển cảnh tự động khá nhanh. | **Quy hoạch lại vị trí nhãn:** Đưa các nhãn khuyến mãi lên góc trên hoặc đặt dưới tiêu đề.<br>*Lý do:* Giúp khách hàng nhìn rõ hình ảnh sản phẩm mà không bị rối mắt. |
| **Danh mục sản phẩm** | - Đường dẫn phân cấp (Breadcrumb).<br>- Cột lọc thuộc tính bên trái (thương hiệu, khoảng giá, TikiNOW 2H, đánh giá sao).<br>- Tùy chọn sắp xếp (phổ biến, bán chạy, giá tăng/giảm).<br>- Các nhánh danh mục con. | - Bộ lọc cột trái trên máy tính đầy đủ, phản hồi nhanh khi chọn.<br>- Các nhánh con giúp đi nhanh đến nhóm sản phẩm cụ thể. | - Phần đầu trang danh mục dành diện tích đáng kể cho bài viết giới thiệu/SEO dài, người mua phải cuộn nhiều mới tới danh sách sản phẩm.<br>- Trên điện thoại, tên sản phẩm dài ngắn khác nhau làm thẻ bị so le chiều cao. | **Đưa sản phẩm lên đầu trang và thu gọn bài viết giới thiệu:** Dùng thẻ `<details>` để khách hàng có thể chủ động mở xem khi cần.<br>*Lý do:* Giúp người mua tiếp cận và so sánh danh sách sản phẩm ngay lập tức. |
| **Chi tiết sản phẩm** | - Thư viện ảnh phóng to và video sản phẩm.<br>- Bảng giá: giá bán, giá niêm yết, tỷ lệ giảm giá.<br>- Tùy chọn phân loại biến thể (màu sắc, kích cỡ).<br>- Tóm tắt phí vận chuyển và thời gian giao hàng.<br>- Nút "Chọn mua" và "Mua trước trả sau". | - Khối mua hàng bên phải nổi bật; thông tin tồn kho rõ ràng.<br>- Phần đánh giá có phân loại sao và hiển thị hình chụp thực tế giúp tăng độ tin cậy. | - Độ tương phản giữa giá khuyến mãi và giá gốc chưa đủ mạnh; chưa hiển thị trực quan số tiền tiết kiệm được.<br>- Nhãn gian hàng chính hãng chưa được định vị rõ nét tại thẻ. | **Thiết kế lại cụm giá tương phản cao:** Dùng màu đỏ cỡ lớn cho giá bán, bổ sung nhãn "Tiết kiệm [Số tiền]₫" bên cạnh giá gốc gạch ngang.<br>*Lý do:* Giúp khách hàng nhận biết ngay lợi ích tài chính để đưa ra quyết định mua sắm. |
| **Tìm kiếm** | - Ô tìm kiếm cố định trên thanh điều hướng.<br>- Tự động gợi ý từ khóa (autocomplete) khi nhập liệu.<br>- Lưu lịch sử tìm kiếm và hiển thị từ khóa thịnh hành.<br>- Bộ lọc kết quả tìm kiếm. | - Ô tìm kiếm đặt ở vị trí trung tâm, dễ tiếp cận.<br>- Gợi ý từ khóa nhanh, hỗ trợ nhận diện tiếng Việt không dấu. | - Trang kết quả đôi khi bị chèn các sản phẩm tài trợ (Ads) không sát với nhu cầu tìm kiếm.<br>- Trên điện thoại, thiếu các nút chip lọc nhanh cố định khi cuộn. | **Bổ sung các chip lọc nhanh dạng cuộn ngang:** Đặt các nút lọc nhanh ("Chính hãng", "Giao 2H", "Dưới 500k") ngay dưới thanh tìm kiếm di động.<br>*Lý do:* Rút ngắn số lần chạm của người dùng trên màn hình cảm ứng. |
| **Giỏ hàng** | - Phân nhóm sản phẩm theo từng nhà bán hàng.<br>- Checkbox chọn/bỏ chọn từng sản phẩm để thanh toán theo đợt.<br>- Tăng/giảm số lượng sản phẩm trực tiếp.<br>- Ô nhập mã giảm giá sàn và voucher shop.<br>- Tóm tắt chi phí (tạm tính, giảm giá, tổng tiền) và nút "Mua hàng". | - Hỗ trợ thanh toán linh hoạt từng phần theo từng shop.<br>- Phân tách rõ ràng giữa các gian hàng giúp người mua dễ kiểm soát phí vận chuyển. | - Trên điện thoại, nút "Mua hàng" và khối tổng tiền nằm ở cuối trang; nếu danh sách hàng dài, khách phải cuộn nhiều mới tới nút đặt hàng. | **Thiết kế thanh tóm tắt giỏ hàng cố định dưới đáy màn hình:** Giữ cố định tổng tiền và nút bấm thanh toán ở mép dưới cùng màn hình khi cuộn.<br>*Lý do:* Thao tác chốt đơn nhanh chóng chỉ với một chạm ngón tay cái ở bất kỳ vị trí cuộn nào. |

## 3. Lựa chọn vấn đề cải tiến
Từ kết quả khảo sát trên, khu vực thẻ sản phẩm và bố cục danh mục sản phẩm là thành phần xuất hiện với tần suất cao nhất và tác động trực tiếp đến quyết định nhấp chuột của người dùng.

Do đó, bài tập lựa chọn cải tiến: **"Thiết kế lại Thẻ sản phẩm và Bố cục danh mục sản phẩm Dụng Cụ Nhà Bếp bằng HTML5 và CSS3"**, tập trung giải quyết:
1. Đưa cây danh mục và bộ lọc lên đầu trang; thu gọn bài viết giới thiệu dài bằng thẻ `<details>`.
2. Quy hoạch lại nhãn (badges) lên góc trên để không che khuất hình ảnh sản phẩm 1:1.
3. Tăng độ tương phản hiển thị giá bán và làm nổi bật số tiền tiết kiệm cụ thể.
4. Cố định 2 dòng tên sản phẩm bằng `-webkit-line-clamp: 2` và tối ưu nút mua hàng đạt chuẩn thao tác chạm ($\ge 40\text{px}$) trên thiết bị di động.
