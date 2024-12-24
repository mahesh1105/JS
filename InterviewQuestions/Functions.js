// Functions in JS

// 1. What is Function declaration?
// function declaration is a way to define a named function using the function keyword
// Function declarations are hoisted, means they are moved to the top of the code and always available in current scope
// Functions are accessible before its definition, because of hoisting
function greet() {
    console.log("Greeting...");
}

greet()

// 2. What is Function Expression?
// Assigning the function inside a variable is known as FE
// It can be named or anonymous

// Named FE
let square = function func(num) {
    return num*num
}

console.log(square(5))

// Anonymous FE - Function with no name - can be seen in RHS side
let circle = function (rad) {
    return Math.PI*rad*rad
}

console.log(circle(7));

// Note: Anonymous function can be assigned to the variable or can be passed as the callback

// 3. What are First Class Functions?
// Function can be used as the variable, means passing the function as the callback or returning the function
function displaySquare(fn) {
    console.log(`Square is ${fn(5)}`);
}

// Note: During call, only function name is passed
displaySquare(square);

// 4. What is IIFE?
// Immediately Invoked Function Expression
// Calling the Function just after the definition of the function

// Named IIFE
(function myName() {
    console.log('Mahesh...')
})();

// Anonymous IIFE
(function() {
    console.log('Mahesh...')
})();

// Note: Before creating IIFE, use semicolon after last line of code before that IIFE

// Question:
(function(x) {
    return (function(y) {
        // First it will search x in inner scope, if not found then in outer scope - Closure Concept
        console.log(x); // 10
    })(2)
})(10)

// Closure: The ability of the function to access the variables or functions that are lexically out of scope
// Closures are created when a function is created inside another function

// Function Scope
let num1=100, num2=3, name="Mahesh"

function multiply() {
    return num1*num2
}

console.log(multiply()); // 30

function getScore() {
    // Shadowing will happen
    let num1=20, num2=10

    function add() {
        console.log(`${name} scored ${num1+num2}`);
    }

    return add()
}

getScore()

// 7. Function Scope - O/P based Question

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000)
// }

// Output:
// 0 1 2 3 4

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000)
// }

// Output:
// 5 5 5 5 5

// In case of var, hoisting will happen, and it is moved to the top of code
// First loop finishes its execution, that time, i = 5 and that is shared across each block inside for-loop

// In case of let, hositing will happen, but it will stay in temporal dead zone
// First loop finishes it execution, but i is different for each block - as for each block let will create separate memory block

funcName() // Mahesh

function funcName() {
    console.log("Mahesh")
}

// funcName() // Mahesh

// Note: Function are also hoisted like variables, but it is different, unlike var variable, it is initialized to undefined unless defined
// and it can be seen as property of window object, like function also, can be seen as property of window object
// and it contains the reference of the whole function (complete code) even before its definition
// That's the reason, we can call the function before its definition and it will give same output

funcName2()

function funcName2() {
    console.log(x); // undefined
    var x=10; // It is hoisted in the local scope of function EC
    console.log("Mahesh") // Mahesh
}

// Q9: Function Hoisting - Output based Question

var x=21 // present in global scope

let fun = function() {
    console.log(x) // undefined
    var x=10 // present in local scope of function
}

fun()

// Reason: It will not search outside the function, as x is already present inside the function and
// it is hoisted and moved to the top of the function definition and before definition it is undefined

// Note: It will search outside the scope, if variable definition is not present inside the scope, if present then hoisting case will happen

var x=21

let fun2 = function() {
    console.log(x) // Error: cannot access x before initialization
    let x=10
}

// fun2()

// Reason: let is hoisted in temporal dead zone and as the definition is present inside the function, it will not search outside the scope
// Instead, it will give error

// ---------------------------------------------------------------

var x=21

let fun3 = function() {
    console.log(x) // 21
}

fun3()

// Reason: x is not present in current scope, so it will search outside the current scope

// ---------------------------------------------------------------------

// Params vs Arguments
// Values passed during function call are arguments
// Values recieved during function definition are Parameters

function sqr(num) { // Parameters
    return num*num
}

console.log(sqr(5)); // Arguments

// Spread vs Rest Operator
// -----------------------

let arr = [10, 20]

// function multiply(...num) { // Rest Operator
//     return num[0]*num[1]
// }

function multiply(num1, num2) {
    return num1+num2
}

console.log(multiply(...arr)) // Spread Operator

// Params vs Arguments - Output based Question

// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// }

const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers)
}

fn(1, 2, 3, 4, 5, 6)

// Output -- Error: A rest parameter must be last in a parameter list.
// Otherwise conflicts will come like, how many values that rest operator should take

// ------------------------------------------------------------------------

// Callback Function
// A Callback function is a function passed as an argument to another function

// Example
// function greeting(name) {
//     alert(`Hi ${name}`); // Generate the alert on browser window
// }

// function processInput(callback) {
//     let name = prompt('Enter your name') // Generate a prompt in browser and ask for name
//     callback(name)
// }

// processInput(greeting) // Callback

// Example
// In below code, event will be generated if you click anywhere in browser window
// Then it will listen that event and execute the callback
// document.addEventListener('click', () => {
//     console.log('Hi Mahesh');
// })

// -----------------------------------------------------------------------------------

// Arrow Functions
// Function defined with no function keyword, parameter list and arrow operator and whole body in curly braces
// and its reference is stored in the variable so that it can be called using that variable name

// Normal Function
let add = function() {
    console.log('Hi')
}

// Arrow Function
let addt = () => {
    console.log('Hi')
}

// Can also be written as -- Implicit return -- If no curly braces -- no need to use return keyword
// If curly braces used then return keyword must be used for returning any value
let addtt = () => 'Hi'

console.log(addtt())

// Arguments - without receiveing any args, these can be printed inside the function
function fnx() {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

// fnx(1, 2, 3, 4)

// Same will not work with arrow function - arguments must be defined explicitly before using it
// Error: browser window
// No Error in Node Environment, printing 4 keys with some garbage values
let fnc = () => {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

fnc(1, 2, 3, 4)

// 'this' keyword
let user = {
    username: 'Mahesh',
    rc1: () => {
        console.log(`Hi ${this.username}`); // Hi undefined
    },
    rc2() {
        console.log(`Hello ${this.username}`); // Hello Mahesh
    }
}

user.rc1()
user.rc2()

// Reason: Inside arrow function, this refers to global Object
// and Inside normal function, this refers to caller Object, i.e. user