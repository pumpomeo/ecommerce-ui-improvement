(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.FlappyEngine = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const WIDTH = 480,
    HEIGHT = 640,
    GROUND = 48,
    GAP = 190,
    PIPE_WIDTH = 62;
  function levelForScore(score) {
    if (score >= 40) return { level: 4, interval: 20 };
    if (score >= 20) return { level: 3, interval: 25 };
    if (score >= 5) return { level: 2, interval: 30 };
    return { level: 1, interval: 40 };
  }
  function createState(practice) {
    return {
      status: "ready",
      score: 0,
      level: 1,
      interval: 40,
      practice: !!practice,
      bird: { x: 112, y: 260, previousY: 260, vy: 0, radius: 17 },
      pipes: [
        {
          id: 0,
          x: WIDTH + 40,
          previousX: WIDTH + 40,
          gapY: 260,
          scored: false,
        },
      ],
      nextId: 1,
    };
  }
  function flap(state) {
    if (state.status === "playing") state.bird.vy = -210;
  }
  function tick(state, milliseconds, random) {
    if (state.status !== "playing") return state;
    const dt = milliseconds / 1000,
      bird = state.bird;
    bird.previousY = bird.y;
    bird.vy += 520 * dt;
    bird.y += bird.vy * dt;
    if (bird.y - bird.radius <= 0 || bird.y + bird.radius >= HEIGHT - GROUND) {
      state.status = "lost";
      return state;
    }
    const gap = state.practice ? 230 : GAP;
    const distance = (3.2 * milliseconds) / state.interval;
    for (const pipe of state.pipes) {
      pipe.previousX = pipe.x;
      pipe.x -= distance;
      const overlapsX =
        bird.x + bird.radius > pipe.x &&
        bird.x - bird.radius < pipe.x + PIPE_WIDTH;
      if (
        overlapsX &&
        (bird.y - bird.radius < pipe.gapY - gap / 2 ||
          bird.y + bird.radius > pipe.gapY + gap / 2)
      ) {
        state.status = "lost";
        return state;
      }
      if (!pipe.scored && pipe.x + PIPE_WIDTH < bird.x) {
        pipe.scored = true;
        state.score++;
        Object.assign(state, levelForScore(state.score));
        if (state.score >= 50) {
          state.score = 50;
          state.status = "won";
          return state;
        }
      }
    }
    state.pipes = state.pipes.filter((pipe) => pipe.x + PIPE_WIDTH > -10);
    const last = state.pipes[state.pipes.length - 1];
    if (!last || last.x < WIDTH - 190) {
      const sample = (random || Math.random)();
      const gapY = Math.max(
        155,
        Math.min(
          HEIGHT - GROUND - 155,
          (last ? last.gapY : 260) + (sample - 0.5) * 130,
        ),
      );
      const x = WIDTH + 8;
      state.pipes.push({
        id: state.nextId++,
        x,
        previousX: x,
        gapY,
        scored: false,
      });
    }
    return state;
  }
  return {
    WIDTH,
    HEIGHT,
    GROUND,
    GAP,
    PIPE_WIDTH,
    levelForScore,
    createState,
    flap,
    tick,
  };
});
