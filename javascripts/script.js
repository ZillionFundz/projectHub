//CALCULATOR IMPLEMENTATION HERE...👇👇
const screen = document.getElementById('screen');
function appendToScreen(input) {
    screen.value += input;
}


function clearScreen() {
    screen.value = "";
}


function deleteRecent() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    }
    catch (error) {
        screen.value = "Syntax Error";
    }
}