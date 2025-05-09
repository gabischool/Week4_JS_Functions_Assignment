/*

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

// ANSWERS 1
// Task 1: Library Late Fee Calculator

// function calculatelatefee(){
//    const overduedays = prompt("waxd galisa tirada maalinleh dib loo dhigay:");
//    const overduedaysfee = 0.25
//    const totalfee = overduedays * overduedaysfee;
//    console.log('the late fee is $' + totalfee.toFixed(2) + '.');
// }
// calculatelatefee();


/*

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️


// ANSWERS 2

// Task 2 : Favorite Color Finder 

// function findColorMeaning(){
//    const color = prompt('midab noceya jeceshahay:');
//    if (color === 'blue'){
//       console.log('blue: you love calm and peace.');
//       }
//       else if (color === 'red'){
//          console.log('red: you are passionarate and bold.')
//       }
//       else if (color === 'green'){
//          console.log('green: you are connected to nature.')  
//       }
//       else if (color === 'yellow'){
//          console.log('yellow: you radiate happiness and energy.')  
//       }
//       else{
//          console.log('thats a unique choice')
//       }
// } findColorMeaning();




/*

//ANSWERS 3
// Task 3 : Lawyer's Case Log

// function logCase(clientName, caseNumber){
//    console.log('case #' + caseNumber + ':' +clientName + "'s case is now logged.");

// }
// logCase("Mohamed", 12345);

// Extra Task:
// - Rewrite the function as an arrow function.


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

// ANSWERS 4
// Task 4 : Attendance Tracker 🚀🚀🚀🚀

// function markAttendance(studentName, isPresent) {
//    if (isPresent){
//       console.log(studentName + " is persent.");
//    }
//    else{
//       console.log(studentName + " is absent.")
//    }

//    }
// markAttendance("Amina", true);
// markAttendance("mohamed", false);



// Extra Task:
// - Convert the function into a function expression.



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

// ANSWERS 5
// Task 5 : Student Grade Report Generator 🏈🏈🏈🏈

// function calculateAverage(score1, score2, score3) {
//    return (score1 + score2 + score3) / 3;
// }
// function determineGrade(average) {
//    if (average >= 90) {
//       return"A";
//    }
//    else if (average >=80){
//    return "B";
//    }
//    else if (average >= 70){
//       return "C";
//    }
//    else{
//       return "F";
//    }

// }

// function generateReport(studentName, score1, score2, score3) {
//    const average = calculateAverage(score1, score2, score3);
//    const letterGrade = determineGrade(average);
//    return studentName + " - Average Score: " + average.toFixed(2) + ", Grade: " + letterGrade;
// }
// const studentName = prompt("Enter the student's name:");
// const score1 = parseFloat(prompt("Enter the first test score:"));
// const score2 = parseFloat(prompt("Enter the second test score:"));
// const score3 = parseFloat(prompt("Enter the third test score:"));
// const report = generateReport(studentName, score1, score2, score3);
// console.log(report);