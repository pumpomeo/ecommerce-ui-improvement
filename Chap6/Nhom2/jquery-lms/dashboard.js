(function ($) {
  "use strict";
  const data = window.LMSCourseData;
  $("#course-title").text(data.courseTitle + " · Lớp " + data.courseId);
  $("#source-note").text(
    "Dữ liệu đọc từ lớp LMS thật ngày " +
      data.capturedDate +
      ". " +
      (data.deadlineNote || ""),
  );
  const fixture = $("#course-fixture");
  data.topics.forEach(function (topic) {
    const section = $('<li class="section"></li>')
      .attr("id", topic.id)
      .append($('<h3 class="sectionname"></h3>').text(topic.title));
    topic.assignments.forEach(function (item) {
      const activity = $('<div class="activity modtype_assign"></div>');
      const link = $('<a target="_blank" rel="noopener noreferrer"></a>')
        .attr("href", item.url)
        .append($('<span class="instancename"></span>').text(item.name));
      activity.append(link);
      if (item.deadlineText)
        activity.append(
          $('<div class="activity-dates"></div>').text(item.deadlineText),
        );
      section.append(activity);
    });
    fixture.append(section);
  });
  function render() {
    const result = window.LMSAssignments.run(document, jQuery);
    $("#topic-count").text(result.topics.length);
    $("#assignment-count").text(result.assignments.length);
    const fifth = result.fifthAssignment;
    if (fifth) {
      $("#fifth-name").text(fifth.name);
      $("#fifth-link").attr("href", fifth.url);
      $("#fifth-deadline").text(
        fifth.deadline
          ? fifth.deadline.label
          : "Hạn chưa hiển thị trên trang lớp.",
      );
    }
    const table = $("#topic-table").empty();
    result.topics.forEach(function (topic) {
      const row = $("<tr></tr>");
      row.append(
        $('<td class="topic-name"></td>').text(topic.title),
        $('<td class="topic-status"></td>').text(
          topic.hasAssignments
            ? "Có · " + topic.assignments.length + " bài"
            : "Không",
        ),
      );
      const cell = $("<td></td>");
      if (!topic.hasAssignments)
        cell.text("Không có bài tập nộp trong chủ đề này.");
      topic.assignments.forEach(function (item) {
        const original = data.assignments.find((row) => row.url === item.url);
        const missing =
          original &&
          original.deadlineDetailStatus === "not_configured_or_not_displayed"
            ? "Chưa hiển thị hạn nộp; đã kiểm tra cả trang chi tiết."
            : "Chưa hiển thị hạn trên trang lớp; mở bài để kiểm tra.";
        cell.append(
          $(
            '<a class="assignment-link" target="_blank" rel="noopener noreferrer"></a>',
          )
            .attr("href", item.url)
            .text(item.name),
          $('<span class="deadline"></span>').text(
            item.deadline ? "Hạn nộp: " + item.deadline.label : missing,
          ),
        );
      });
      row.append(cell);
      table.append(row);
    });
    $("#analysis-status").text(
      "Đã đọc " +
        result.topics.length +
        " chủ đề và " +
        result.assignments.length +
        " bài tập. Bài thứ 5 được in trong Console.",
    );
  }
  $("#analyze-button").on("click", render);
  render();
})(jQuery);
