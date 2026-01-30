let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace('×', '*')
            .replace('÷', '/');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1000);
    }
}