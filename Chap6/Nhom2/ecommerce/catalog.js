(function ($) {
  "use strict";
  const ui = window.ShopUI;
  let category = "Tất cả";
  function normalize(value) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .toLowerCase();
  }
  function render() {
    const query = normalize($("#search").val().trim());
    let found = ui.products.filter(
      (p) =>
        (category === "Tất cả" || p.category === category) &&
        normalize(p.name).includes(query),
    );
    const order = $("#sort").val();
    if (order === "price-asc") found.sort((a, b) => a.price - b.price);
    if (order === "price-desc") found.sort((a, b) => b.price - a.price);
    if (order === "rating") found.sort((a, b) => b.rating - a.rating);
    $("#products").html(found.map(ui.card).join(""));
    $("#result-count").text(found.length + " sản phẩm");
    $("#empty-products").prop("hidden", found.length > 0);
    ui.ratings("#products");
  }
  $(".category-list").on("click", "button", function () {
    category = $(this).text();
    $(".category-list button")
      .removeClass("active")
      .attr("aria-pressed", "false");
    $(this).addClass("active").attr("aria-pressed", "true");
    render();
  });
  $("#search").on("input", render);
  $("#sort").on("change", render);
  // Bootstrap carousel giữ điều khiển thủ công để người dùng chủ động đọc nội dung.
  $("#shop-carousel").carousel({ interval: false });
  render();
})(jQuery);
