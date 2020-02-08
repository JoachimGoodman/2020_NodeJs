// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2

console.log(+numberOne + +numberTwo)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var total = Number(numberOne) + Number(numberTwo)

console.log(total.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var avg = (one + two + three) / 3

console.log(avg.toFixed(5))

// --------------------------------------
// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

var char = letters.charAt(2)
var char = letters[2]

console.log(char)

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!"

// capitalize the J in Javascript

var result = ""
for(i = 0; i < fact.length; i++) {
    if(fact[i] === "j") {
        result += fact[i].toUpperCase()
    } else {
        result += fact[i]
    }
}

console.log(result)
console.log(fact.replace("javascript", "Javascript"))

// --------------------------------------

// this is an object
var computer = {}
