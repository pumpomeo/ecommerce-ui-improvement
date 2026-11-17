# Exercise 10.4 — jQuery Listeners

Mở `index.html` bằng Chrome. Riêng GET (10.9–10.10) cần Live Server/HTTP; không dùng file://.

## Ảnh minh chứng

- [01-click-handler.png](screenshot/01-click-handler.png): Bước 2: shortcut click() ghi thông báo khi click panel.
- [02-click-handler.png](screenshot/02-click-handler.png): Bước 3–4: on(click) trong document-ready cho cùng kết quả.
- [03-mousemove.png](screenshot/03-mousemove.png): Di chuyển trong panel: thông báo tọa độ pageX, pageY.
- [04-mouseleave.png](screenshot/04-mouseleave.png): Rời panel: mouseleave ghi goodbye!.
- [05-click-unbind.png](screenshot/05-click-unbind.png): Click ghi stopped move reporting và off(mousemove).
- [06-mousemove-disabled.png](screenshot/06-mousemove-disabled.png): Sau off(mousemove), rê chuột trong panel không cập nhật tọa độ nữa.
