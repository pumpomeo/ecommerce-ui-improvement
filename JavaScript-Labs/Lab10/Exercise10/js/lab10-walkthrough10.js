$(function () {
    $(".animLoading").hide();
    $("#consume").on("click", function () {
        var saved = $("#dataSource").val() === "saved";
        var url = saved ? "data/cities.json" :
            (location.protocol === "https:" ? "https:" : "http:") +
            "//www.randyconnolly.com/funwebdev/services/travel/cities.php";
        $("#results ul").empty();
        $("#consume").prop("disabled", true);
        $(".animLoading").stop(true, true).show();
        $("#requestStatus").text("Đang gửi GET...");
        $.get({ url: url, dataType: "json", timeout: 10000 })
            .done(function (data) {
                $.each(data, function (index, value) {
                    $("<li>").text(value.name).appendTo("#results ul");
                });
                $("#requestStatus").text("GET thành công: " + data.length + " thành phố. Nguồn: " + (saved ? "bản lưu cục bộ" : "dịch vụ trực tuyến"));
            })
            .fail(function (xhr, status, error) {
                $("#requestStatus").text("GET thất bại: " + status + ". Có thể chọn bản JSON đã lưu để tiếp tục thực hành.");
                alert("failed loading data - status=" + status + " error=" + error);
            })
            .always(function () {
                $(".animLoading").fadeOut("slow");
                $("#consume").prop("disabled", false);
            });
    });
});
