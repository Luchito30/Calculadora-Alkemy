// Variables
let displayValue = "";

// Functions
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function insert(value) {
    displayValue += value;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

// Event Listener
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".main_teclas button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.getAttribute("data-value");
            if (value === "Atras") {
                deleteLast();
            } else if(value === "Borrar"){
                clearDisplay();
            } else if (value === "=") {
                calculate();
            } else {
                insert(value);
            }
        });
    });
});
