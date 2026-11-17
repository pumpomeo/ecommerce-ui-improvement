// define functions in this file

// This variable has global scope.
var boxClass = "movingDiv";

function outputBox(num) {
    // Step 10: omit var deliberately to demonstrate global scope.
    // Step 9 used var box here, so console.log(box) outside the function failed.
    box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
