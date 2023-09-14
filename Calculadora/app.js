
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".buttons button");

screen.value = "0";
let num1 = "0";
let typeOperation;
let operationStatus = false;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const t = e.target;
        const d = t.dataset;

        if (d.number) writeScreen(d.number);
        if (d.math) getOperation(t, d.math);
        if (d.operation) runOperation(num1, typeOperation, d.operation);
    });
});

function writeScreen(number) {
    screen.value === "0" || operationStatus === true
        ? (screen.value = number)
        : number === "." && !screen.value.includes(".")
        ? (screen.value += number)
        : number !== "."
        ? (screen.value += number)
        : null;

    operationStatus = false;
}

function getOperation(element, math) {
    num1 = Number(screen.value);
    typeOperation = math;
    screen.value = element.textContent;
    operationStatus = true;
}

function runOperation(num1, typeOperation, operation) {
    operation === "clear"
        ? (screen.value = "0")
        : getResult(num1, typeOperation);
}

function getResult(num1, typeOperation) {
    const num2 = Number(screen.value);

    let result = "0";
    switch (typeOperation) {
        case "add":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            break;
    }
    result === Infinity ? (screen.value = "Error") : (screen.value = result);
}
