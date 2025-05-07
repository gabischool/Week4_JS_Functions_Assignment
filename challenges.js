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
  let overdueDays = prompt("Enter number of overdue days");
  let calculateFee = 0.25 * overdueDays;
  console.log(`the late fee is $${calculateFee}`);
}

calculateLateFee();
// Extra Task:
// - Convert the function into a function expression.

const exp_calculateLateFee = function () {
  let overdueDays = prompt("Enter number of overdue days");
  let calculateFee = 0.25 * overdueDays;
  console.log(`the late fee is $${calculateFee}`);
};

exp_calculateLateFee();
/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other colgor: "That's a unique choice!"


Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const findColorMeaning = function () {
  let color = prompt("What is your favorite color");
  if (color === "Blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "Red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "Green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "Yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};

findColorMeaning();

// Extra Task:
// - Rewrite the function using an arrow function.
const arr_findColorMeaning = () => {
  let color = prompt("What is your favorite color");

  if (color === "Blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "Red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "Green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "Yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};

arr_findColorMeaning();

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

const logCase = function (caseNumber, clientName) {
  console.log(`case #${caseNumber}: ${clientName}'s case is now logged`);
};
logCase(12345, "jamal abdi");
// Extra Task:
// - Rewrite the function as an arrow function.
const arr_logCase = (caseNumber, clientName) =>
  console.log(`case #${caseNumber}: ${clientName}'s case is now logged`);
arr_logCase(32323, "Ali farah");
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
  if (isPresent === true) {
    console.log(`${studentName} is present`);
  } else {
    console.log(`${studentName} is absent`);
  }
}
markAttendance("jamal", true);
// Extra Task:
// - Convert the function into a function expression.
const exp_markAttendance = function (studentName, isPresent) {
  if (isPresent === true) {
    console.log(`${studentName} is present`);
  } else {
    console.log(`${studentName} is absent`);
  }
};
exp_markAttendance("Ali", false);

// STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

// You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

// 1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}
calculateAverage(90, 90, 100);
// 2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
//    - "A" for average scores of 90 and above
//    - "B" for scores between 80 and 89
//    - "C" for scores between 70 and 79
//    - "F" for scores below 70

function determineGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else {
    return "F";
  }
}
determineGrade(90);

// 3. Write a third function called `generateReport` that:
//    - Takes a student's name and three test scores as parameters.
//    - Uses `calculateAverage` to calculate the average score.
//    - Uses `determineGrade` to find the letter grade.
//    - Returns a full report string in this format:
//      "[StudentName] - Average Score: [average], Grade: [letterGrade]"

function generateReport(name, score1, score2, score3) {
  const avg = calculateAverage(score1, score2, score3);
  const grade = determineGrade(avg);
  console.log(`${name} - Average: ${avg}, Grade: ${grade}`);
}

generateReport("jamal", 90, 96, 98, 99);
// 4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

// Example:
// User Input:
// Name: Amina
// Scores: 85, 90, 78

// Output:
// "Amina - Average Score: 84.33, Grade: B"

// Extra Credit:
// - Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
// - Use an arrow function for at least one of the functions.

const numberOfStudents = Number(prompt("How many students are in your class?"));
for (let i = 1; i <= numberOfStudents; i++) {
  alert(`📋 Entering data for Student ${i}`);
  const name = prompt("What's the student's name?");
  const score1 = Number(prompt(`Enter first test score for ${name}:`));
  const score2 = Number(prompt(`Enter second test score for ${name}:`));
  const score3 = Number(prompt(`Enter third test score for ${name}:`));

  generateReport(name, score1, score2, score3);
}
