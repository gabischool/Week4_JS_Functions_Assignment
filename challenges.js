

function greetUser(name) {
  return `Hello, ${name}!`;
}

function calculateTip(bill, percent) {
  return bill * (percent / 100);
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function isAdult(age) {
  return age >= 18;
}

function getInitials(firstName, lastName) {
  return firstName[0] + "." + lastName[0] + ".";
}

function getInitials(firstName, lastName) {
  return `${firstName[0]}.${lastName[0]}.`;
}

// Test your functions
console.log(greetUser("Fatuma"));          // Hello, Fatuma!
console.log(greetUser("Asha"));            // Hello, Asha!

console.log(calculateTip(50, 20));         // 10
console.log(calculateTip(80, 15));         // 12

console.log(celsiusToFahrenheit(0));       // 32
console.log(celsiusToFahrenheit(100));     // 212
console.log(celsiusToFahrenheit(25));      // 77

console.log(isAdult(20));                  // true
console.log(isAdult(15));                  // false
console.log(isAdult(18));                  // true

console.log(getInitials("Fatuma", "Ali")); // F.A.