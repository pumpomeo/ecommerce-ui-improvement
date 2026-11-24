(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ShopModel = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  function discount(product) {
    return product.originalPrice > 0
      ? Math.max(
          0,
          Math.round((1 - product.price / product.originalPrice) * 100),
        )
      : 0;
  }
  function key(item) {
    return JSON.stringify([item.id, item.size || "", item.color || ""]);
  }
  function sanitizeCart(cart, products) {
    if (!Array.isArray(cart)) return [];
    const clean = [];
    cart.forEach(function (raw) {
      if (!raw || typeof raw.id !== "string") return;
      const product = products.find((p) => p.id === raw.id);
      if (!product || !Number.isFinite(raw.quantity) || raw.quantity < 1)
        return;
      const used = clean
        .filter((item) => item.id === raw.id)
        .reduce((sum, item) => sum + item.quantity, 0);
      const quantity = Math.min(
        Math.floor(raw.quantity),
        Math.max(0, product.stock - used),
      );
      if (!quantity) return;
      const item = {
        id: raw.id,
        quantity,
        size: String(raw.size || "").slice(0, 60),
        color: String(raw.color || "").slice(0, 60),
      };
      const existing = clean.find((row) => key(row) === key(item));
      if (existing) existing.quantity += quantity;
      else clean.push(item);
    });
    return clean;
  }
  function addItem(cart, products, id, quantity, size, color) {
    const clean = sanitizeCart(cart, products);
    if (!Number.isFinite(quantity) || quantity < 1) return clean;
    return sanitizeCart(
      clean.concat({ id, quantity: Math.floor(quantity), size, color }),
      products,
    );
  }
  function changeQuantity(cart, products, itemKey, quantity) {
    const clean = sanitizeCart(cart, products);
    const item = clean.find((row) => key(row) === itemKey);
    if (!item || !Number.isInteger(quantity) || quantity < 1) return clean;
    const product = products.find((p) => p.id === item.id);
    const others = clean
      .filter((row) => row.id === item.id && key(row) !== itemKey)
      .reduce((sum, row) => sum + row.quantity, 0);
    item.quantity = Math.min(quantity, Math.max(0, product.stock - others));
    return clean.filter((row) => row.quantity > 0);
  }
  function total(cart, products) {
    return sanitizeCart(cart, products).reduce(
      (sum, item) =>
        sum + item.quantity * products.find((p) => p.id === item.id).price,
      0,
    );
  }
  return { discount, key, sanitizeCart, addItem, changeQuantity, total };
});
