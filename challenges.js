// functions

// Task 1 — Greet User
function greetUser(name){
    return `Hello ${name}`
}
console.log(greetUser("Fadumo"))
console.log(greetUser("Aisho"))

// Task 2 — Tip Calculator 💵

function calculateTip(bill,tipPercent){
    return bill * tipPercent / 100
}

console.log(calculateTip(20, 10))


//Task 3 — Celsius to Fahrenheit 

function celsiusToFahrenheit(c){
    return (c * 9/5) + 32
}

console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(celsiusToFahrenheit(25))



// Task 4 — Is Adult? 
function isAdult(age){
    if(age > 18){
        console.log(true)
    }else{
        console.log(false)
    }
}
isAdult(30)
isAdult(16)
isAdult(7)
isAdult(50)


