(function ($) {
  "use strict";
  const ui = window.ShopUI,
    orderKey = "meo-home-orders-v1";
  function renderCart() {
    const cart = ui.readCart();
    $("#cart-empty").prop("hidden", cart.length > 0);
    $("#cart-layout").prop("hidden", cart.length === 0);
    const list = $("#cart-items").empty();
    cart.forEach(function (item, index) {
      const product = ui.products.find((p) => p.id === item.id);
      const row = $('<article class="cart-row"></article>');
      row.append(
        $('<img width="80" height="80" alt="">').attr(
          "src",
          "../assets/products/kitchen-" + product.image + ".jpg",
        ),
      );
      const info = $("<div></div>").append(
        $("<h2></h2>").append(
          $("<a></a>")
            .attr("href", "product.html?id=" + product.id)
            .text(product.name),
        ),
        $("<p></p>").text(item.size + " · " + item.color),
      );
      row.append(
        info,
        $('<input class="field cart-quantity" type="number" min="1">')
          .val(item.quantity)
          .attr({
            "data-index": index,
            max: product.stock,
            "aria-label": "Số lượng " + product.name,
          }),
        $('<strong class="cart-line-total"></strong>').text(
          ui.money(item.quantity * product.price),
        ),
        $('<button class="remove-item" type="button">×</button>').attr({
          "data-remove": index,
          "aria-label": "Xóa " + product.name,
        }),
      );
      list.append(row);
    });
    $("#cart-total").text(ui.money(ui.model.total(cart, ui.products)));
  }
  function readOrders() {
    try {
      const value = JSON.parse(localStorage.getItem(orderKey) || "[]");
      return Array.isArray(value)
        ? value
            .filter(
              (o) =>
                o &&
                typeof o.id === "string" &&
                Number.isFinite(o.total) &&
                Array.isArray(o.items),
            )
            .slice(-20)
        : [];
    } catch (_) {
      return [];
    }
  }
  function renderOrders() {
    const orders = readOrders();
    $("#orders-empty").prop("hidden", orders.length > 0);
    const list = $("#orders-list").empty();
    orders
      .slice()
      .reverse()
      .forEach(function (order) {
        const card = $('<article class="order-card"></article>');
        const head = $('<div class="order-head"></div>');
        head.append(
          $("<h2></h2>").text(order.id),
          $('<span class="status-label"></span>').text(
            ["Đã ghi nhận", "Đang chuẩn bị", "Đã hoàn thành"][
              order.stage || 0
            ] || "Đã ghi nhận",
          ),
        );
        card.append(head);
        const items = $("<ul></ul>");
        order.items.forEach((item) => {
          const product = ui.products.find((p) => p.id === item.id);
          if (product)
            items.append(
              $("<li></li>").text(product.name + " × " + item.quantity),
            );
        });
        card.append(
          items,
          $("<p></p>").text("Tổng tiền: " + ui.money(order.total)),
        );
        if ((order.stage || 0) < 2)
          card.append(
            $(
              '<button class="button secondary" type="button">Chuyển trạng thái demo</button>',
            ).attr("data-advance-order", order.id),
          );
        list.append(card);
      });
  }
  $("#cart-items").on("change", ".cart-quantity", function () {
    const cart = ui.readCart(),
      index = Number($(this).attr("data-index")),
      quantity = Number($(this).val());
    if (!Number.isInteger(quantity) || quantity < 1) {
      ui.message("Số lượng phải là số nguyên dương.");
      renderCart();
      return;
    }
    ui.saveCart(
      ui.model.changeQuantity(
        cart,
        ui.products,
        ui.model.key(cart[index]),
        quantity,
      ),
    );
    renderCart();
  });
  $("#cart-items").on("click", "[data-remove]", function () {
    const cart = ui.readCart();
    cart.splice(Number($(this).attr("data-remove")), 1);
    ui.saveCart(cart);
    renderCart();
  });
  $("#place-demo-order").on("click", function () {
    const cart = ui.readCart();
    if (!cart.length) return;
    const orders = readOrders();
    orders.push({
      id: "MEO-" + Date.now(),
      items: cart,
      total: ui.model.total(cart, ui.products),
      stage: 0,
    });
    try {
      localStorage.setItem(orderKey, JSON.stringify(orders.slice(-20)));
    } catch (_) {
      ui.message("Không thể lưu đơn demo. Giỏ hàng được giữ lại.");
      return;
    }
    ui.saveCart([]);
    location.href = "orders.html";
  });
  $("#orders-list").on("click", "[data-advance-order]", function () {
    const id = $(this).attr("data-advance-order"),
      orders = readOrders(),
      order = orders.find((o) => o.id === id);
    if (!order) return;
    order.stage = Math.min(2, (order.stage || 0) + 1);
    try {
      localStorage.setItem(orderKey, JSON.stringify(orders));
      renderOrders();
    } catch (_) {
      ui.message("Không thể lưu trạng thái đơn demo.");
    }
  });
  if ($("#cart-items").length) renderCart();
  if ($("#orders-list").length) renderOrders();
})(jQuery);
