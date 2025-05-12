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
//Task 1: is 
function calculateLateFee() {
  const day =prompt("Enter number of overdue days:");
  const fee = day * 0.25
  console.log(`The late fee is$ ${fee}`)
}

calculateLateFee();


// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function sayHello() {
  console.log("Hello!")
}
sayHello()



// Extra Task:
// - Convert the function into a function expression.
const Hello = function() {
  console.log("Hello!")
};
Hello()



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
//tast2 is 
function findColorMeaning() {
  var color = prompt("Enter your favorite color")
  color = color.toLowerCase();

  if (color === "blue") {
    console.log("Blue: You love calm and peace")
  } else if (color === "red") {
    console.log("Red: You are passionate and bold")
  } else if (color === "green") {
    console.log("Green: You are connected to nature")
  } else if (color === "yellow") {
    console.log("Yellow: You radiate happiness and energy")
  } else {
    console.log("That's a unique choice!");
  }
}

findColorMeaning();

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function salaan() {
  console.log("Hello!")
};
salaan()


// Extra Task:
// - Rewrite the function using an arrow function.
const salan = () => {
  console.log("Hello!");
};
salan()

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
//tast 3
function logCase() {
  const clientName = prompt("Enter the client's name:");
  const caseNumber = prompt("Enter the case number:");
  console.log(`Case #${caseNumber} : ${clientName}'s case is now logged`);
}

logCase();


// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function hi() {
  console.log("Hello!")
};
hi()



// Extra Task:
// - Rewrite the function as an arrow function.
const himan = () => {
  console.log("Hello!");
};
himan()

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
//tast 4
function markAttendance(){
  let studentName = prompt("Enter the student's name")
  let isPresentInput = prompt("Is the student present? (yes/no)")
  let isPresent = isPresentInput.toLowerCase() === "yes";
  if (isPresent) {
    console.log(studentName + " is present")
  } else {
    console.log(studentName + " is absent")
  }
}
markAttendance()

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function ardey(){
  console.log("waxaan ahey ardey")
}
ardey()


// Extra Task:
// - Convert the function into a function expression.
const ardey = function() {
  console.log("waxaan ahey ardey");
};

ardey();



/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70

3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"

4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.
*/
function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
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

function generateReport(name, s1, s2, s3) {
  var avg = calculateAverage(s1, s2, s3);
  var grade = determineGrade(avg);
  console.log(name + " - Average Score: " + avg + ", Grade: " + grade);
}

var name = prompt("Enter student name:");
var s1 = parseFloat(prompt("Enter score 1:"));
var s2 = parseFloat(prompt("Enter score 2:"));
var s3 = parseFloat(prompt("Enter score 3:"));

generateReport(name, s1, s2, s3);
