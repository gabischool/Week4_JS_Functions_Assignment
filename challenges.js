// /*
// Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

// You are working at a library and need to calculate late 
// fees for overdue books. Write a function called `calculateLateFee` 
// that takes the number of overdue days as input and calculates 
// the fee ($0.25 per day). Prompt the user to input the
// number of overdue days.

// Log the result as:

// "The late fee is $[amount]."

// Example:
// User Input: 10
// Output: "The late fee is $2.50."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function calculateLateFee(){
   const overdueDay = Number(prompt("Input the number of overdue days")) 
   const costPerDay = 0.25; // waxaan sameeyay varibale "costPerDay" oo ihaya qiimaha "0.25"
   const fee = overdueDay * costPerDay; // waxaan sameeyay variable "fee" oo iga cawinaya inaa soo saaro total-ka
   console.log(`The late fee is $${fee}.`) // waxaan uga yeeray console-ka
}

calculateLateFee(); // waxaan u yeeray function-ka si aan u ogaado shaqada

// // Extra Task:
// // - Convert the function into a function expression.

// const calculateLateFee = function(){
//    const overdueDay = Number(prompt("Input the number of overdue days")) // waxaan sameeyay variable ii haya prompt
//    const costPerDay = 0.25; // waxaan sameeyay varibale "costPerDay" oo ihaya qiimaha "0.25"
//    const fee = overdueDay * costPerDay; // waxaan sameeyay variable "fee" oo iga cawinaya inaa soo saaro total-ka
//    console.log(`The late fee is $${fee}.`) // waxaan uga yeeray console-ka
// }

// calculateLateFee(); // waxaan u yeeray function-ka si aan u ogaado shaqada

// /*
// Task 2 : Favorite Color Finder 🚀🚀🚀🚀

// You are designing a game that asks players for their favorite color. 
// Write a function called `findColorMeaning` that takes a color as input 
// (prompt the user) and logs the following meanings:

// - "Blue: You love calm and peace."
// - "Red: You are passionate and bold."
// - "Green: You are connected to nature."
// - "Yellow: You radiate happiness and energy."
// - For any other color: "That's a unique choice!"

// Example:
// User Input: "Red"
// Output: "Red: You are passionate and bold."
// */

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function findColorMeaning(){
   const favoriteColor = prompt("Enter Your Favorite Color"); // halkaan waxaa ku hubinayaa user-ka wuxuu galinayo si' aan ugu soo saaro wax
   if(favoriteColor === "Blue"){ // halkaan waxaa ubinayaa hadii user-ka Blue galiyo maxaan usoo saaraa
      console.log("Blue: You love calm and peace."); // halkaan markii u Blue galiyo usoo saaraa
   } else if(favoriteColor === "Red"){ // halkaan waxaa ubinayaa hadii user-ka Red galiyo maxaan usoo saaraa
      console.log("Red: You are passionate and bold."); // halkaan markii u REd galiyo usoo saaraa
   } else if(favoriteColor === "Green"){ // halkaan waxaa ubinayaa hadii user-ka Green galiyo maxaan usoo saaraa
      console.log("Green: You are connected to nature.") // halkaan markii u Green galiyo usoo saaraa
   } else if(favoriteColor === "Yellow"){ // halkaan waxaa ubinayaa hadii user-ka Yellow galiyo maxaan usoo saaraa
      console.log("Yellow: You radiate happiness and energy.")  // halkaan markii u yellow galiyo usoo saaraa
   } else { // halkaan waxaa ubinayaa hadii user-ka haduu galiyo max kale maxaan usoo saaraa
      console.log("That's a unique choice!"); // halkaan jadib markuu wax kale aliyo wax kale usoo saraa
   }
}

findColorMeaning(); // halkaan waxaa uga yeeray Function-ka

// // Extra Task:
// // - Rewrite the function using an arrow function.

// const findColorMeaning = () => {
//    const favoriteColor = prompt("Enter Your Favorite Color"); // halkaan waxaa ku hubinayaa user-ka wuxuu galinayo si' aan ugu soo saaro wax
//    if(favoriteColor === "Blue"){ // halkaan waxaa ubinayaa hadii user-ka Blue galiyo maxaan usoo saaraa
//       console.log("Blue: You love calm and peace."); // halkaan markii u Blue galiyo usoo saaraa
//    } else if(favoriteColor === "Red"){ // halkaan waxaa ubinayaa hadii user-ka Red galiyo maxaan usoo saaraa
//       console.log("Red: You are passionate and bold."); // halkaan markii u REd galiyo usoo saaraa
//    } else if(favoriteColor === "Green"){ // halkaan waxaa ubinayaa hadii user-ka Green galiyo maxaan usoo saaraa
//       console.log("Green: You are connected to nature.") // halkaan markii u Green galiyo usoo saaraa
//    } else if(favoriteColor === "Yellow"){ // halkaan waxaa ubinayaa hadii user-ka Yellow galiyo maxaan usoo saaraa
//       console.log("Yellow: You radiate happiness and energy.") // halkaan markii u yellow galiyo usoo saaraa
//    } else { // halkaan waxaa ubinayaa hadii user-ka haduu galiyo max kale maxaan usoo saaraa
//       console.log("That's a unique choice!"); // halkaan jadib markuu wax kale aliyo wax kale usoo saraa
//    }
// }

// findColorMeaning(); // halkaan waxaa uga yeeray Function-ka

// /*
// Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

// You’re a lawyer, and you’ve been assigned to organize your case files. 
// Write a function called `logCase` that takes the client's name and 
// the case number as parameters. For each case, log:

// "Case #[caseNumber]: [clientName]'s case is now logged."

// Example:
// Input: logCase("John Doe", 12345)
// Output: "Case #12345: John Doe's case is now logged."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function logCase (caseNumber, clientName){
   const CaseMessage = `Case #${caseNumber}: ${clientName}'s case is now logged.`; // halkaan waxaa u diyaariyay inay noqoto jumlad la akhrin karo
   console.log(CaseMessage); // halkaan waxaa soo dabacay message-ka case is now logged
}

logCase(2039, "Duraan-Ali"); // halkaan waxaa uga yeeray Function-ka waxaana siiyay arguments

// // Extra Task:
// // - Rewrite the function as an arrow function.

// const logCase = (caseNumber, clientName) =>{
//    const CaseMessage = `Case #${caseNumber}: ${clientName}'s case is now logged`; // halkaan waxaa u diyaariyay inay noqoto jumlad la akhrin karo
//    console.log(CaseMessage); // halkaan waxaa soo dabacay message-ka case is now logged
// }

// logCase(2039, "Duraan Ali"); // halkaan waxaa uga yeeray Function-ka waxaana siiyay arguments

// /*
// Task 4 : Attendance Tracker 🚀🚀🚀🚀

// You’re a teacher tracking student attendance. Write a function called 
// `markAttendance` that takes a student’s name and a boolean `isPresent` 
// value. If the student is present, log:

// "[studentName] is present."

// If the student is absent, log:

// "[studentName] is absent."

// Example:
// Input: markAttendance("Amina", true)
// Output: "Amina is present."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function markAttendance(studentName, isPresent){
   
   if(isPresent){ // halkaan waxaa hubinayaa inay true tahay
      console.log(`${studentName} is present`); // halkaan waxaa soo sarayaa markay true tahay oo ah is present
   }else{ // halkaan waxaa hubinayaa inay false tahay
      console.log(`${studentName} is absent`); // halkaan waxaa soo sarayaa markay false tahay oo ah is absent
   }
}

markAttendance("Duraan", true); // halkaan waxaa uga yeeray Function-ka

// // Extra Task:
// // - Convert the function into a function expression.

// const markAttendance = (studentName, isPresent) =>{
//    if(isPresent){ // halkaan waxaa hubinayaa inay true tahay
//       console.log(`${studentName} Is Present`); // halkaan waxaa soo sarayaa markay true tahay oo ah is present
//    }else{ // halkaan waxaa hubinayaa inay false tahay
//       console.log(`${studentName} Is Absent`); // halkaan waxaa soo sarayaa markay false tahay oo ah is absent
//    }
// }

// markAttendance("Khalid", false); // halkaan waxaa uga yeeray Function-ka

// /*
// STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

// You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

// 1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

// 2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
//    - "A" for average scores of 90 and above
//    - "B" for scores between 80 and 89
//    - "C" for scores between 70 and 79
//    - "F" for scores below 70

// 3. Write a third function called `generateReport` that:
//    - Takes a student's name and three test scores as parameters.
//    - Uses `calculateAverage` to calculate the average score.
//    - Uses `determineGrade` to find the letter grade.
//    - Returns a full report string in this format:
//      "[StudentName] - Average Score: [average], Grade: [letterGrade]"

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
// */

function calculateAverage(score1, score2, score3){
   const test = (score1 + score2 + score3); // variable "test" sameeyay saan iskugu daro score-ska
   const average = test / 3; // variable "average" sameeyay saan u soo saaro cel-celiska
   return average; // dib ugu noqo ayaan ku dhahay halkaan
}

console.log(calculateAverage(90, 95, 85)); // halkaan waxaa ugu yeeray function sidoo kale waxaa kusoo dabacay console

function determineGrade(average){
   if(average >= 90){ // halkaan waxaa sameeyay hadii ay ka weyn tahay ama le'egtahay 90 sii A
      return "A"; // halkaan waxaa siiyay A
   }else if(average >= 80 && average <= 89){ // halkaan waxaa sameeyay hadii ay ka weyn tahay ama le'egtahay 80 iyo hadii ay ka yartahay ama le'egtahay 89 sii B
      return "B"; // halkaan waxaa siiyay B
   }else if(average >= 70 && average <= 79){ // halkaan waxaa sameeyay hadii ay ka weyn tahay ama le'egtahay 70 iyo hadii ay ka yartahay ama le'egtahay 79 sii C
      return "C"; // halkaan waxaa siiyay C
   }else if(average < 70){ // halkaan waxaa sameeyay hadii ay ka yar tahay 70 sii F
      return "F"; // halkaan waxaa siiyay F 
   }
}

determineGrade(calculateAverage(90, 95, 85)); // halkaan waxaa uga yeeray Function-ka si garde-ka avareg-ka loo soo saaro

const generateReport = () =>{
   const StudentName = prompt("Enter Sudent Name") // halkaan waxaa user ka ka qaadayaa Magaca ardayga

   const score1 = Number(prompt("Enter Score 1")); // halkaan waxaa user-ka ka qaadayaa Score 1-ka number kaliyanaa ayaa la galin karaa
   const score2 = Number(prompt("Enter Score 2")); // halkaan waxaa user-ka ka qaadayaa Score 2-ka number kaliyanaa ayaa la galin karaa
   const score3 = Number(prompt("Enter Score 3")); // halkaan waxaa user-ka ka qaadayaa Score 3-ka number kaliyanaa ayaa la galin karaa

   const average = calculateAverage(score1, score2, score3); // halkaan waxaa ku xisaabiyay avaerage-ka
   const grade = determineGrade(average); // halkaana waxaa ku xisaabiyay grade-ka

   console.log(`${StudentName} - Avarage score ${average}, Grade ${grade}`); // halkaan waxaa ugu yeeray dhamaan, iskuna daray si ay u noqdaan jumlo dhamystiran oo la akhrin karo
}

generateReport(); // halkaan waxaa uga yeeray Function-ka