console.log("Hello, World!");
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
/*


/*Function calculateLateFee(){
const latefeeperday= 0.25
const numberofoverduedays=Number(prompt("Enter the number of overdue days:"))
const latefee=Number(numberofoverduedays*latefeeperday)
console.log(`The latefee is $${latefeeperday}.`)
calculateLateFee();

}/*
// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

fuction calculateLateFee(){
    const latefeeperday= 0.25
    const numberofoverduedays=Number(prompt("Enter the number of overdue days:"))
      const latefee=Number(numberofoverduedays*latefeeperday)
         console.log(`The late fee is $${latefee}.`
}
      calculateLateFee();
      
      // Extra Task:
// - Convert the function into a function expression.

function calculateLateFee() {
   const latefeeperday = 0.25;
   const numberofoverduedays = Number(prompt("Enter the number of overdue days:")); 

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
function findColorMeaning() {
   const color = prompt("Enter your favorite color:");
   switch (color) {
      case "Blue":
         console.log("Blue: You love calm and peace.");
         break;
      case "Red":
         console.log("Red: You are passionate and bold.");
         break;
      case "Green":
         console.log("Green: You are connected to nature.");
         break;
      case "Yellow":
         console.log("Yellow: You radiate happiness and energy.");
         break;
      default:
         console.log("That's a unique choice!");
   }
}
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
function logCase(clientName, caseNumber) {
   console.log(`Case #${caseNumber}: ${clientName}'s case is now logged.`);
}


