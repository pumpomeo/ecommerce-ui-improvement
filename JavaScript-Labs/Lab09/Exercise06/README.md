# Exercise 9.6 — Debugging Events

Mở `index.html` bằng Chrome hoặc Live Server.

## Ảnh minh chứng theo thứ tự thực hành

- [01-load-breakpoint.png](screenshot/01-load-breakpoint.png): Sources dừng tại dòng alert trong load handler; biến divToGet đã trỏ tới div1.
- [02-resumed-load.png](screenshot/02-resumed-load.png): Resume chạy qua alert và hoàn tất trang có năm ô DOM Timing.
- [03-event-breakpoint.png](screenshot/03-event-breakpoint.png): Breakpoint trong mouseover handler: Scope chứa e (MouseEvent), this là div3.
- [04-event-target-console.png](screenshot/04-event-target-console.png): Khi đang dừng, Console kiểm tra e.type, e.target và e.target.id = div3.
- [05-mouseover-alert.png](screenshot/05-mouseover-alert.png): Resume sự kiện mouseover hiển thị hộp thoại triggered by div3.
