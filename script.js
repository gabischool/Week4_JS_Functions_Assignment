const display = document.getElementById("display");
const previousCalculation = document.getElementById("previous-calculation");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  previousCalculation.textContent = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    // Handle division by zero
    if (expression.includes("/0")) {
      display.value = "Cannot divide by 0";
      return;
    }

    let result = eval(expression);

    previousCalculation.textContent = expression + " =";
    display.value = result;

  } catch (error) {
    display.value = "Error";
  }
}