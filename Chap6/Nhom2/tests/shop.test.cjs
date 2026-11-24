const test = require("node:test");
const assert = require("node:assert/strict");
const shop = require("../ecommerce/model.js");

const products = [
  { id: "pan", price: 299000, originalPrice: 449000, stock: 3, sold: 7 },
];
test("Tính giảm giá từ giá gốc và giá bán, không tạo giảm giá âm", () => {
  assert.equal(shop.discount(products[0]), 33);
  assert.equal(shop.discount({ price: 200, originalPrice: 100 }), 0);
});
test("Giỏ hàng gộp cùng biến thể và giới hạn tổng số lượng theo tồn kho", () => {
  let cart = shop.addItem([], products, "pan", 2, "26 cm", "Đen");
  cart = shop.addItem(cart, products, "pan", 2, "26 cm", "Đen");
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 3);
  assert.equal(shop.total(cart, products), 897000);
});
test("Không cho lách tồn kho bằng cách chọn nhiều biến thể", () => {
  let cart = shop.addItem([], products, "pan", 2, "26 cm", "Đen");
  cart = shop.addItem(cart, products, "pan", 2, "28 cm", "Đen");
  assert.equal(
    cart.reduce((sum, item) => sum + item.quantity, 0),
    3,
  );
});
test("Loại dữ liệu giỏ hàng bị hỏng hoặc sản phẩm không còn tồn tại", () => {
  assert.deepEqual(
    shop.sanitizeCart(
      [
        { id: "missing", quantity: 1 },
        { id: "pan", quantity: -5 },
      ],
      products,
    ),
    [],
  );
  assert.deepEqual(shop.sanitizeCart("invalid", products), []);
});
