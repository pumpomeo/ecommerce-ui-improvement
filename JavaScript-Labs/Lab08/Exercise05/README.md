# Bài 8.5 — Using the Browser Console

Đã thực hành lần lượt các bước của Exercise 8.5 trong Lab08.pdf bằng Google Chrome. Các ảnh là ảnh chụp trực tiếp trang và giao diện Chrome DevTools trong phiên thử nghiệm riêng. Hộp thoại Hello World! ở các bước đầu đã được nhấn OK trước khi chụp.

## Ảnh theo thứ tự thực hành

| Bước trong PDF | Ảnh | Kết quả |
| --- | --- | --- |
| 1–3 | [01-moved-js-network.png](screenshot/01-moved-js-network.png) | Chuyển hello.js vào js/, sửa đường dẫn; Network cho thấy hello.js tải thành công với mã 200, nội dung trang giữ nguyên. |
| 4–6 | [02-typo-console.png](screenshot/02-typo-console.png) | Cố tình viết doccumment.write; Chrome Console báo ReferenceError, chữ do JavaScript tạo không xuất hiện. |
| 7 | [03-fixed-console.png](screenshot/03-fixed-console.png) | Sửa thành document.write; chữ xuất hiện trở lại, Console hết lỗi. |
| 8–9 | [04-console-count.png](screenshot/04-console-count.png) | Nhập count, nhận giá trị 2. |
| 10 | [05-console-output.png](screenshot/05-console-output.png) | Nhập output, nhận chuỗi "<br>Count = 2". |
| 11 | [06-console-temp-assignment.png](screenshot/06-console-temp-assignment.png) | Nhập var temp = count * 7;, Console trả về undefined. |
| 12 | [07-console-temp.png](screenshot/07-console-temp.png) | Nhập temp, nhận giá trị 14; ảnh giữ cả lịch sử các lệnh trước đó. |
| 13 | [08-console-log.png](screenshot/08-console-log.png) | Comment alert; console.log ghi thông báo vào Console. |
| 14 | [09-console-log-warn-error.png](screenshot/09-console-log-warn-error.png) | Hiện đủ thông báo log, warning và error theo đề. |
| Hoàn thành | [10-final-page.png](screenshot/10-final-page.png) | Trang cuối cùng khi không mở DevTools. |

## Mã cuối cùng

- `index.html` nhúng `js/hello.js`, giữ thẻ noscript từ bài 8.4, comment alert và thêm console.log, console.warn, console.error.
- `js/hello.js` dùng document.write đúng chính tả. Lỗi doccumment chỉ được tạo tạm khi thực hành, không nằm trong mã cuối cùng.
- `temp` được tạo bằng lệnh nhập vào Console, không thêm vào tệp JavaScript; cần nhập lại sau khi tải lại trang.
- Thông báo đỏ "panic!! error!!" là kết quả chủ động gọi console.error theo đề, không phải ngoại lệ do mã bị hỏng.
- `screenshot/results.json` ghi lại danh sách ảnh và kết quả kiểm tra cuối cùng: không có ngoại lệ JavaScript, không có hộp thoại, đủ ba thông báo Console, count bằng 2 và output bằng "<br>Count = 2".

Mở index.html bằng Live Server, nhấn Ctrl + Shift + J để xem Console.
