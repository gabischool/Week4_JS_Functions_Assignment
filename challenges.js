
//function declaration
function addNumbers(a, b) {
   return a + b;
}

console.log(addNumbers(4,6))


//function Expression

const add = function(a, b) {
   return a + b;
 };
 
 console.log(add(5, 3));


 //Arrow function

 const sum = (a, b) => a + b;

console.log(sum(10, 7)); 

//Function Expression with Parameters

const greet = function(name) {
   console.log("Hello, " + name + "!");
 };
 
 greet("Imran");


 //Function Expression with Return Value

 const adds = function(a, b) {
   return a + b;
 };
 
 let result = adds(4, 3); 
 console.log(result);