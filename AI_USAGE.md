# AI Usage Log

Nhật ký sử dụng AI cho hai bài tập: **Buổi 1** (khảo sát và dựng giao diện) và **Buổi 2** (HTML5 & CSS3, cải tiến khu vực danh sách sản phẩm và thẻ sản phẩm).

## 1. Công cụ AI

- **Tên công cụ Buổi 1:** Antigravity / Gemini 3.8 Flash (High) – https://antigravity.google/
- **Tên công cụ Buổi 2:** Claude (Anthropic) – https://claude.ai/

AI chỉ hỗ trợ phân tích, giải thích khái niệm và đề xuất đoạn mã. Mọi đề xuất đều được tự mở trên trình duyệt (Chrome, DevTools ở 1366 px, 768 px, 390 px) để kiểm tra trước khi đưa vào bài.

## 2. Buổi 2 – Các prompt đã dùng

Mỗi prompt bám theo gợi ý của đề; phần trong ngoặc vuông `[...]` là mã đã dán vào prompt. Mã nguồn: [`index.html`](https://github.com/pumpomeo/ecommerce-ui-improvement/blob/main/index.html) · [`css/style.css`](https://github.com/pumpomeo/ecommerce-ui-improvement/blob/main/css/style.css).

### Prompt 1 – Phân tích mã nguồn hiện tại

```text
Tôi đang làm bài tập cá nhân môn Phát triển ứng dụng thương mại điện tử.
Trong Buổi 1, tôi đã khảo sát một website TMĐT và tạo một giao diện cải tiến bằng HTML/CSS.
Đây là mã HTML hiện tại:
[đã dán toàn bộ nội dung index.html của Buổi 1: header, aside bộ lọc, section sản phẩm với div.product-grid và 6 thẻ article, footer]
Đây là mã CSS hiện tại nếu có:
[đã dán toàn bộ css/style.css của Buổi 1]
Hãy giúp tôi:
1. Xác định những thành phần HTML đã có.
2. Chỉ ra các thành phần HTML còn thiếu hoặc chưa hợp lý.
3. Nêu ba vấn đề về cấu trúc HTML hoặc trình bày.
4. Đề xuất cách cải thiện bằng kiến thức HTML5 và CSS3 cơ bản.
5. Giải thích thứ tự nên thực hiện các cải tiến.
Chưa viết lại toàn bộ mã nguồn.
Không tạo website mới.
Hãy giúp tôi hiểu mã hiện tại trước khi sửa.
```

**Kết quả AI (tóm tắt):** AI liệt kê các thành phần đã có như bảng ở mục 1.3; chỉ ra các thành phần còn thiếu hoặc chưa hợp lý (thứ bậc tiêu đề, thẻ del cho giá gốc, :focus-visible, số sao, nhãn nút yêu thích); đề xuất thứ tự cải tiến: HTML → selector và Box Model → Flexbox và Grid → hover/focus → kiểm thử.

**Phần em kiểm tra / tự điều chỉnh:** Em không chấp nhận ngay các nhận xét của AI mà tự đối chiếu từng vấn đề với mã nguồn (ghi rõ số dòng trong index.html và css/style.css), ví dụ tìm trong css/style.css và xác nhận chưa có quy tắc :focus-visible nào. Giả thuyết repeat(3, minmax(0, 1fr)) của AI được em kiểm tra riêng ở Thử nghiệm 4 (Bước 6).

### Prompt 2 – Kiểm tra cấu trúc HTML5

```text
Tôi đang học HTML5 và muốn cải thiện cấu trúc HTML của bài tập Buổi 1.
Đây là mã HTML hiện tại:
[đã dán toàn bộ nội dung index.html; khu vực trọng tâm là div.product-grid và 6 article.product-card, dòng 264–629]
Hãy hướng dẫn tôi:
1. Xác định các phần tử HTML đang được sử dụng.
2. Kiểm tra cách sử dụng header, nav, main, section, article và footer nếu có.
3. Kiểm tra thứ bậc tiêu đề h1, h2, h3.
4. Kiểm tra cách sử dụng img, alt và a.
5. Phát hiện các thẻ chưa đóng hoặc lồng nhau chưa hợp lý.
6. Đề xuất cách sửa phù hợp với nội dung hiện tại.
Hãy phân biệt lỗi cần sửa và đề xuất cải thiện.
Không thêm phần tử HTML chỉ để làm mã nguồn dài hơn.
Không viết lại toàn bộ website.
Giải thích lý do của từng thay đổi.
```

**Kết quả AI (tóm tắt):** AI chỉ ra tên sản phẩm bị nhảy cấp tiêu đề từ h1 xuống h3, giá gốc dùng span thay cho del, aria-label đặt trên div không có role, ký hiệu ₫ viết không thống nhất; đồng thời tách riêng các đề xuất cải thiện (aria-hidden cho icon, nhãn nút yêu thích, thuộc tính title).

**Phần em kiểm tra / tự điều chỉnh:** Em chạy script phân tích cú pháp HTML để kiểm tra thẻ đóng/mở thay vì tin hoàn toàn vào nhận xét; chỉ sửa 4 lỗi (L1–L4), các đề xuất D1–D3 chỉ ghi nhận. Em không đổi lưới sản phẩm sang ul/li vì phải bọc thêm 6 thẻ li mà không bổ sung nhiều ý nghĩa, đúng yêu cầu "không thêm phần tử HTML chỉ để mã nguồn dài hơn".

### Prompt 3 – Tạo CSS cơ bản

```text
Tôi có website HTML5 từ bài tập Buổi 1.
Cấu trúc thư mục:
[đã dán cấu trúc thư mục ở mục 3.4: index.html, css/style.css, images/kitchen-1.jpg … kitchen-6.jpg, README.md, AI_USAGE.md]
Đoạn HTML:
[đã dán phần <head> (có <link rel="stylesheet" href="css/style.css">) và section.catalog-main-content]
Hãy hướng dẫn tôi:
1. Tạo và liên kết file css/style.css.
2. Định dạng font chữ, màu chữ và màu nền.
3. Thiết lập margin và các quy tắc cơ bản cho body.
4. Đảm bảo hình ảnh không vượt quá chiều rộng phần tử chứa.
5. Kiểm tra đường dẫn CSS có chính xác không.
Chỉ tạo CSS cần thiết cho bài tập.
Không sử dụng Bootstrap hoặc Tailwind CSS.
Giải thích từng nhóm thuộc tính và hướng dẫn tôi cách kiểm tra bằng trình duyệt.
```

**Kết quả AI (tóm tắt):** AI giải thích các nhóm thuộc tính: biến :root, font-family, màu chữ và màu nền, margin/padding, box-sizing, line-height, max-width: 100% cho ảnh; hướng dẫn kiểm tra đường dẫn CSS bằng tab Network của DevTools.

**Phần em kiểm tra / tự điều chỉnh:** Em đối chiếu với css/style.css thật của Buổi 1 và xác nhận mọi yêu cầu đã đạt; thử sửa tạm href="css/style.css" thành href="style.css" để tận mắt thấy lỗi ERR_FILE_NOT_FOUND, trang mất định dạng và style.css hiện màu đỏ trong tab Network, sau đó sửa lại đường dẫn đúng.

### Prompt 4 – Thực hành selector và Box Model

```text
Tôi muốn thực hành CSS selector và Box Model trên một thẻ sản phẩm trong website của mình.
HTML hiện tại:
[đã dán article.product-card số 1 "Dụng cụ xay tỏi ớt Lock&Lock CKS321GRN", index.html dòng 267–327]
Hãy hướng dẫn tôi:
1. Sử dụng element selector và class selector.
2. Sử dụng descendant selector khi phù hợp.
3. Điều chỉnh margin, padding và border.
4. Sử dụng border-radius để bo góc.
5. Định dạng tên và giá sản phẩm.
6. Định dạng liên kết thành nút thao tác đơn giản.
Hãy giải thích sự khác nhau giữa margin và padding.
Giải thích tác dụng của box-sizing: border-box.
Chỉ đưa ra phần CSS cần thiết.
Không thay đổi nội dung hoặc tạo lại toàn bộ HTML.
```

**Kết quả AI (tóm tắt):** AI hướng dẫn dùng .product-card, .product-title, .price-current (class selector), .product-media img (descendant selector), padding/border/border-radius cho thẻ; giải thích margin là khoảng cách bên ngoài viền, padding là bên trong viền, và border-box tính cả padding và border vào width.

**Phần em kiểm tra / tự điều chỉnh:** Em đối chiếu từng ví dụ với css/style.css hiện có thay vì chép lại; tự phát hiện nút yêu thích bị thu còn 28×28 px và không có viền trên màn hình ≤ 480 px nên tự thêm border và tăng lên 36×36 px. Em chọn không tăng lên 44 px vì thẻ ở 390 px chỉ rộng khoảng 180 px, nút quá lớn sẽ che ảnh.

### Prompt 5 – Thực hành Flexbox

```text
Tôi đang học CSS3 và muốn thực hành Flexbox trên một khu vực của website thương mại điện tử.
Đây là HTML hiện tại:
[đã dán div.product-rating gồm div.stars, span.rating-score và span.sold-count của thẻ sản phẩm số 1]
Hãy hướng dẫn tôi:
1. Xác định phần tử cha cần sử dụng display: flex.
2. Căn chỉnh các phần tử bằng justify-content.
3. Căn chỉnh theo trục còn lại bằng align-items.
4. Tạo khoảng cách bằng gap.
5. So sánh kết quả khi thay đổi các giá trị của justify-content.
Hãy đưa ra một đoạn CSS ngắn phù hợp với HTML.
Giải thích từng thuộc tính và kết quả mong đợi.
Không sử dụng framework CSS.
Không viết lại toàn bộ giao diện.
```

**Kết quả AI (tóm tắt):** AI xác định .product-rating là phần tử cha cần display: flex, đề xuất align-items: center và gap, giải thích kết quả của flex-start, center và space-between với ba phần tử con.

**Phần em kiểm tra / tự điều chỉnh:** Em thử từng giá trị trên trang thật ở 1366 px. Với space-between, điểm "4.9" bị đẩy ra giữa, tách rời khỏi cụm sao; em chọn flex-start kết hợp margin-left: auto cho .sold-count để chia thành hai nhóm mà không thêm phần tử HTML bọc ngoài, và bỏ dấu "-" trước "Đã bán".

### Prompt 6 – Thực hành CSS Grid

```text
Tôi đã có một danh sách sản phẩm bằng HTML.
Đây là mã HTML hiện tại:
[đã dán div.product-grid cùng 6 article.product-card, index.html dòng 264–629]
Hãy hướng dẫn tôi sử dụng CSS Grid để:
1. Bố trí danh sách thành hai cột.
2. Điều chỉnh khoảng cách giữa các sản phẩm.
3. Giữ hình ảnh hiển thị đúng tỷ lệ.
4. Thay đổi số cột và quan sát kết quả.
5. Giải thích grid-template-columns, repeat và gap.
6. Giải thích tác dụng của object-fit: cover.
Chỉ viết CSS cần thiết cho danh sách hiện có.
Không sử dụng Bootstrap hoặc Tailwind CSS.
Giải thích cách kiểm tra kết quả trên trình duyệt.
```

**Kết quả AI (tóm tắt):** AI đề xuất display: grid với grid-template-columns: repeat(N, minmax(0, 1fr)), gap, aspect-ratio: 1 / 1 cho khung ảnh và object-fit: cover; giải thích repeat, fr, gap và cách đổi số cột để quan sát.

**Phần em kiểm tra / tự điều chỉnh:** Em đối chiếu với .product-grid hiện có (repeat(3, 1fr), gap: 16px) và làm bốn thử nghiệm: đổi số cột 3 → 2, bỏ display: grid, bỏ object-fit: cover, và chèn chuỗi dài để kiểm tra minmax(0, 1fr). Kết quả thử nghiệm cho thấy giả thuyết minmax không đúng với bài này vì .product-card có overflow: hidden, nên em giữ nguyên repeat(3, 1fr).

### Prompt 7 – Bổ sung hiệu ứng CSS

```text
Tôi muốn bổ sung hiệu ứng hover và focus cho một nút bấm hoặc liên kết trong website.
Đây là HTML và CSS hiện tại:
[đã dán HTML của nút .btn-add-cart, .btn-wishlist, liên kết .product-title a và các quy tắc :hover, transition trong css/style.css]
Hãy hướng dẫn tôi:
1. Tạo hiệu ứng hover nhẹ.
2. Sử dụng transition để tạo chuyển đổi mượt.
3. Bổ sung focus-visible để hỗ trợ điều hướng bằng bàn phím.
4. Đảm bảo màu chữ và màu nền dễ nhìn.
5. Không làm thay đổi bố cục quá nhiều.
Hãy chỉ đưa ra phần CSS cần thêm hoặc sửa.
Giải thích từng thuộc tính và cách kiểm tra.
```

**Kết quả AI (tóm tắt):** AI đề xuất :focus-visible với outline, outline-offset và box-shadow trắng cho hai loại nút; đổi màu và gạch chân cho liên kết tên sản phẩm; giải thích sự khác nhau giữa :hover và :focus-visible.

**Phần em kiểm tra / tự điều chỉnh:** Em duyệt trang bằng phím Tab và đo độ tương phản màu. Chữ #0b74e5 trên nền #e8f3fd chỉ đạt 4.02:1, thấp hơn 4.5:1 của WCAG AA nên em đổi sang #085ec0 (5.54:1). Em bỏ màu đỏ khi focus của nút yêu thích vì màu đỏ đã là trạng thái "đã yêu thích". Với tên sản phẩm, em dùng gạch chân và nền xanh nhạt thay cho outline vì overflow: hidden của .product-title cắt mất outline.

### Prompt 8 – Nhờ AI hỗ trợ kiểm tra lỗi

```text
Tôi đã hoàn thành một phần giao diện website TMĐT bằng HTML5 và CSS3.
Đây là mã nguồn:
[đã dán div.header-inner.container trong index.html và các quy tắc .container, .header-inner trong css/style.css, kèm @media (max-width: 768px) và @media (max-width: 480px)]
Tôi nhận thấy vấn đề sau:
[Ở chiều rộng 768 px, logo "tiki" dính sát mép trái và nút giỏ hàng dính sát mép phải màn hình; ở 1366 px và 390 px thì không bị]
Hãy giúp tôi:
1. Xác định nguyên nhân có thể gây ra lỗi.
2. Chỉ ra thuộc tính hoặc phần tử cần kiểm tra.
3. Đề xuất cách sửa ít thay đổi nhất.
4. Giải thích vì sao cách sửa có thể giải quyết vấn đề.
5. Đề xuất cách kiểm tra sau khi sửa.
Không viết lại toàn bộ mã nguồn.
Phân biệt nguyên nhân đã xác định và giả thuyết cần kiểm tra.
```

**Kết quả AI (tóm tắt):** AI chỉ ra div.header-inner có cả hai class header-inner và container; quy tắc padding: 10px 0 trong @media (max-width: 768px) ghi đè padding-left, padding-right: 20px của .container; đề xuất chỉ đặt lề trên/dưới và cách kiểm tra lại bằng DevTools ở 768 px.

**Phần em kiểm tra / tự điều chỉnh:** Em mở Chrome DevTools ở 768 px để xác nhận lỗi và kiểm tra vì sao ở 390 px lỗi không xuất hiện (quy tắc .container ở ≤ 480 px được viết sau nên đặt lại lề). Em chọn cách sửa ít thay đổi nhất là thay padding: 10px 0 bằng padding-bottom: 10px, rồi chụp ảnh header trước và sau khi sửa.

### Prompt 9 – Kiểm tra README

```text
Tôi đang hoàn thiện README.md cho bài tập cá nhân Buổi 2 của môn Phát triển ứng dụng TMĐT.
Bài tập tiếp tục phát triển website từ Buổi 1.
Tôi đã thực hành HTML5, CSS selector, Box Model và Flexbox hoặc CSS Grid ở mức cơ bản.
Hãy đề xuất cấu trúc README ngắn gọn gồm:
1. Giới thiệu bài tập.
2. Website tham khảo và khu vực đã cải tiến.
3. Những kỹ thuật HTML5/CSS3 đã thực hành.
4. Hướng dẫn chạy website.
5. Những thay đổi tôi đã thực hiện.
6. Công cụ AI đã sử dụng và cách tôi kiểm tra kết quả.
7. Đường dẫn repository và website nếu đã triển khai.
Không tự bịa thông tin về dự án.
Sử dụng chỗ trống cho các thông tin tôi chưa cung cấp.
```

**Kết quả:** README có đủ 7 mục theo prompt, bổ sung thêm bảng kiểm thử và phần AI vì đề cho phép gộp báo cáo kiểm thử và báo cáo sử dụng AI vào README.md. Thông tin nào chưa có (tên công cụ AI) để trong ngoặc vuông, không tự bịa. Link repository và GitHub Pages được điền đúng của em.

## 3. Bảng tổng hợp

| # | Prompt | Kết quả AI | Phần em kiểm tra / tự điều chỉnh |
|---|---|---|---|
| 1 | Phân tích mã hiện tại (1.2) | Liệt kê thành phần, các thành phần thiếu/chưa hợp lý, thứ tự cải tiến | Tự đối chiếu từng vấn đề với số dòng trong mã nguồn; kiểm tra giả thuyết minmax ở Bước 6 |
| 2 | Kiểm tra HTML5 (2.2) | Nhảy cấp tiêu đề, span → del, role cho cụm sao, thống nhất ký hiệu ₫ | Chạy script kiểm tra thẻ đóng/mở; chỉ sửa 4 lỗi, không đổi lưới sang ul/li |
| 3 | CSS cơ bản (3.2) | Giải thích nhóm thuộc tính, cách kiểm tra Network | Cố ý sửa sai đường dẫn để thấy lỗi thật rồi sửa lại |
| 4 | Selector và Box Model (4.2) | Giải thích margin/padding/border-box, ví dụ selector | Đối chiếu với CSS thật; tự chỉnh nút yêu thích 28 px → 36 px, không dùng 44 px |
| 5 | Flexbox (5.2) | .product-rating dùng display: flex, so sánh justify-content | Thử flex-start, center, space-between; chọn margin-left: auto |
| 6 | CSS Grid (6.2) | repeat, gap, aspect-ratio, object-fit; đề xuất minmax(0, 1fr) | Làm 4 thử nghiệm; giữ repeat(3, 1fr) vì minmax không cần thiết |
| 7 | Hover/focus (7.2) | transition, :hover, :focus-visible | Duyệt bằng phím Tab; đổi #0b74e5 → #085ec0; bỏ tim đỏ khi focus |
| 8 | Tìm lỗi (8.2) | Nguyên nhân padding: 10px 0 ghi đè lề .container | Xác nhận bằng DevTools; chọn cách sửa ít thay đổi nhất |
| 9 | Kiểm tra README (mục GitHub) | Cấu trúc README theo 7 mục của đề | Điền thông tin thật, không bịa; bổ sung báo cáo kiểm thử và AI |

## 4. Phần em tự điều chỉnh sau khi dùng AI (Buổi 2)

- Không đổi repeat(3, 1fr) thành repeat(3, minmax(0, 1fr)) vì đã chèn thử chuỗi dài và các cột vẫn rộng bằng nhau (.product-card có overflow: hidden).
- Không đổi lưới sản phẩm sang ul và li vì mỗi sản phẩm đã là article và không muốn thêm phần tử chỉ để mã dài hơn.
- Bỏ màu đỏ của nút yêu thích khi focus để người dùng bàn phím không hiểu nhầm là đã lưu sản phẩm.
- Đổi màu chữ tên sản phẩm khi focus từ #0b74e5 sang #085ec0 để đạt độ tương phản 5.54:1 (WCAG AA).
- Thay viền focus của tên sản phẩm bằng gạch chân và nền xanh nhạt vì overflow: hidden cắt mất outline.
- Tự sửa lỗi lề header ở 481–768 px (padding: 10px 0 → padding-bottom: 10px) và dữ liệu SVG của icon xe tải ở sản phẩm 5.
- Chỉ đưa vào bài phần CSS cần thiết, không dùng framework (Bootstrap/Tailwind) theo đúng yêu cầu của các prompt.

## 5. Phần em hiểu và có thể giải thích

Em giải thích được: vì sao CSS phải liên kết bằng đường dẫn đúng; margin khác padding; box-sizing: border-box làm gì; display: flex đặt ở phần tử cha; justify-content (trục chính) khác align-items (trục phụ); grid-template-columns: repeat(N, 1fr) và gap; object-fit: cover; hover khác focus-visible; vì sao cần alt; lý do của từng lần sửa ở Bước 8.

## 6. Buổi 1 – Kiểm tra và tự điều chỉnh (giữ lại từ nhật ký cũ)

Sau khi AI tạo ra trang `index.html` (gồm 6 sản phẩm mẫu), file `css/style.css` và thư mục `images/`, sinh viên đã mở trang trên trình duyệt, kiểm tra ở kích thước máy tính và điện thoại bằng Chrome DevTools, kiểm tra hình ảnh, nội dung, bố cục và tự tay chỉnh sửa các điểm sau:

- **Loại bỏ liên kết trỏ ra ngoài:** Ban đầu khi nhấp chuột vào để xem chi tiết sản phẩm, trang web dẫn tới web của Tiki, phần này là không cần thiết và đã bị loại bỏ hoàn toàn thành liên kết nội bộ (`#product-1`, `#xay-cat`, `#trang-chu`) để người dùng ở lại trang bài tập demo.
- **Tối ưu cột danh mục trên điện thoại:** Nếu để sidebar nằm trên lưới sản phẩm, người dùng phải cuộn qua rất nhiều checkbox. Tôi yêu cầu giải pháp Off-Canvas Drawer với nút `[Danh Mục & Bộ Lọc Tìm Kiếm]` và lớp phủ mờ (`.sidebar-backdrop`), giúp điện thoại hiển thị ngay dưới 2 cột sản phẩm.
- **Không sử dụng các suy đoán của AI về những phần website chưa kiểm chứng được:** Ở trang giỏ hàng (`/cart`), do công cụ không truy cập được khi chưa đăng nhập nên AI có xu hướng tự suy đoán giao diện thanh toán; sinh viên đã chủ động loại bỏ các suy đoán này khỏi báo cáo khảo sát.
- **Cố định độ dài tên sản phẩm:** Tự bổ sung thuộc tính CSS `-webkit-line-clamp: 2` để các thẻ sản phẩm luôn bằng phẳng, không bị so le chiều cao khi tên sản phẩm dài ngắn khác nhau.
