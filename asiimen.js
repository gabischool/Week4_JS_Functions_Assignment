// Task 1 — Greet User
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Task 2 — Tip Calculator
function calculateTip(bill, tipPercent) {
  return bill * (tipPercent / 100);
}

// Task 3 — Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

// Task 4 — Is Adult? (Arrow Function)
const isAdult = (age) => age >= 18;

function getInitials(firstName, lastName) {
  return firstName[0] + "." + lastName[0] + ".";
}