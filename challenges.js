// Task 1: Library Late Fee Calculator 🚀🚀🚀🚀
function calculateLateFee() {
  const days = prompt("Enter number of overdue days:");
  const fee = Number(days) * 0.25;
  console.log(`The late fee is $${fee.toFixed(2)}.`);
}

// Extra Task: Function Expression
const calculateLateFeeExpression = function() {
  const days = prompt("Enter number of overdue days:");
  const fee = Number(days) * 0.25;
  console.log(`The late fee is $${fee.toFixed(2)}.`);
};

// Task 2: Favorite Color Finder 🚀🚀🚀🚀
function findColorMeaning() {
  const color = prompt("What is your favorite color?").toLowerCase();
  switch (color) {
    case "blue":
      console.log("Blue: You love calm and peace.");
      break;
    case "red":
      console.log("Red: You are passionate and bold.");
      break;
    case "green":
      console.log("Green: You are connected to nature.");
      break;
    case "yellow":
      console.log("Yellow: You radiate happiness and energy.");
      break;
    default:
      console.log("That's a unique choice!");
  }
}

// Extra Task: Arrow Function
const findColorMeaningArrow = () => {
  const color = prompt("What is your favorite color?").toLowerCase();
  switch (color) {
    case "blue":
      console.log("Blue: You love calm and peace.");
      break;
    case "red":
      console.log("Red: You are passionate and bold.");
      break;
    case "green":
      console.log("Green: You are connected to nature.");
      break;
    case "yellow":
      console.log("Yellow: You radiate happiness and energy.");
      break;
    default:
      console.log("That's a unique choice!");
  }
};

// Task 3: Lawyer's Case Log 🚀🚀🚀🚀
function logCase(clientName, caseNumber) {
  console.log(`Case #${caseNumber}: ${clientName}'s case is now logged.`);
}

// Extra Task: Arrow Function
const logCaseArrow = (clientName, caseNumber) => {
  console.log(`Case #${caseNumber}: ${clientName}'s case is now logged.`);
};

// Task 4: Attendance Tracker 🚀🚀🚀🚀
function markAttendance(studentName, isPresent) {
  if (isPresent) {
    console.log(`${studentName} is present.`);
  } else {
    console.log(`${studentName} is absent.`);
  }
}

// Extra Task: Function Expression
const markAttendanceExpression = function(studentName, isPresent) {
  console.log(`${studentName} is ${isPresent ? "present" : "absent"}.`);
};

// STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

// 1. Calculate average of 3 test scores
function calculateAverage(score1, score2, score3) {
  return ((score1 + score2 + score3) / 3).toFixed(2);
}

// 2. Determine letter grade from average
const determineGrade = (average) => {
  average = Number(average);
  if (average >= 90) return "A";
  else if (average >= 80) return "B";
  else if (average >= 70) return "C";
  else return "F";
};

// 3. Generate student report
function generateReport(studentName, score1, score2, score3) {
  const average = calculateAverage(score1, score2, score3);
  const grade = determineGrade(average);
  return `${studentName} - Average Score: ${average}, Grade: ${grade}`;
}

// 4. Prompt user for input and display report
/*
const name = prompt("Enter student name:");
const s1 = Number(prompt("Enter score 1:"));
const s2 = Number(prompt("Enter score 2:"));
const s3 = Number(prompt("Enter score 3:"));
console.log(generateReport(name, s1, s2, s3));
*/

// Extra Credit: Generate reports for multiple students
/*
const numberOfStudents = Number(prompt("How many students?"));
for (let i = 0; i < numberOfStudents; i++) {
  const name = prompt(`Student ${i + 1} name:`);
  const s1 = Number(prompt("Enter score 1:"));
  const s2 = Number(prompt("Enter score 2:"));
  const s3 = Number(prompt("Enter score 3:"));
  console.log(generateReport(name, s1, s2, s3));
