let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function appendNumber(number) {
    if (secondOperand === true) {
        displayValue = number;
        secondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function appendOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && secondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = value;
    } else if (operator) {
        const result = performCalculation(operator, firstOperand, value);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function performCalculation(operator, first, second) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return second;
    }
}

function calculate() {
    let result = performCalculation(operator, firstOperand, parseFloat(displayValue));
    displayValue = `${parseFloat(result.toFixed(7))}`;
    operator = null;
    firstOperand = null;
    secondOperand = false;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length === 1) {
        displayValue = '0';
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    updateDisplay();
}
