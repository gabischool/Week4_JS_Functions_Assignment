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

function calculateLateFee(){
   const user =prompt("Enter late days")
   const lateFee=0.250 
   const total=user*lateFee
    console.log(`The late fee is $${total}`)

}
calculateLateFee();



// Extra Task:
// - Convert the function into a function expression.



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

function findColorMeaning(){
   const UserInput=prompt("Whats Your favourite color?")
   if(UserInput=="Blue"){
      console.log("You love calm and peace.")
   }
   else if(UserInput=="Red"){
      console.log("You are passionate and bold.")
   }
   else if(UserInput=="Green"){
      console.log("You are connected to nature.")
   }
   else if(UserInput=="Yellow"){
      console.log("You radiate happiness and energy.")
   }
   else{
      console.log("That's a unique choice!")
   }
}

findColorMeaning();

// Extra Task:
// - Rewrite the function using an arrow function.



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

const logCase =function( number,name){
   console.log(`Case #${number}: ${name}'s case is now logged`)
}
logCase(12345,"Ahmed")

// Extra Task:
// - Rewrite the function as an arrow function.

const logCase =(number,name) =>{
   console.log(`Case #${number}: ${name}'s case is now logged`)
}
logCase(12345,"Ali")


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



function markAttendance(studentName, isPresent){
   if (isPresent === true){
      console.log(`${studentName} is present`)
   }
   else{
      console.log(`${studentName} is absent`)
   }

}
markAttendance("Deka",true)
markAttendance("Muna",false)



// Extra Task:
// - Convert the function into a function expression.




//STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

//You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:


//1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.
 
function calculateAverage(n1, n2, n3) {
  const add = (n1 + n2 + n3) / 3
  return add
}

console.log(calculateAverage(77, 50, 60))


/*2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70
   */

   function determineGrade(calculateAverage){
      if(calculateAverage>=90){
         return "A"
      }
      else if(calculateAverage>=80 && calculateAverage<=89){
         return "B"
     
      }
      else if(calculateAverage>=70 && calculateAverage<=79){
         return "C"
      }
      else{
         return "F"
      }
   }
  console.log(determineGrade(69))


/*3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"
     */

     function generateReport(sName,n1,n2,n3){

      const average=calculateAverage(n1,n2,n3)
      const grade=determineGrade(average)
      return `${sName} -Average Score:${average}, Grade: ${grade}`

     }
     console.log(generateReport("Muna",90,20,90))

//4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

function displayGeneateReport(){
   const stdName=prompt("Input Student name:")
   const score1=Number(prompt("Enter score1"))
   const score2=Number(prompt("Enter score2"))
   const score3=Number(prompt("Enter score3"))
   const average=calculateAverage(score1,score2,score3)
   const grade=determineGrade(average)

         return `${stdName} -Average Score:${average}, Grade: ${grade}`

}
console.log(displayGeneateReport())
/*
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




