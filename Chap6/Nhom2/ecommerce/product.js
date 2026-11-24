(function ($) {
  "use strict";
  const ui = window.ShopUI;
  const id = new URLSearchParams(location.search).get("id") || "pot";
  const product = ui.products.find((p) => p.id === id);
  if (!product) {
    $("#detail-root").html(
      '<div class="empty-state"><h1>Không tìm thấy sản phẩm</h1><a class="button" href="index.html">Xem tất cả sản phẩm</a></div>',
    );
    $(".review-section").prop("hidden", true);
    return;
  }
  document.title = product.name + " — MÈO HOME";
  const photo = "../assets/products/kitchen-" + product.image + ".jpg";
  const diagram =
    "../assets/products/kitchen-" + product.image + "-diagram.svg";
  $("#product-crumb").text(product.name);
  $("#detail-root").html(
    '<div class="detail-layout"><section aria-label="Ảnh sản phẩm"><div class="main-photo"><span class="discount">−' +
      ui.model.discount(product) +
      '%</span><span class="product-tag">' +
      product.tag +
      '</span><img class="xzoom" id="main-photo" src="' +
      photo +
      '" xoriginal="' +
      photo +
      '" alt="' +
      product.name +
      '" width="500" height="500"></div><div class="thumbs"><a href="' +
      photo +
      '" aria-label="Xem ảnh sản phẩm"><img class="xzoom-gallery" src="' +
      photo +
      '" xpreview="' +
      photo +
      '" alt="Ảnh sản phẩm"></a><a href="' +
      diagram +
      '" aria-label="Xem sơ đồ minh họa"><img class="xzoom-gallery" src="' +
      diagram +
      '" xpreview="' +
      diagram +
      '" alt="Sơ đồ minh họa sản phẩm"></a></div><p class="gallery-help">Di chuột lên ảnh để zoom; trên màn hình cảm ứng, chạm vào ảnh. Chọn ảnh nhỏ để đổi hình. Sơ đồ và thông số dùng trong bài thực hành là minh họa.</p></section><section class="detail-info"><p class="eyebrow">' +
      product.category +
      "</p><h1>" +
      product.name +
      '</h1><div class="card-rating"><input class="js-rating" type="text" value="' +
      product.rating +
      '" aria-label="Đánh giá ' +
      product.rating +
      ' trên 5 sao"><span>' +
      product.rating +
      '/5 · Đánh giá minh họa</span></div><p class="product-price">' +
      ui.money(product.price) +
      " <del>" +
      ui.money(product.originalPrice) +
      '</del></p><p class="description">' +
      product.description +
      "</p>" +
      ui.stock(product) +
      '<form class="buy-form" id="buy-form"><div class="buy-options"><div><label for="size">Kích thước / dung tích</label><select class="field" id="size">' +
      product.sizes.map((s) => "<option>" + s + "</option>").join("") +
      '</select></div><div><label for="color">Màu sắc</label><select class="field" id="color">' +
      product.colors.map((c) => "<option>" + c + "</option>").join("") +
      '</select></div></div><div class="quantity-row"><label for="quantity">Số lượng</label><input class="field" id="quantity" type="number" min="1" max="' +
      product.stock +
      '" value="1" required></div><div class="buy-buttons"><button class="button" type="submit">Thêm vào giỏ hàng</button><button class="button secondary" id="contact-store" type="button">Liên hệ cửa hàng</button></div><p class="form-note">Giới hạn theo số lượng còn trong kho; sản phẩm cùng mã dùng chung tồn kho.</p></form></section></div>',
  );
  // API/gallery theo https://payalord.github.io/xZoom/ — dùng thư viện thật, lưu offline.
  $(".xzoom, .xzoom-gallery").xzoom({
    position: "inside",
    adaptive: true,
    title: false,
    scroll: false,
  });
  ui.ratings("#detail-root");
  $("#buy-form").on("submit", function (event) {
    event.preventDefault();
    const quantity = Number($("#quantity").val());
    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > product.stock
    ) {
      ui.message(
        "Vui lòng nhập số lượng nguyên từ 1 đến " + product.stock + ".",
      );
      return;
    }
    ui.add(product.id, quantity, $("#size").val(), $("#color").val());
  });
  $("#contact-store").on("click", () =>
    ui.message(
      "MÈO HOME · 8:00–20:00 · hello@meohome.example (thông tin minh họa).",
    ),
  );
  $("#review-rating").rating({
    theme: "krajee-svg",
    min: 1,
    max: 5,
    step: 1,
    size: "sm",
    showClear: false,
    showCaption: false,
  });
  $("#review-form").on("submit", function (event) {
    event.preventDefault();
    const comment = $("#review-text").val().trim();
    const name = $("#review-name").val().trim() || "Khách ghé thăm";
    const rating = Number($("#review-rating").val());
    if (!comment || !Number.isInteger(rating) || rating < 1 || rating > 5)
      return;
    // Dữ liệu người dùng chỉ đưa vào text node; không lưu tên/nhận xét vào localStorage.
    const article = $('<article class="review-item"></article>');
    $("<strong></strong>").text(name).appendTo(article);
    const input = $('<input class="js-rating" type="text">')
      .val(rating)
      .attr("aria-label", rating + " trên 5 sao");
    article.append(input, $("<p></p>").text(comment));
    $("#reviews-list").prepend(article);
    ui.ratings(article.parent());
    $("#review-text").val("");
    $("#review-name").val("");
    ui.message("Đã hiển thị nhận xét trong phiên hiện tại.");
  });
})(jQuery);
