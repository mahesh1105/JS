// let a = 100
// const b = 200
// var c = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30

    // First variable is checked in local scope,, if its there in local scope,, will get executed
    // Next Level, it will search for global scope,, if its there then,, will execute that
    // Otherwise will throw error
    // console.log(a) // 10
}

// console.log(a) // 100
// console.log(b) // 200
// console.log(c) // 30

// Note::
// Using var, variable can be redeclared and it will not throw any error AND last declaration is considered

// This is the problem with var - It can be accessed outside the local scope
// This will create the bug while coding
// console.log(c) // c can be accessed outside the local scope

// Variable declared under curly braces have local scope AND
// Variable declared outside any block, i.e. Function, if-else, loop have global scope

// for(let i=0 ; i<3 ; i++) {
//     console.log(i)
// }

// This variable can't be accessible outside the local scope - As it is declared using let
// console.log(i)

// NOTE:
// Scope in IDE in Node environment is different from the console window in browser

// Nested Scopes
function one() {
    const username = "Mahesh"

    function two() {
        const website = "Google"

        console.log(username)
    }

    // website is not accessible outside the local scope
    // console.log(website) // inaccessible - as you are trying to access the variable outside the scope

    two()
}

// Calling the function one()
// one()

// Point to Note:
// When some error will encounter at any line,, further lines will never execute,,
// As it will break the normal flow of the program

// If you try to access "addOne" function before its definition, 
// it will still work without any error and warnings
// console.log(addOne(5))

// Creating a Function which will simply add one to input value and return it
function addOne(num) {
    return num+1
}

// Creating a Function which will add two to input value and return it
// "addTwo" is known as Expression or Variable which can hold any anything
// In JS, Variables are powerful enough to hold function, objects, ...
const addTwo = function(num) {
    return num+2
}

// If you try to access "addTwo" variable before its initialization,
// here comes the error, can't access 'addTwo' before its initialization
// console.log(addTwo(5))

// That is the major difference between two types of function declaration