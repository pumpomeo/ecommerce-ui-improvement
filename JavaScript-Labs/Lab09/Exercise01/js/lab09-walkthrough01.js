// Steps 2–4: select by id and change the value/title.
var msg = document.getElementById("msgArea");
msg.value = "here is some text";
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";
// Step 5: innerHTML includes markup.
msg.value = document.getElementById("first").innerHTML;
// Step 6: innerText contains visible text without markup.
msg.value = document.getElementById("first").innerText;
// Steps 7–9: attributes, tag names and spans.
msg.value = "My class is " + msg.getAttribute("class");
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";
elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    msg.value += "\n" + elem[i].innerText;
}
// Step 10: select matching class names.
msg.value = "";
var counts = document.getElementsByClassName("count-number");
for (var i = 0; i < counts.length; i++) {
    msg.value += "\n" + counts[i].innerText;
}
// Steps 11–12: CSS selectors.
var ps = document.querySelector("#first p");
msg.value = ps.innerHTML;
ps = document.querySelectorAll("#first p");
for (var i = 0; i < ps.length; i++) {
    msg.value += ps[i].innerHTML + "\n";
}
// Steps 13–14: change an attribute and an inline style.
msg.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";
