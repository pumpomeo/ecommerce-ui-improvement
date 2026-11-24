const test = require("node:test");
const assert = require("node:assert/strict");
const game = require("../flappy-bird/engine.js");

test("Level và interval thay đổi đúng ở mọi mốc điểm", () => {
  for (const [score, level, interval] of [
    [0, 1, 40],
    [4, 1, 40],
    [5, 2, 30],
    [19, 2, 30],
    [20, 3, 25],
    [39, 3, 25],
    [40, 4, 20],
    [49, 4, 20],
  ]) {
    assert.deepEqual(game.levelForScore(score), { level, interval });
  }
});
test("Vượt một cặp ống chỉ cộng một điểm, đạt 50 dừng và chiến thắng", () => {
  const state = game.createState();
  state.status = "playing";
  state.score = 49;
  state.bird.y = 200;
  state.bird.vy = 0;
  state.pipes = [{ x: state.bird.x - 70, gapY: 200, scored: false }];
  game.tick(state, 20);
  assert.equal(state.score, 50);
  assert.equal(state.status, "won");
  const snapshot = JSON.stringify(state);
  game.tick(state, 20);
  assert.equal(JSON.stringify(state), snapshot);
});
test("Va chạm ống kết thúc game, đi qua khe an toàn không thua", () => {
  for (const [y, expected] of [
    [35, "lost"],
    [200, "playing"],
  ]) {
    const state = game.createState();
    state.status = "playing";
    state.bird.y = y;
    state.bird.vy = 0;
    state.pipes = [{ x: state.bird.x, gapY: 200, scored: false }];
    game.tick(state, 40);
    assert.equal(state.status, expected);
  }
});
test("Tạm dừng không làm rơi chim hoặc di chuyển ống", () => {
  const state = game.createState();
  state.status = "paused";
  const snapshot = JSON.stringify(state);
  game.tick(state, 40);
  assert.equal(JSON.stringify(state), snapshot);
});
test("Không nhận chiến thắng nếu va vào mặt đất cùng khung hình ghi điểm cuối", () => {
  const state = game.createState();
  state.status = "playing";
  state.score = 49;
  state.bird.y = game.HEIGHT - game.GROUND;
  state.bird.vy = 0;
  state.pipes = [{ x: state.bird.x - 80, gapY: 200, scored: false }];
  game.tick(state, 20);
  assert.equal(state.status, "lost");
});
