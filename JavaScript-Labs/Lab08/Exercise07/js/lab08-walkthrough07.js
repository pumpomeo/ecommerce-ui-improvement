
/* add code here */

var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

// document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4) {
        day = daysOfWeek[i];
    } else {
        day = "<em>" + daysOfWeek[i] + "</em>";
    }
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

for (var startDay = 1; startDay <= 30; startDay += 7) {
    document.write("<tr>");
    for (var column = 0; column < 7 && startDay + column <= 30; column++) {
        document.write("<td>" + (startDay + column) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
