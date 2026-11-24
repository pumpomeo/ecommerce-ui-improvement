(function ($) {
  "use strict";
  const engine = window.FlappyEngine,
    canvas = document.getElementById("game"),
    ctx = canvas.getContext("2d");
  const birdImage = new Image(),
    pipeImage = new Image();
  birdImage.src = "bird.svg";
  pipeImage.src = "pipe.svg";
  let state = engine.createState(),
    lastTime = performance.now(),
    accumulator = 0,
    oldStatus = "",
    oldScore = -1,
    best = 0;
  try {
    best = Math.max(
      0,
      Math.min(50, Number(localStorage.getItem("meo-flappy-best-v1")) || 0),
    );
  } catch (_) {}
  $("#best-score").text(best);
  function start() {
    if (state.status === "paused") state.status = "playing";
    else {
      state = engine.createState($("#practice").prop("checked"));
      state.status = "playing";
    }
    accumulator = 0;
    lastTime = performance.now();
    engine.flap(state);
    canvas.focus({ preventScroll: true });
    updateUI();
  }
  function pause() {
    if (state.status === "playing") {
      state.status = "paused";
      updateUI();
    } else if (state.status === "paused") start();
  }
  function updateUI() {
    $("#game-board").attr({
      "data-status": state.status,
      "data-level": state.level,
      "data-interval": state.interval,
    });
    $("#score").text(state.score);
    $("#level").text(state.level);
    $("#practice").prop(
      "disabled",
      state.status === "playing" || state.status === "paused",
    );
    $("#pause-button")
      .prop("disabled", !["playing", "paused"].includes(state.status))
      .text(state.status === "paused" ? "Tiếp tục · P" : "Tạm dừng · P");
    $("#game-overlay").prop("hidden", state.status === "playing");
    if (state.score !== oldScore) {
      if (state.score > best) {
        best = state.score;
        $("#best-score").text(best);
        try {
          localStorage.setItem("meo-flappy-best-v1", String(best));
        } catch (_) {}
      }
      if ([5, 20, 40].includes(state.score))
        $("#game-announcement").text("Đã đến level " + state.level + ".");
      oldScore = state.score;
    }
    if (state.status !== oldStatus) {
      const text = {
        ready: [
          "Sẵn sàng cất cánh?",
          "Vượt qua các ống gốm, ghi 50 điểm và chinh phục 4 level.",
          "Bắt đầu",
        ],
        paused: [
          "Đã tạm dừng",
          "Hít thở một chút. Chuyến bay sẽ tiếp tục khi bạn sẵn sàng.",
          "Tiếp tục",
        ],
        lost: [
          "Thử lại nhé!",
          "Bạn đã ghi " +
            state.score +
            " điểm. Nhấn đều từng nhịp để giữ độ cao.",
          "Chơi lại",
        ],
        won: [
          "Chiến thắng!",
          "Bạn đã đạt 50 điểm và hoàn thành cả 4 level. Game đã dừng.",
          "Chơi lại",
        ],
      };
      if (text[state.status]) {
        const values = text[state.status];
        $("#overlay-title").text(values[0]);
        $("#overlay-description").text(values[1]);
        $("#start-button").text(values[2]);
        $("#game-announcement").text(values[0] + " " + values[1]);
      }
      oldStatus = state.status;
    }
  }
  function draw(time) {
    const alpha =
      state.status === "playing"
        ? Math.min(accumulator / state.interval, 1)
        : 1;
    ctx.fillStyle = "#a9dce0";
    ctx.fillRect(0, 0, engine.WIDTH, engine.HEIGHT);
    ctx.fillStyle = "#e7f5ef";
    for (let i = 0; i < 5; i++) {
      const x = ((((i * 137 - time * 0.008) % 700) + 700) % 700) - 120;
      ctx.beginPath();
      ctx.ellipse(x, 110 + (i % 2) * 70, 50, 15, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    const buildings = [
      [0, 170],
      [55, 210],
      [115, 150],
      [178, 190],
      [245, 155],
      [315, 220],
      [389, 180],
      [447, 200],
    ];
    buildings.forEach(([x, height], i) => {
      ctx.fillStyle = i % 2 ? "#77b0b2" : "#8ac0bf";
      ctx.fillRect(x, engine.HEIGHT - engine.GROUND - height, 58, height);
      ctx.fillStyle = "#c4ded0";
      for (let y = 0; y < height - 30; y += 30) {
        ctx.fillRect(
          x + 12,
          engine.HEIGHT - engine.GROUND - height + y + 12,
          10,
          14,
        );
        ctx.fillRect(
          x + 34,
          engine.HEIGHT - engine.GROUND - height + y + 12,
          10,
          14,
        );
      }
    });
    const gap = state.practice ? 230 : engine.GAP;
    state.pipes.forEach((pipe) => {
      const x = pipe.previousX + (pipe.x - pipe.previousX) * alpha,
        top = pipe.gapY - gap / 2,
        bottom = pipe.gapY + gap / 2;
      if (pipeImage.complete && pipeImage.naturalWidth) {
        ctx.save();
        ctx.translate(x + engine.PIPE_WIDTH, top);
        ctx.scale(-1, -1);
        ctx.drawImage(pipeImage, 0, 0, engine.PIPE_WIDTH, top);
        ctx.restore();
        ctx.drawImage(
          pipeImage,
          x,
          bottom,
          engine.PIPE_WIDTH,
          engine.HEIGHT - engine.GROUND - bottom,
        );
      } else {
        ctx.fillStyle = "#16746b";
        ctx.fillRect(x, 0, engine.PIPE_WIDTH, top);
        ctx.fillRect(x, bottom, engine.PIPE_WIDTH, engine.HEIGHT - bottom);
      }
    });
    const bird = state.bird,
      y = bird.previousY + (bird.y - bird.previousY) * alpha;
    ctx.save();
    ctx.translate(bird.x, y);
    ctx.rotate(Math.max(-0.35, Math.min(0.6, bird.vy / 500)));
    if (birdImage.complete && birdImage.naturalWidth)
      ctx.drawImage(birdImage, -28, -22, 56, 44);
    else {
      ctx.fillStyle = "#ed9c55";
      ctx.fillRect(-17, -17, 34, 34);
    }
    ctx.restore();
    ctx.fillStyle = "#c48850";
    ctx.fillRect(0, engine.HEIGHT - engine.GROUND, engine.WIDTH, engine.GROUND);
    ctx.fillStyle = "#efc78e";
    ctx.fillRect(0, engine.HEIGHT - engine.GROUND, engine.WIDTH, 8);
  }
  function frame(time) {
    accumulator += Math.min(time - lastTime, 80);
    lastTime = time;
    if (state.status === "playing") {
      while (accumulator >= state.interval && state.status === "playing") {
        const interval = state.interval;
        engine.tick(state, interval);
        accumulator -= interval;
      }
      if (state.status !== oldStatus || state.score !== oldScore) updateUI();
    } else accumulator = 0;
    draw(time);
    requestAnimationFrame(frame);
  }
  // https://api.jquery.com/on/ — thay mousedown bằng keydown ArrowDown theo đề.
  $(document).on("keydown", function (event) {
    if ($(event.target).is("input,textarea,select")) return;
    if (event.code === "ArrowDown") {
      event.preventDefault();
      if (!event.repeat) engine.flap(state);
    }
    if (event.code === "KeyP" && !event.repeat) {
      event.preventDefault();
      pause();
    }
    if (event.code === "KeyR" && !event.repeat) {
      event.preventDefault();
      start();
    }
  });
  $("#start-button,#restart-button").on("click", start);
  $("#pause-button").on("click", pause);
  $("#flap-button").on("click", () => {
    engine.flap(state);
    canvas.focus({ preventScroll: true });
  });
  $(window).on("blur", function () {
    if (state.status === "playing") {
      state.status = "paused";
      updateUI();
    }
  });
  // Snapshot chỉ đọc phục vụ kiểm thử và quan sát; không có API sửa điểm hoặc ép thắng.
  window.FlappyMeo = { snapshot: () => JSON.parse(JSON.stringify(state)) };
  updateUI();
  requestAnimationFrame(frame);
})(jQuery);
