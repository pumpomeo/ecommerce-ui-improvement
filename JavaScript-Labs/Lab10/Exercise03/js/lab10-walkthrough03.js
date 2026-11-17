$(function () {
    // Step 2 was tested with :password; it is commented out in the final version.
    // $(":password").css("background-color", "yellow");
    $("form :nth-child(4n)").css("background-color", "yellow");
    $("label:contains('word')").css("color", "black");
});
