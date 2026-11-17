function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);
function checkForEmptyFields(e) {
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";
    errorArea.textContent = "";
    var fields = document.querySelectorAll("input[type=text],input[type=password]");
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            e.preventDefault();
            fieldList.push(fields[i].id);
        }
    }
    if (fieldList.length > 0) {
        var message = document.createElement("p");
        message.textContent = "The following fields can't be empty: " + fieldList.join(", ") + ".";
        errorArea.appendChild(message);
        errorArea.className = "visible";
    }
}
