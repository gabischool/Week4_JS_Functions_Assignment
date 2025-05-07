/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

*/


/*
Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/


// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function calculateLateFee(overdue_days){
   const per_day = 0.25;
   const total = per_day*overdue_days;
   return total;

}


const user = parseFloat(prompt("Enter overdue day:"));
const fee = calculateLateFee(user);

if(isNaN(user) || user <= 0){
               console.log("Invalid number of overdue days.");
            }else{
            
               console.log(`The late fee is ${fee}`)
            }  
         
         


// Extra Task:
// - Convert the function into a function expression.


const lateFee = function(overdue_days){
   const per_day = 0.25;
   const total = per_day*overdue_days;
   return total;
}



const userInput = parseFloat(prompt("Enter overdue day:"));
const totalFee = calculateLateFee(userInput);

if(isNaN(userInput) || userInput<= 0){
               console.log("Invalid number of overdue days.");
            }else{
            
               console.log(`The late fee is ${totalFee}`)
            } 


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


const findColorMeaning = function(){
   const name = prompt("Enter your nanme: ")
   const color = prompt("Enter yory favorite color:");
   if(color == "Blue"|| color == "blue"){
   console.log(`${name}, you love calm & peace.` )
   }
   else if(color == "Red" || color == "red"){
      console.log(`${name}, You are passionate and bold.`)
   }
   else if(color == "Green" || color == "green"){
   console.log(`${name}, You are connected to nature.`)
   }
      else if(color == "Yellow" || color == "yellow"){
      console.log(`${name}, You radiate happiness and energy.`)
   }
      else{
         console.log("That's a unique choice!")
      }
}

findColorMeaning()


// Extra Task:
// - Rewrite the function using an arrow function.

   const findlorMeaning = ()=>{
   const name = prompt("Enter your nanme: ")
   const color = prompt("Enter yory favorite color:");
   if(color == "Blue"|| color == "blue"){
   console.log(`${name}, you love calm & peace.` )
   }
   else if(color == "Red" || color == "red"){
      console.log(`${name}, You are passionate and bold.`)
   }
   else if(color == "Green" || color == "green"){
   console.log(`${name}, You are connected to nature.`)
   }
      else if(color == "Yellow" || color == "yellow"){
      console.log(`${name}, You radiate happiness and energy.`)
   }
      else{
         console.log("That's a unique choice!")
      }
}

findlorMeaning()

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
   const logCase = function(name, caseNumber){
         console.log(`${name, caseNumber}, case is now logged.`)
   }
   const naMe = prompt("Enter your name:");
   const CaSENumber = prompt("Enter your case number:");
   const caSe= logCase(naMe, CaSENumber)
   console.log(caSe)



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

   const markAttendance = function(name,isPresent){
         if(isPresent === true){
            console.log(`${name}, is present`)
         }else if(isPresent === false){
            onsole.log(`${name}, is absent`)
         }
   }
   markAttendance("Abdiqani Hashi", true);

// Extra Task:
// - Convert the function into a function expression.

      
   const marktendance = (name,isPresent)=>{
      if(isPresent === true){
         console.log(`${name}, is present`)
      }else if(isPresent === false){
         onsole.log(`${name}, is absent`)
      }
   }
      marktendance("Abdiqani Hashi", false);

/*
      
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports 
for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) 
as parameters and returns the average of those scores.

2. Write another function called `determineGrade` that takes the average score as a parameter and 
  returns the letter grade based on the following rules:
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

4. Finally, use the `prompt` function to input the student’s name and three test scores,
  and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.*/


const calculateAverage = (numberONe, NumberTwo, NumberThree)=>{
   const totalAverage = (numberONe + NumberTwo + NumberThree)/3;
   return totalAverage;

}




const determineGrade = (aveRage)=>{
   if(aveRage >= 90){
      return "A";
   }else if(aveRage >= 80 && aveRage >=89){
      return "B";
   }else if(aveRage >= 70 && aveRage >= 79){
      return "C"
   }
   else{
      return "F"
   }

}

const generateReport = (Name,num01, num02,num03)=>{
   const average = calculateAverage(num01,num02,num03);
   const grade = determineGrade(average)
   return `${Name}, Average score: ${average}, Grade :${grade}`
   
}

//Adding validation to make sure if the programm behaves correctly.To prevent invalid input.
const validateToscore = (number_score)=>{
   if(isNaN(number_score)){
      console.log(`${number_score}, must be a number.`);
   }else if(number_score <0){
      console.log(`${number_score}, cannot be negative.`);
   }
   else if(number_score > 100){
      console.log(`${number_score}, it must be under 100.`)
   }
   
}



