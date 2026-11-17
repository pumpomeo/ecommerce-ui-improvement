$(function () {
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="Art thumbnail">');
    var panel = $(".panel");
    // Final step: the image is a sibling immediately before the panel.
    img.insertBefore(panel);
});
