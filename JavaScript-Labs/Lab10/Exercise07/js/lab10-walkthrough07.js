$(function () {
    $("figure img")
        .on("mouseover", function (e) {
            var alt = $(this).attr("alt");
            var src = $(this).attr("src");
            var newsrc = src.replace("small", "medium");
            $("#preview").remove();
            var preview = $('<div id="preview"></div>');
            preview.append($("<img>").attr({ src: newsrc, alt: alt }));
            preview.append($("<p>").text(alt));
            $("body").append(preview);
            $(this).addClass("gray");
            movePreview(e);
            preview.fadeIn(1000);
        })
        .on("mouseleave", removePreview)
        .on("mousemove", movePreview);
});
function removePreview() {
    $(this).removeClass("gray");
    $("#preview").remove();
}
function movePreview(e) {
    $("#preview").css("top", (e.pageY - 10) + "px").css("left", (e.pageX + 30) + "px");
}
