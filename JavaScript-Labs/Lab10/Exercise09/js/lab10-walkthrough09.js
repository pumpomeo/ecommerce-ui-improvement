$(function () {
    $("#consume").on("click", function () {
        var saved = $("#dataSource").val() === "saved";
        var url = saved ? "data/cities.json" :
            (location.protocol === "https:" ? "https:" : "http:") +
            "//www.randyconnolly.com/funwebdev/services/travel/cities.php";
        $("#results").empty().append($("<ul>"));
        $("#requestStatus").text(saved ? "Đang đọc bản JSON đã lưu từ dịch vụ..." : "Đang GET dịch vụ trực tuyến...");
        $.get({ url: url, dataType: "json", timeout: 10000 }, function (data, status) {
            if (status === "success") {
                $.each(data, function (index, value) {
                    $("<li>").text(value.name).appendTo("#results ul");
                });
                $("#requestStatus").text("GET thành công: " + data.length + " thành phố. Nguồn: " + (saved ? "bản lưu cục bộ" : "dịch vụ trực tuyến"));
            }
        }).fail(function (xhr, status, error) {
            $("#requestStatus").text("GET thất bại: " + status + ". Có thể chọn bản JSON đã lưu để tiếp tục thực hành.");
        });
    });
});
