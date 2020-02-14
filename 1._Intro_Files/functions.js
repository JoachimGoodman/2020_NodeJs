// hoisting
console.log(addition(5, 23))

//test = "test is a test"
// const test
// let test
// var test

// console.log(test)

{
    console.log("this is a simple scope")
}


function addition(a, b) {
    return a + b
}

function introduce() {
    console.log("Nice to meet you")
}

function run() {
    console.log("RUN")
}


function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Spotted a person!")
    whatToDoAfterFindingAPerson()
}

// running the introduction function inside the function
// findPerson(introduce)
findPerson(run)


const aboutMe = (me) => {
    console.log("My hobby is", me.hobby)
}

const me = {
    hobby: "coding"
}

aboutMe(me)

const anotherExample = {
    myFavoriteFunction: () => {
        console.log("This function")
    }
}

anotherExample.myFavoriteFunction()

// exercise 1 ----------------------------------------------------------------------------------------
// create an arrow function that is callled callingLater
// that takes the function calling as an argument
const calling = (name) => {
    return "ring ring ring to " + name
}

// this is an arrow function
// arrow functions are without " this, arguments, super, or new.target keywords "
// they cannot be used as construtors
const callingLater = (name, calling) => {
    console.log(calling(name))
}

callingLater("John", calling)

// callingLater("John", (name) => {
//     return "ring ring ring to " + name
// })
    
// nested functions
function lastThing () {
    function thisIsPossibleInJavascript() {
        console.log("A OK")
        thisIsPossibleInJavascript()
    }
}
lastThing()