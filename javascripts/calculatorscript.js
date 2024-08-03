const screenDisplay = document.getElementById("screen");
function appendToScreen(input) {
    screenDisplay.value += input;
}
function deleteRecent() {
    screenDisplay.value = screenDisplay.value.slice(0, -1);
}

function deleteAll() {
    screenDisplay.value = "";
}
function calculate() {
    screenDisplay.value = eval(screenDisplay.value);
}
