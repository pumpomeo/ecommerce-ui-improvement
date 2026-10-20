# BÁO CÁO NHIỆM VỤ 1: KHẢO SÁT WEBSITE THƯƠNG MẠI ĐIỆN TỬ

* **Môn học:** Phát triển ứng dụng WEB/TMĐT
* **Giảng viên hướng dẫn:** TS Nguyễn Mạnh Tuấn (tuannm@ueh.edu.vn)
* **Sinh viên thực hiện:** Hoàng Anh Thi
* **MSSV:** 31241027492
* **Tài khoản GitHub:** [pumpomeo](https://github.com/pumpomeo)
* **Email trường:** `thihoang.31241027492@st.ueh.edu.vn`

---

## 1. Thông tin chung về Website tham khảo (Bước 1)

* **Tên website:** Tiki
* **Đường dẫn truy cập (URL):** [https://tiki.vn](https://tiki.vn)
* **Nhóm sản phẩm / dịch vụ kinh doanh:**
  * Sách quốc văn, ngoại văn và giáo trình học thuật.
  * Thiết bị điện tử - công nghệ (điện thoại, máy tính bảng, laptop, tai nghe, phụ kiện).
  * Đồ gia dụng & đời sống gia đình (dụng cụ nhà bếp, thiết bị điện gia dụng, nội thất).
  * Làm đẹp, sức khỏe & thời trang.
  * Hàng tiêu dùng nhanh (FMCG) và bách hóa giao nhanh (TikiNGON).
* **Khách hàng mục tiêu:**
  * Người tiêu dùng trẻ, học sinh - sinh viên và nhân viên văn phòng tại các khu đô thị lớn tại Việt Nam.
  * Nhóm khách hàng yêu thích sự tiện lợi, có thói quen mua sắm trực tuyến thường xuyên, đặt ưu tiên hàng đầu vào chất lượng hàng chính hãng (*Tiki Trading*) và tốc độ vận chuyển hỏa tốc (*TikiNOW 2h*).
* **Các chức năng mua sắm chính:**
  * Tìm kiếm sản phẩm thông minh với bộ lọc đa tiêu chí (giá, nơi bán, thương hiệu, đánh giá).
  * Cây danh mục ngành hàng đa tầng.
  * Chi tiết sản phẩm: thư viện ảnh/video, thông số kỹ thuật, đánh giá kèm hình ảnh thực tế từ người đã mua hàng.
  * Giỏ hàng linh hoạt: gom nhóm sản phẩm theo nhà bán (shop), chọn thanh toán từng phần.
  * Áp dụng mã giảm giá đa tầng (Mã sàn + Mã gian hàng + Ưu đãi vận chuyển Freeship).
  * Đa dạng kênh thanh toán: Thẻ quốc tế/ATM, Ví điện tử (MoMo, ZaloPay, Viettel Money), Chuyển khoản VietQR, Mua trước trả sau và Thanh toán khi nhận hàng (COD).

---

## 2. Bảng khảo sát giao diện và chức năng 5 khu vực trọng yếu (Bước 2)

Quá trình khảo sát được thực hiện trực tiếp trên trình duyệt bằng cách đóng vai người mua sắm thực tế, kiểm tra chi tiết 5 khu vực theo đúng yêu cầu đề bài:

| STT | Khu vực khảo sát | Chức năng đang được cung cấp | Điểm hợp lý trong thiết kế | Điểm có thể cải thiện | Đề xuất cải tiến và lý do |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Trang chủ** | - Banner trượt xoay vòng (carousel) quảng bá khuyến mãi lớn.<br>- Lối tắt danh mục nổi bật dạng icon tròn.<br>- Cụm "Flash Sale" kèm thanh đếm ngược thời gian và thanh trạng thái bán lẻ.<br>- Khu vực "Gợi ý hôm nay" theo hành vi duyệt web. | - Hình ảnh banner sắc nét, phong cách thiết kế hiện đại.<br>- Đồng hồ đếm ngược và thanh tiến độ "Đã bán X%" tạo hiệu ứng tâm lý khan hiếm và gấp rút (FOMO), kích thích người dùng bấm xem. | - Mật độ thông tin trên thiết bị di động quá dày; các nhãn quảng cáo (Freeship, Rẻ vô địch, Đổi trả) dán chồng chéo lên ảnh sản phẩm làm che khuất góc nhìn.<br>- Banner trượt chuyển cảnh hơi nhanh gây xao nhãng. | **Quy hoạch lại vị trí nhãn (Badges):** Tách nhãn khuyến mãi ra khỏi vùng trung tâm của ảnh (đưa lên góc trên hoặc đặt dưới tiêu đề).<br>*Lý do:* Giúp người mua nhìn rõ kiểu dáng, màu sắc sản phẩm mà không bị rối mắt. |
| **2** | **Danh mục sản phẩm** *(Khảo sát ngành hàng Dụng Cụ Nhà Bếp)* | - Thanh điều hướng phân cấp (Breadcrumb).<br>- Cột lọc thuộc tính bên trái (Thương hiệu, Giá, Dịch vụ TikiNOW 2h, Đánh giá sao).<br>- Tùy chọn sắp xếp (Phổ biến, Bán chạy, Giá tăng/giảm).<br>- Danh sách nhánh con (ấm nước, hộp đựng, dao kéo, nồi chảo). | - Bộ lọc cột trái trên máy tính rất chi tiết, phản hồi nhanh khi tick chọn.<br>- Các nhánh con giúp đi nhanh đến loại sản phẩm cụ thể mong muốn. | - Phần đầu trang danh mục dành diện tích quá lớn cho bài viết giới thiệu/SEO dài dòng, người mua muốn so sánh sản phẩm phải cuộn chuột nhiều mới tới danh sách hàng.<br>- Trên điện thoại, tên sản phẩm dài ngắn không đều làm thẻ bị so le chiều cao. | **Đưa danh sách sản phẩm và bộ lọc lên đầu trang; Thu gọn bài viết giới thiệu:** Dùng thẻ `<details>` để người dùng có thể chủ động bấm xem thêm khi cần.<br>*Lý do:* Giảm thiểu thao tác cuộn, tập trung vào hành vi duyệt và so sánh sản phẩm của khách. |
| **3** | **Chi tiết sản phẩm** | - Slider ảnh phóng to và video review thực tế.<br>- Bảng giá: giá bán, giá niêm yết, % giảm giá.<br>- Bảng tùy chọn phân loại (SKU: màu sắc, dung tích).<br>- Tóm tắt phí vận chuyển và thời gian giao dự kiến theo địa chỉ.<br>- Nút "Chọn mua" và "Mua trước trả sau". | - Vùng mua hàng bên phải nổi bật; thông tin tồn kho minh bạch.<br>- Phần đánh giá khách hàng (Reviews) có lọc theo số sao và hiển thị ảnh chụp thật từ người mua, tạo độ tin cậy xã hội cao. | - Độ tương phản giữa giá bán và giá gốc chưa đủ mạnh; thông tin người mua thực sự tiết kiệm được bao nhiêu tiền (số tiền cụ thể) chưa được làm nổi bật.<br>- Nhãn gian hàng Tiki Trading chưa được định vị rõ nét tại thẻ. | **Thiết kế lại cụm hiển thị giá tương phản cao:** Dùng màu đỏ cỡ lớn cho giá bán, bổ sung tag nền đỏ nhạt "Tiết kiệm [Số tiền]₫" bên cạnh giá gốc gạch ngang.<br>*Lý do:* Tác động trực tiếp vào tâm lý tài chính, gia tăng tỷ lệ chuyển đổi chốt đơn. |
| **4** | **Tìm kiếm** *(Thử nghiệm từ khóa "iphone", "nồi chiên")* | - Ô tìm kiếm cố định (Sticky header) trên thanh điều hướng.<br>- Gợi ý từ khóa tự động (Autocomplete) khi nhập liệu.<br>- Lưu lịch sử tìm kiếm gần nhất và hiển thị từ khóa thịnh hành.<br>- Bộ lọc nhanh và danh sách kết quả dạng lưới. | - Vị trí thanh tìm kiếm trung tâm, dễ thấy ngay khi vào trang.<br>- Gợi ý từ khóa thông minh, hỗ trợ nhận diện tiếng Việt không dấu. | - Trang kết quả đôi khi bị chèn các sản phẩm tài trợ (Ads) không khớp sát với từ khóa tìm kiếm.<br>- Trên di động, thiếu thanh chip lọc nhanh (Quick filter chips) cố định khi cuộn. | **Bổ sung các chip lọc nhanh dạng cuộn ngang:** Đặt các nút lọc nhanh ("Chính hãng", "Giao 2H", "Dưới 500k") ngay dưới thanh tìm kiếm di động.<br>*Lý do:* Rút ngắn số lần chạm của người dùng trên màn hình cảm ứng, giúp tìm ra món hàng nhanh hơn. |
| **5** | **Giỏ hàng** | - Phân nhóm sản phẩm theo từng nhà bán (Shop).<br>- Checkbox tick chọn/bỏ chọn từng sản phẩm để thanh toán theo đợt.<br>- Tăng/giảm số lượng sản phẩm trực tiếp.<br>- Ô nhập mã giảm giá Tiki và voucher nhà bán.<br>- Tóm tắt chi phí (Tạm tính, Giảm giá, Tổng tiền) và nút "Mua hàng". | - Hỗ trợ thanh toán linh hoạt từng phần theo từng shop.<br>- Phân tách rõ ràng giữa các gian hàng giúp người mua dễ kiểm soát phí vận chuyển độc lập. | - Trên điện thoại, nút "Mua hàng" và khối tổng tiền nằm ở tận đáy trang; nếu giỏ hàng có nhiều sản phẩm, khách phải cuộn rất dài mới đến được nút đặt hàng. | **Thiết kế thanh tóm tắt giỏ hàng cố định dưới đáy màn hình (Sticky Bottom Bar):** Giữ cố định tổng tiền và nút bấm thanh toán ở mép dưới cùng màn hình khi cuộn.<br>*Lý do:* Thao tác chốt đơn nhanh chóng chỉ với một chạm ngón tay cái ở bất kỳ vị trí cuộn nào. |

---

## 3. Lựa chọn vấn đề cải tiến cho Nhiệm vụ 3

Từ kết quả khảo sát thực tế trên, khu vực **Thẻ sản phẩm (Product Card)** và **Bố cục danh mục sản phẩm (Category Grid Layout)** là thành phần xuất hiện nhiều nhất và quyết định trực tiếp tới tỷ lệ nhấp chuột (CTR) của khách hàng.

Do đó, đề tài cải tiến được lựa chọn là:
> **"Tái thiết kế Thẻ sản phẩm và Bố cục danh mục sản phẩm Dụng Cụ Nhà Bếp thích ứng đa thiết bị (Responsive) bằng HTML5 và CSS3"**, tập trung giải quyết:
> 1. Đưa cây danh mục và bộ lọc lên đầu trang, thu gọn bài viết SEO dài bằng thẻ `<details>`.
> 2. Quy hoạch lại Badge khuyến mãi không che khuất hình ảnh 1:1.
> 3. Tăng độ tương phản hiển thị giá bán và làm nổi bật số tiền tiết kiệm cụ thể.
> 4. Cố định 2 dòng tên sản phẩm bằng `-webkit-line-clamp: 2` và tối ưu nút mua hàng chuẩn chạm ngón tay cái ($\ge 42\text{px}$) trên thiết bị di động.
