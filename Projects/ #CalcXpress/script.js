let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  display.value = '';
  expression = '';
}

function deleteLastEntry() {
  expression = expression.slice(0, -1);
  display.value = expression;
}
