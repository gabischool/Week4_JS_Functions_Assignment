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
function calculateLateFee(days){
   return days * 0.25;
}

// console.log("$" + calculateLateFee(10).toFixed(2));

const userInput1 = prompt("please Enter overdue days")
const Result = calculateLateFee(userInput1).toFixed(2);
console.log("The late fee is $" + Result);

// Extra Task:
// - Convert the function into a function expression.
let calculateLateFee1 = function(days){
   const fixedChargePerDay = 0.25;
   return days * fixedChargePerDay;
}
const Result1 =calculateLateFee1(userInput1).toFixed(2);
console.log("The late fee is $" + Result1);




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
function findColorMeaning(color){
   if(color === "Blue"){
      console.log("You love calm and peace.")
   }else if (color === "Red"){
      console.log("You are passionate and bold.")
   }else if (color === "Green"){
      console.log("You are connected to nature.")
   }else{
      console.log("That's a unique choice!")
   }
}

const UserInput = prompt("please Enter your Favorite Color");
findColorMeaning(UserInput);




// Extra Task:
// - Rewrite the function using an arrow function.
const findColorMeaning1 =(color) =>{
   if(color === "Blue"){
      console.log("You love calm and peace.")
   }else if (color === "Red"){
      console.log("You are passionate and bold.")
   }else if (color === "Green"){
      console.log("You are connected to nature.")
   }else{
      console.log("That's a unique choice!")
   }
}

const UserInput1 = prompt("please Enter your Favorite Color");
findColorMeaning1(UserInput1);




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
function logCase(name, caseNumner){
   console.log(`Case # ${caseNumner}: ${name}'s case is now logged`)
}
logCase("geedi", 154325);


// Extra Task:
// - Rewrite the function as an arrow function.
const logCase1 =(name, caseNumner)=>{
   console.log(`Case # ${caseNumner}: ${name}'s case is now logged`);
}
logCase1("dalmar", 9786);


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
function markAttendance(name, isPresent){
   if(isPresent){
      console.log(`${name} is present.`);
   }else{
      console.log(`${name} is absent.`);
   }
}
markAttendance("Amina", false)



// Extra Task:
// - Convert the function into a function expression.
const markAttendance1= function(name, isPresent){
   if(isPresent){
      console.log(`${name} is present.`);
   }else{
      console.log(`${name} is absent.`);
   }
}
markAttendance1("Amina", true)



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
// Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.
function calculateAverage(test1, test2 , test3){
   return (test1 + test2 + test3)/ 3;
}
//check if it working propably 
//console.log(calculateAverage(90, 65, 100));

// 2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
//    - "A" for average scores of 90 and above
//    - "B" for scores between 80 and 89
//    - "C" for scores between 70 and 79
//    - "F" for scores below 70

function determineGrade(averarageScore){
   if(averarageScore >= 90){
      return "A";
   }else if(averarageScore >= 80){
      return "B";
   }
   else if(averarageScore >= 70){
      return "C";
   }else{
      return "F";
   }
}
//check if it working propably 
//console.log(determineGrade(calculateAverage(90, 65, 100)));

// 3. Write a third function called `generateReport` that:
//    - Takes a student's name and three test scores as parameters.
//    - Uses `calculateAverage` to calculate the average score.
//    - Uses `determineGrade` to find the letter grade.
//    - Returns a full report string in this format:
//      "[StudentName] - Average Score: [average], Grade: [letterGrade]"

// function generateReport(StudentName, test1, test2, test3){

const  generateReport = () => {

   const StudentName = prompt("Please enter the Student name ");
   const test1 = Number(prompt("Please enter the first Score "));
   const test2 = Number(prompt("Please enter the second Score "));
   const test3 = Number(prompt("Please enter the third Score "));

   const Avarage = calculateAverage(test1, test2, test3);
   const grade = determineGrade(Avarage);
   console.log(`${StudentName} - Average Score: ${Avarage.toFixed(2)}, Grade: ${grade}`)
}

//generateReport("Arman Moham", 90, 65, 100);

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

// ask the user if want to continue or not...
let WantContinue = true;
while(WantContinue){
   generateReport();
   WantContinue = confirm("Do you want Continue");

}