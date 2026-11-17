# Exercise 10.1 — Set Up jQuery

Mở `index.html` bằng Chrome. Riêng GET (10.9–10.10) cần Live Server/HTTP; không dùng file://.

## Ảnh minh chứng

- [01-cdn-version.png](screenshot/01-cdn-version.png): jQuery tải từ CDN; Console xác nhận phiên bản 3.1.1.
- [02-cdn-network.png](screenshot/02-cdn-network.png): Network ghi nhận jquery-3.1.1.min.js từ code.jquery.com được tải thành công.
- [03-cdn-blocked-local-loaded.png](screenshot/03-cdn-blocked-local-loaded.png): Chủ động chặn CDN để thử fallback: bản jQuery cục bộ vẫn tải được.
- [04-local-fallback-version.png](screenshot/04-local-fallback-version.png): Console xác nhận fallback 3.1.1 và đường dẫn tệp jQuery trong thư mục bài.
