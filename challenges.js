/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function calculateLateFee() {
  let overdueDays = prompt("Enter the number of overdue days:");
  let fee = Number(overdueDays) * 0.25;
  console.log("The late fee is $" + fee.toFixed(2));
}

calculateLateFee()



// Extra Task:
// - Convert the function into a function expression.

const calculateLateFee = function () {
  let overdueDays = prompt("Enter the number of overdue days:");
  let fee = Number(overdueDays) * 0.25;
  console.log("The late fee is $" + fee.toFixed(2));
};

calculateLateFee();


/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other color: "That's a unique choice!"

Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const findColorMeaning = function () {
  let color = prompt("What is your favorite color?");

  if (color === "Blue" || color === "blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "Red" || color === "red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "Green" || color === "green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "Yellow" || color === "yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};

findColorMeaning()


// Extra Task:
// - Rewrite the function using an arrow function.

const findColorMeaning = () => {
  let color = prompt("What is your favorite color?");

  if (color === "Blue" || color === "blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "Red" || color === "red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "Green" || color === "green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "Yellow" || color === "yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};

findColorMeaning();


/*
Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function logCase(clientName, caseNumber) {
  console.log("Case #" + caseNumber + ": " + clientName + "'s case is now logged.");
}


// Extra Task:
// - Rewrite the function as an arrow function.

const logCase = (clientName, caseNumber) => {
  console.log("Case #" + caseNumber + ": " + clientName + "'s case is now logged.");
};

logCase("John Doe", 12345);

/*
Task 4 : Attendance Tracker 🚀🚀🚀🚀

You’re a teacher tracking student attendance. Write a function called 
`markAttendance` that takes a student’s name and a boolean `isPresent` 
value. If the student is present, log:

"[studentName] is present."

If the student is absent, log:

"[studentName] is absent."

Example:
Input: markAttendance("Amina", true)
Output: "Amina is present."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function markAttendance(studentName, isPresent) {
  if (isPresent) {
    console.log(studentName + " is present.");
  } else {
    console.log(studentName + " is absent.")
  }
}


// Extra Task:
// - Convert the function into a function expression.

const markAttendance = (studentName, isPresent) => {
  if (isPresent) {
    console.log(studentName + " is present.");
  } else {
    console.log(studentName + " is absent.");
  }
};
