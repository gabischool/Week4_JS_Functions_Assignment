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

let  calculateLateFee= prompt("enter the number of days");


function calculateLateFee(days) {
  let fee = days * 0.25; 
  console.log("The late fee is $" + fee.toFixed(2)); 
}


calculateLateFee(Number(fee));















// Extra Task:
// - Convert the function into a function expression.

let daysLat = prompt(" enter the number of days you are late:");

const calculateLateFee = function(days) {
  let fee = days * 0.25; 
  console.log("The late fee is $" + fee.toFixed(2)); 
};


calculateLateFee(Number(daysLat));





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
let colors = prompt("Enter your favorite color:");

if (colors === "blue")
{
  console.log("You like calm and peace.");
  
} 

else if (colors === "red")
{
  console.log("You are bold and passionate.");
  
} else if (colors === "green") {
  
  console.log("You love nature.");
  
} else if (colors === "yellow") {
  
  console.log("You are full of energy and joy.");
} else {
  
  console.log("That's a cool and unique color!");
}







// Extra Task:
// - Rewrite the function using an arrow function.

let color = prompt("Enter your favorite color:");


const findColorMeaning = (color) => {
  if (color === "blue") {

    console.log("You like calm and peace.");

  } else if (color === "red") {

    console.log("You are bold and passionate.");

  } else if (color === "green") {

    console.log("You love nature.");

  } else if (color === "yellow") {

    console.log("You are full of energy and joy.");

  } else {
    console.log("That's a cool and unique color!");

  }
};


findColorMeaning(color);



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
  console.log("Case #" + caseNumber + ": " + clientName + " case is now logged.");
}

logCase("John Doe", 12345);





// Extra Task:
// - Rewrite the function as an arrow function.
const showCase = (clientName, caseNumber) => {
  console.log("Case #" + caseNumber + ": " + clientName + " case is now logged.");
};





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

function markAttendance(name, isPresent) {

  if (isPresent) {

    console.log(`${name} is present.`);

  } else {

    console.log(`${name} is absent.`);
  }
}

markAttendance("zakaria nimcan", true);





// Extra Task:
// - Convert the function into a function expression.

const markAttendance = function(name, isPresent) {
  if (isPresent) {

    console.log(`${name} is present.`);

  } else {

    console.log(`${name} is absent.`);
  }
};






/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}


2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70

   function determineGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else return "F";
}


3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"

     function generateReport(name, score1, score2, score3) {
  let avg = calculateAverage(score1, score2, score3);
  let grade = determineGrade(avg);
  console.log(`${name} - Average Score: ${avg.toFixed(2)}, Grade: ${grade}`);
}


4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"
let name = prompt("Magaca ardayga?");
let s1 = Number(prompt("Score 1?"));
let s2 = Number(prompt("Score 2?"));
let s3 = Number(prompt("Score 3?"));

generateReport(name, score1, score2, s3);


Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.

*/


function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}

function determineGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else return "F";
}

function generateReport(name, score1, score2, score3) {
  let avg = calculateAverage(score1, score2, score3);
  let grade = determineGrade(avg);
  console.log(`${name} - Average Score: ${avg.toFixed(2)}, Grade: ${grade}`);
}

const Name = prompt("enter the student name");
const s1 = Number(prompt("Score 1"));
const s2 = Number(prompt("Score 2"));
const s3 = Number(prompt("Score 3"));

generateReport(Name, score1, score2, score3);





