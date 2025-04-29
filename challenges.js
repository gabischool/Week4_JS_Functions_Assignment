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

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function calculateLateFee(days){
   const overdueAmount=days*0.25;
console.log(`the late fee is $${overdueAmount}`)
 }
 const message=+prompt('please enter the days ')
 calculateLateFee(message)



// // Extra Task:
// // - Convert the function into a function expression.
 const calculate=function(days){
   const overdueAmount=days*0.25;
console.log(`the late fee is $${overdueAmount}`)
 }
const message1=+prompt('please enter the days ')
 calculate(message1)



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
if(color==='blue'){
    console.log('you love calm and peace')
 }
 else if(color==='red'){
    console.log('you are passionate and bold')
 }
 else if(color==='green'){
    console.log('you are connected to nature')
 }
else if(color==='yellow'){
    console.log('you radiate happiness and energy')
 }
 else{
    console.log('thats a unique color')
 }
 }
 const chooseColor=prompt('please choose a color red,yellow,green or blue')
 findColorMeaning(chooseColor)
// // Extra Task:
// // - Rewrite the function using an arrow function.

 const findcolorMeaning=(color)=>{
    if(color==='blue'){
      console.log('you love calm and peace')
    }
    else if(color==='red'){
       console.log('you are passionate and bold')
    }
    else if(color==='green'){
      console.log('you are connected to nature')
   }
    else if(color==='yellow'){
       console.log('you radiate happiness and energy')
   }
    else{
       console.log('thats a unique color')
   }
}
 const chooseColor1=prompt('please choose a color red,yellow,green or blue')
 findcolorMeaning(chooseColor1)




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

 function logCase(number,name){
   console.log(`Case ${number}:${name}'s case is now logged `)
 }
 const logNumber1=prompt('enter the case number ')
 const logName1=prompt('enter the  client name')
 logCase(logNumber1,logName1)




// Extra Task:
// - Rewrite the function as an arrow function.
 const logcase=(number,name)=>{
    console.log(`Case ${number}:${name}'s case is now logged `)
 
 }
 const logNumber2=prompt('enter the case number ')
 const logName2=prompt('enter the  client name')
 logCase(logNumber2,logName2)

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

 function markAttendance1(name,isPresent){
   isPresent=(isPresent==='true');
  if(isPresent){
       console.log(name +' is present')
    }
    else{
       console.log(name +' is absent')

   }
 }
   const stName1=prompt('name')
    const track1=prompt('true or false')
   
 markAttendance1(stName1,track1)




// Extra Task:
// - Convert the function into a function expression.
 const markAttendance2=function(name,isPresent){
   isPresent=(isPresent==='true');
    if(isPresent){
      console.log(name +' is present')
   }
   else{
      console.log(name +' is absent')

    }
 }
 const stName2=prompt('name')
    const track2=prompt('true or false')
   
 markAttendance2(stName2,track2)

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
const average=function calculateAverage(score1,score2,score3){

   return ((score1+score2+score3)/3).toFixed(2)
   }
   const av=average(100,95,78)
   console.log(av);
    determineGrade=(average)=>{

      if(average>90){
      return('A')}
      else if(average>80 && average<=89){
      return('B')}
      else if(average>70 && average<=79){
      return('C')}
      
      else if (average<70){
      return('F')}
      }
      determineGrade(average)
      
      function generateReport(name,score1,score2,score3){
         const average_Score=average(score1,score2,score3)
         console.log(average_Score);
         const grade=determineGrade(average_Score)
    
         console.log(name +'Average Score :'+average_Score +' grade :'+ grade)
         }
         generateReport(" shukri's ",90,90,100)




      
       
