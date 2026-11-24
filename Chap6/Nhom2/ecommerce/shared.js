(function ($) {
  "use strict";
  const products = window.MeoProducts,
    model = window.ShopModel;
  const storageKey = "meo-home-cart-v1";
  let memoryCart = [];
  function readCart() {
    try {
      memoryCart = model.sanitizeCart(
        JSON.parse(localStorage.getItem(storageKey) || "[]"),
        products,
      );
    } catch (_) {}
    return memoryCart;
  }
  function message(text) {
    const box = $("#shop-message").text(text).prop("hidden", false);
    clearTimeout(message.timer);
    message.timer = setTimeout(() => box.prop("hidden", true), 4000);
  }
  function saveCart(cart) {
    memoryCart = model.sanitizeCart(cart, products);
    try {
      localStorage.setItem(storageKey, JSON.stringify(memoryCart));
    } catch (_) {
      message(
        "Trình duyệt không cho lưu giỏ hàng; dữ liệu chỉ giữ trong trang hiện tại.",
      );
    }
    $("[data-cart-count]").text(
      memoryCart.reduce((sum, item) => sum + item.quantity, 0),
    );
  }
  function add(id, quantity, size, color) {
    const before = readCart().reduce((sum, item) => sum + item.quantity, 0);
    const cart = model.addItem(readCart(), products, id, quantity, size, color);
    saveCart(cart);
    const added = cart.reduce((sum, item) => sum + item.quantity, 0) - before;
    message(
      added
        ? "Đã thêm " + added + " sản phẩm vào giỏ hàng."
        : "Đã đạt số lượng tồn kho của sản phẩm này.",
    );
    return added;
  }
  function money(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }
  function ratings(root) {
    // https://plugins.krajee.com/star-rating#usage — manual init, không gắn class "rating".
    $(root || document)
      .find(".js-rating")
      .each(function () {
        $(this).rating({
          theme: "krajee-svg",
          min: 0,
          max: 5,
          step: 0.1,
          size: "xs",
          displayOnly: true,
          showClear: false,
          showCaption: false,
        });
      });
  }
  function stock(product) {
    const percent = Math.round(
      (product.sold / (product.sold + product.stock)) * 100,
    );
    return (
      '<p class="stock-text">Đã bán ' +
      product.sold +
      " · Còn " +
      product.stock +
      (product.stock < 10 ? " · Sắp hết" : "") +
      '</p><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Tỉ lệ hàng đã bán" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' +
      percent +
      '" style="width:' +
      percent +
      '%"><span class="sr-only">Đã bán ' +
      percent +
      "%</span></div></div>"
    );
  }
  function card(product) {
    return (
      '<article class="product-card"><a class="product-photo" href="product.html?id=' +
      product.id +
      '"><span class="discount">−' +
      model.discount(product) +
      '%</span><span class="product-tag">' +
      product.tag +
      '</span><img src="../assets/products/kitchen-' +
      product.image +
      '.jpg" alt="' +
      product.name +
      '" width="500" height="500" loading="lazy"></a><div class="product-body"><span class="product-category">' +
      product.category +
      '</span><h3><a href="product.html?id=' +
      product.id +
      '">' +
      product.name +
      '</a></h3><div class="card-rating"><input class="js-rating" type="text" value="' +
      product.rating +
      '" aria-label="Đánh giá ' +
      product.rating +
      ' trên 5 sao"><span>' +
      product.rating +
      '/5</span></div><p class="product-price">' +
      money(product.price) +
      " <del>" +
      money(product.originalPrice) +
      "</del></p>" +
      stock(product) +
      '<button class="button" type="button" data-add-product="' +
      product.id +
      '">Thêm vào giỏ</button></div></article>'
    );
  }
  $("#site-header").html(
    '<div class="shop-top">Bếp gọn, sống vui · Bộ sưu tập đồ dùng nhà bếp MÈO HOME</div><nav class="navbar navbar-default shop-nav" aria-label="Điều hướng cửa hàng"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#shop-navigation" aria-controls="shop-navigation" aria-expanded="false"><span class="sr-only">Mở menu</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html">MÈO HOME<span class="sr-only"> · Trang chủ</span></a></div><div class="collapse navbar-collapse" id="shop-navigation"><ul class="nav navbar-nav"><li><a href="index.html#catalog">Sản phẩm</a></li><li><a href="orders.html">Đơn hàng demo</a></li><li><a href="../index.html">Bài thực hành</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="cart.html">Giỏ hàng <span class="badge" data-cart-count>0</span></a></li></ul></div></div></nav>',
  );
  $("#site-footer").html(
    '<div class="shop-footer"><div class="container"><div><strong>MÈO HOME</strong><br>Bếp gọn, sống vui.</div><p>Website thực hành frontend. Sản phẩm, thông số và số lượng là dữ liệu minh họa.<br>Đơn hàng demo được lưu trong trình duyệt; chưa có thanh toán hay đặt hàng thật.</p></div></div>',
  );
  $("body").append(
    '<div id="shop-message" class="toast-message" role="status" aria-live="polite" hidden></div>',
  );
  saveCart(readCart());
  $(document).on("click", "[data-add-product]", function () {
    const product = products.find(
      (p) => p.id === $(this).attr("data-add-product"),
    );
    add(product.id, 1, product.sizes[0], product.colors[0]);
  });
  window.ShopUI = {
    products,
    model,
    readCart,
    saveCart,
    add,
    money,
    ratings,
    stock,
    card,
    message,
  };
})(jQuery);
