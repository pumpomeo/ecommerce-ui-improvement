const test = require("node:test");
const assert = require("node:assert/strict");
const lms = require("../jquery-lms/lms-console.js");
test("Lấy Due date, không lấy nhầm ngày Opened ở cùng dòng", () => {
  const result = lms.parseDeadline(
    "Opened: Wednesday, 14 October 2026, 12:00 AM Due: Tuesday, 20 October 2026, 11:00 PM",
  );
  assert.equal(result.label, "20/10/2026 23:00");
});
test("Chuyển 12 PM thành 12 giờ và 12 AM thành 0 giờ", () => {
  assert.equal(
    lms.parseDeadline("Due: Wednesday, 18 November 2026, 12:00 PM").label,
    "18/11/2026 12:00",
  );
  assert.equal(
    lms.parseDeadline("Due: Wednesday, 18 November 2026, 12:00 AM").label,
    "18/11/2026 00:00",
  );
});
test("Ngày mở bài không được coi là deadline, thiếu hạn trả null", () => {
  assert.equal(
    lms.parseDeadline("Opened: Wednesday, 14 October 2026, 12:00 AM"),
    null,
  );
  assert.equal(lms.parseDeadline(null), null);
});
