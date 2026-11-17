// Steps 2 and 4: show val() and attr() before replacing #first.
var msg = $("#msgArea");
msg.val("here is some new text");
// Step 4: read the textarea class while the textarea still exists.
$("#msgArea").val("My class is " + $("#msgArea").attr("class"));
// Step 3: html() replaces ALL children, including the textarea, as in the PDF.
$("#first").html("new Title");
// Steps 5–7: apply changes to sets of matching elements.
$("button").css("background-color", "red");
$("body").css("background-color", "ivory");
$(".center-icons").addClass("selected");
