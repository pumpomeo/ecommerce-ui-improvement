// Cần Playwright có sẵn; xem README. Không sửa điểm/trạng thái game khi kiểm thử.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const base = process.env.BASE_URL || "http://127.0.0.1:8086";
const images = path.join(root, "images");
(async () => {
  await fs.mkdir(images, { recursive: true });
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_BIN || "/usr/bin/google-chrome-stable",
    headless: true,
  });
  const failures = [];
  const checks = [];
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
    });
    page.on("pageerror", (error) => failures.push(error.message));
    page.on("response", (response) => {
      if (response.url().startsWith(base) && response.status() >= 400)
        failures.push(
          response.status() + " " + new URL(response.url()).pathname,
        );
    });
    const shot = (name) =>
      page.screenshot({
        path: path.join(images, name + ".png"),
        fullPage: true,
      });
    await page.goto(base + "/ecommerce/");
    assert.equal(await page.locator(".product-card").count(), 6);
    assert.equal(await page.locator("#products .rating-container").count(), 6);
    assert.equal(await page.locator(".progress-bar").count(), 6);
    await shot("01-ecommerce-desktop");
    await page.locator("#search").fill("chao");
    assert.equal(await page.locator(".product-card").count(), 1);
    await page.locator("[data-add-product=pan]").click();
    assert.equal(await page.locator("[data-cart-count]").innerText(), "1");
    await page.locator("#search").fill("khong-co-san-pham");
    assert.equal(await page.locator("#empty-products").isVisible(), true);
    await page.locator("#search").fill("");
    await page.locator("#sort").selectOption("price-asc");
    assert.match(
      await page.locator(".product-card h3").first().innerText(),
      /Túi/,
    );
    checks.push(
      "Danh mục, lọc tìm kiếm, sắp xếp, badge, rating thật và Bootstrap progress",
    );
    await page.goto(base + "/ecommerce/product.html?id=pot");
    assert.equal(await page.locator(".xzoom-gallery").count(), 2);
    await page
      .getByRole("link", { name: "Xem sơ đồ minh họa", exact: true })
      .click();
    await page.waitForFunction(() =>
      document.querySelector("#main-photo").src.includes("diagram.svg"),
    );
    await page
      .getByRole("link", { name: "Xem ảnh sản phẩm", exact: true })
      .click();
    await page.mouse.move(20, 20);
    const bounds = await page.locator(".main-photo").boundingBox();
    await page.mouse.move(
      bounds.x + bounds.width * 0.55,
      bounds.y + bounds.height * 0.5,
    );
    await page.waitForTimeout(500);
    assert.ok(
      (await page
        .locator(".xzoom-lens,.xzoom-preview,.xzoom-source")
        .filter({ visible: true })
        .count()) > 0,
    );
    await shot("02-ecommerce-zoom");
    await page.mouse.move(30, 30);
    await page.locator("#quantity").fill("2");
    await page.locator("#buy-form button[type=submit]").click();
    await page.locator("#review-name").fill("Khách kiểm tra");
    await page
      .locator("#review-text")
      .fill("<img src=x onerror=alert(1)> Nhận xét được hiển thị như văn bản.");
    await page.locator("#review-form button[type=submit]").click();
    assert.equal(await page.locator(".review-item img").count(), 0);
    assert.match(await page.locator(".review-item").innerText(), /<img src=x/);
    await page.reload();
    await page.locator("#review-name").fill("Khách dùng thử");
    await page
      .locator("#review-text")
      .fill("Ảnh sản phẩm rõ, phần chọn dung tích và giỏ hàng dễ sử dụng.");
    await page.locator("#review-form .rating-stars").focus();
    await page.keyboard.press("ArrowLeft");
    assert.equal(await page.locator("#review-rating").inputValue(), "4");
    await page.locator("#review-form button[type=submit]").click();
    await shot("03-ecommerce-detail-review");
    checks.push(
      "xZoom đổi thumbnail/zoom, biến thể/số lượng, đánh giá an toàn",
    );
    await page.goto(base + "/ecommerce/cart.html");
    assert.equal(await page.locator(".cart-row").count(), 2);
    await page.locator(".cart-quantity").first().fill("3");
    await page.locator(".cart-quantity").first().press("Tab");
    await page.reload();
    assert.equal(
      await page.locator(".cart-quantity").first().inputValue(),
      "3",
    );
    await shot("04-ecommerce-cart");
    await page.locator("#place-demo-order").click();
    await page.waitForURL("**/orders.html");
    assert.equal(await page.locator(".order-card").count(), 1);
    await page.locator("[data-advance-order]").click();
    assert.equal(
      await page.locator(".status-label").innerText(),
      "Đang chuẩn bị",
    );
    await shot("05-ecommerce-order");
    checks.push(
      "Giỏ hàng lưu/reload, sửa số lượng, tạo đơn demo và chuyển trạng thái",
    );
    await page.goto(base + "/ecommerce/product.html?id=unknown");
    assert.equal(await page.locator("#review-form").isVisible(), false);
    await page.goto(base + "/jquery-lms/");
    assert.equal(await page.locator("#topic-count").innerText(), "14");
    assert.equal(await page.locator("#assignment-count").innerText(), "16");
    assert.equal(
      await page.locator("#fifth-name").innerText(),
      "Bài tập nhóm chương 1 - Về nhà",
    );
    assert.equal(
      await page.locator("#fifth-deadline").innerText(),
      "20/10/2026 23:00",
    );
    assert.match(
      await page
        .locator("#topic-table tr")
        .filter({ hasText: "Tài liệu tham khảo" })
        .innerText(),
      /Không/,
    );
    assert.equal(
      await page
        .locator("#topic-table")
        .getByText("Chưa hiển thị hạn nộp; đã kiểm tra cả trang chi tiết.", {
          exact: true,
        })
        .count(),
      2,
    );
    await page.locator("#analyze-button").click();
    await shot("06-lms-desktop");
    checks.push(
      "LMS lớp thật: 14 chủ đề, 16 bài, bài thứ5 và deadline đúng; không bịa 2 hạn bị thiếu",
    );
    for (const width of [320, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const url of [
        "/",
        "/ecommerce/",
        "/ecommerce/product.html?id=pot",
        "/ecommerce/cart.html",
        "/ecommerce/orders.html",
        "/jquery-lms/",
        "/flappy-bird/",
      ]) {
        await page.goto(base + url);
        const dimensions = await page.evaluate(() => ({
          width: innerWidth,
          document: document.documentElement.scrollWidth,
        }));
        assert.ok(
          dimensions.document <= dimensions.width + 1,
          "Tràn ngang " +
            url +
            " tại " +
            width +
            "px: " +
            JSON.stringify(dimensions),
        );
      }
    }
    checks.push("Không tràn ngang ở 320/768/1024/1440px cho toàn bộ 7 trang");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + "/ecommerce/");
    await shot("07-ecommerce-mobile");
    await page.getByRole("button", { name: "Mở menu", exact: true }).click();
    assert.equal(await page.locator("#shop-navigation").isVisible(), true);
    await page.goto(base + "/jquery-lms/");
    await shot("08-lms-mobile");
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(base + "/flappy-bird/");
    await shot("09-game-ready");
    await page.locator("#start-button").click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("KeyP");
    assert.equal(
      await page.locator("#game-board").getAttribute("data-status"),
      "paused",
    );
    await shot("10-game-paused");
    await page.keyboard.press("KeyP");
    await page.waitForSelector("#game-board[data-status=lost]", {
      timeout: 7000,
    });
    await shot("11-game-lost");
    await page.locator("#practice").check();
    await page.locator("#start-button").click();
    const milestones = new Set();
    let last = 0;
    const start = Date.now();
    while (Date.now() - start < 180000) {
      const state = await page.evaluate(() => window.FlappyMeo.snapshot());
      if (state.status === "won") break;
      assert.equal(
        state.status,
        "playing",
        "Game kết thúc sớm ở điểm " + state.score,
      );
      const pipe = state.pipes.find(
        (p) => p.x + 62 >= state.bird.x - state.bird.radius,
      );
      const target = pipe ? pipe.gapY : 260;
      if (
        state.bird.y > target + 12 ||
        (state.bird.y > target - 12 && state.bird.vy > 120)
      )
        await page.keyboard.press("ArrowDown");
      for (const [score, level, interval] of [
        [5, 2, 30],
        [20, 3, 25],
        [40, 4, 20],
      ])
        if (state.score >= score && !milestones.has(score)) {
          assert.equal(state.level, level);
          assert.equal(state.interval, interval);
          milestones.add(score);
          await shot("game-level-" + level);
          console.log(
            "Đã chơi tới level " + level + " — " + state.score + " điểm.",
          );
        }
      if (state.score >= last + 10) {
        last = state.score;
        console.log("Điểm game: " + state.score);
      }
      await page.waitForTimeout(65);
    }
    assert.equal(
      await page.locator("#game-board").getAttribute("data-status"),
      "won",
    );
    assert.equal(await page.locator("#score").innerText(), "50");
    assert.equal(
      await page.locator("#overlay-title").innerText(),
      "Chiến thắng!",
    );
    await shot("12-game-victory");
    const end = await page.evaluate(() => window.FlappyMeo.snapshot());
    await page.waitForTimeout(300);
    assert.deepEqual(
      await page.evaluate(() => window.FlappyMeo.snapshot()),
      end,
    );
    checks.push(
      "Game chơi bằng phím ArrowDown: pause/resume/lost, 4 level, 50 điểm dừng và Victory ở chế độ luyện tập",
    );
    assert.deepEqual(failures, []);
    await fs.writeFile(
      path.join(root, "tests/browser-results.json"),
      JSON.stringify({ date: "2026-11-24", checks, errors: failures }, null, 2),
    );
    console.log(
      "ĐẠT: " +
        checks.length +
        " nhóm kiểm tra trình duyệt; không có lỗi JavaScript/tài nguyên.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
