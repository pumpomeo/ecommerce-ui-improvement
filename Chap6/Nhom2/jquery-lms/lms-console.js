(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else {
    root.LMSAssignments = api;
    if (root.location.hostname === "lms.ueh.edu.vn") {
      if (root.jQuery) api.run(root.document, root.jQuery);
      else if (typeof root.require === "function")
        root.require(["jquery"], ($) => api.run(root.document, $));
      else
        console.warn(
          "LMS chưa cung cấp jQuery; hãy mở trang khóa học đầy đủ rồi thử lại.",
        );
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const pad = (value) => String(value).padStart(2, "0");
  function parseDeadline(value) {
    if (!value) return null;
    const match = String(value)
      .replace(/\s+/g, " ")
      .match(/(?:\bDue(?:\s+date)?|Hạn\s+(?:chót|nộp)|Đến\s+hạn)\s*:\s*(.+)/i);
    if (
      !match ||
      /^(?:none|not set|không có|chưa đặt|[-–])$/i.test(match[1].trim())
    )
      return null;
    const raw = match[1].trim();
    const english = raw.match(
      /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4}),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)/i,
    );
    if (english && months.includes(english[2].toLowerCase())) {
      const hour =
        (Number(english[4]) % 12) + (/PM/i.test(english[6]) ? 12 : 0);
      return {
        raw,
        label:
          pad(english[1]) +
          "/" +
          pad(months.indexOf(english[2].toLowerCase()) + 1) +
          "/" +
          english[3] +
          " " +
          pad(hour) +
          ":" +
          english[5],
        parsed: true,
      };
    }
    const vietnamese = raw.match(
      /(\d{1,2})\/(\d{1,2})\/(\d{4})[, ]+\s*(\d{1,2}):(\d{2})/,
    );
    if (vietnamese)
      return {
        raw,
        label:
          pad(vietnamese[1]) +
          "/" +
          pad(vietnamese[2]) +
          "/" +
          vietnamese[3] +
          " " +
          pad(vietnamese[4]) +
          ":" +
          vietnamese[5],
        parsed: true,
      };
    return { raw, label: raw, parsed: false };
  }
  function scan(context, $) {
    if (!$ || !$.fn) throw new Error("Cần jQuery để đọc trang LMS.");
    const $root = $(context);
    function text(node) {
      return $(node)
        .clone()
        .find(".accesshide,.sr-only")
        .remove()
        .end()
        .text()
        .replace(/\s+/g, " ")
        .trim();
    }
    function assignment(node, topic) {
      const $node = $(node),
        $link = $node.find('a[href*="/mod/assign/view.php"]').first();
      const $name = $node
        .find(".instancename,.activityname,.activity-name")
        .first();
      const deadlineText = text(
        $node.find('.activity-dates,[data-region="activity-dates"]').first(),
      );
      return {
        name: text($name) || text($link),
        url: $link.attr("href") || "",
        topic,
        deadlineText: deadlineText || null,
        deadline: parseDeadline(deadlineText),
      };
    }
    // https://api.jquery.com/each/ — giữ nguyên thứ tự bài trên trang.
    const assignments = [];
    $root.find('.modtype_assign,[data-modtype="assign"]').each(function () {
      assignments.push(assignment(this, ""));
    });
    const topics = [];
    const selector =
      'li.section,section.section,.course-section,[data-region="course-section"]';
    $root
      .find(selector)
      .filter(function () {
        return !$(this).parents(selector).length;
      })
      .each(function (index) {
        const $section = $(this),
          name =
            text($section.find(".sectionname,.section-title,h2,h3").first()) ||
            (index === 0 ? "Chung" : "Chủ đề " + index);
        const items = [];
        $section
          .find('.modtype_assign,[data-modtype="assign"]')
          .each(function () {
            items.push(assignment(this, name));
          });
        topics.push({
          id: this.id,
          title: name,
          hasAssignments: items.length > 0,
          assignments: items,
        });
      });
    // https://api.jquery.com/eq/ — bài thứ 5 có chỉ số 4, không phải 5.
    const $fifth = $root.find('.modtype_assign,[data-modtype="assign"]').eq(4);
    const fifthAssignment = $fifth.length ? assignment($fifth, "") : null;
    return { topics, assignments, fifthAssignment };
  }
  function run(context, $) {
    const result = scan(context || document, $ || globalThis.jQuery);
    if (result.fifthAssignment)
      console.log(
        "Bài nộp thứ 5:",
        result.fifthAssignment.name,
        result.fifthAssignment.url,
      );
    else console.log("Trang hiện tại có ít hơn 5 bài nộp.");
    const rows = [];
    result.topics.forEach((topic) => {
      if (!topic.hasAssignments)
        rows.push({
          "Chủ đề": topic.title,
          "Có bài tập": "Không",
          "Bài tập": "—",
          Deadline: "—",
        });
      topic.assignments.forEach((item) =>
        rows.push({
          "Chủ đề": topic.title,
          "Có bài tập": "Có",
          "Bài tập": item.name,
          Deadline: item.deadline
            ? item.deadline.label
            : "Chưa hiển thị trên trang lớp; mở bài để kiểm tra",
        }),
      );
    });
    console.table(rows);
    return result;
  }
  return { parseDeadline, scan, run };
});
