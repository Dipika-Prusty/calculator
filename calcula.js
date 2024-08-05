let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.innerHTML === "0" && value !== ".") {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function clearDisplay() {
    display.innerHTML = "0";
}

function deleteDigit() {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === "") {
        display.innerHTML = "0";
    }
}

function calculate() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch {
        display.innerHTML = "Error";
    }
}
