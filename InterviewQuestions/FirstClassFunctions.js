// Function Statement | Function Declaration | Function Definition
function a() {
    console.log("Hi Mahesh...");
}
a();

// Function Expression
// Storing the functions inside the variable
const b = function() {
    console.log("Function Called...");
}
a();

// Anonymous Function
// Function with no name - It will give syntax error

// SyntaxError: Function statements require a function name
// function() {

// }

// These types of functions can be stored inside some variable and then be called
// OR it can be invoked using IIFE

// Named Function Expression
let k = function xyz() {
    console.log("xyz called...");
}
k();

// ReferenceError: xyz is not defined
// As xyz is stored inside a variable so it cannot be accessible globally, but inside xyz function only, it can be accessible
xyz();

let r = function xyz() {
    console.log("xyz called...");
    console.log(xyz);
}
r();

// Difference between parameters and arguments
// Values passed to the function during the function call is known as arguments
// Values recieved by the function during its definition is known as parameters

function hello(a, b) { // Parameters
    console.log(a, b);
}

hello(10, 20); // Arguments

// First Class Functions | First Class Citizens
// Ability to use function like values
// Like: function passed as an argument to another function or function returned by another function

// Arrow Functions
// It is introduced in JS in ES6 or EcmaScript 2015
let f = () => {
    console.log("Hi Mahesh..");
}
f();