// Data Types -- Primitive or Non-Primitive

// Primitive -- 7 Types :: String, Number, Boolean, null, undefined, Symbol, BigInt

const str = "Mahesh";

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  //false

const bigNumber = 7537468139476273245n;  //BigInt

// console.log(typeof str);            // string
// console.log(typeof score);          // number
// console.log(typeof isLoggedIn);     // boolean
// console.log(typeof outsideTemp);    // object
// console.log(typeof userEmail);      // undefined
// console.log(typeof id);             // symbol
// console.log(typeof bigNumber);      // bigint

// Reference (Non-Primitive) -- Array, Objects, Functions

const heros = ["Superman", "Batman", "Spiderman"];

let myObj = {
    name: "mahesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World...");
}

console.log(typeof heros);      // object
console.log(typeof myObj);      // object
console.log(typeof myFunction); // function -- function object

// Javascript is dynamically typed language -- type will be decided after the assignment of value