// Data Types -- Primitive or Non-Primitive

// Primitive -- 7 Types :: String, Number, Boolean, null, undefined, Symbol, BigInt
// Number - int, float, double
// String - string, char
// Boolean - bool

const str = "Mahesh";

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// Symbol always creates a unique and immutable value, even if the descriptions passed to the Symbol() function are identical
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  //false

// Symbols:
/*
1. Uniqueness of Symbols:
Each time Symbol() is called, it creates a new and unique symbol, regardless of the description provided.
The description is just a label for debugging or logging purposes—it doesn't affect the identity of the symbol.

2. Purpose of Symbol:
The primary purpose of Symbol is to create unique property keys for objects, ensuring no accidental property name collisions.

3. Comparison:
Symbols are only equal if they are the exact same reference. Even if two symbols have the same description, they are distinct entities.
*/

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

// An Object have properties and each of them are associated with some value
let myObj = {
    name: "mahesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World...");
}

// console.log(typeof heros);      // object
// console.log(typeof myObj);      // object
// console.log(typeof myFunction); // function -- function object

// Javascript is dynamically typed language -- type will be decided at the runtime,,
// this language doesn't have predefined data type like others

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// Stack Memory -- Always get copy of the data
// Heap Memory -- Always get reference of the data,, 
// that means whatever changes we do here will reflect in original values as well

let myName = "Mahesh"
let anotherName = myName // Here copy of myName is stored in anotherName

myName = "Hitesh"

// console.log(myName) // Hitesh
// console.log(anotherName) // Mahesh

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // Here reference of userOne is stored in userTwo
// means where userOne is pointing in the Heap,, userTwo will point to the same memory block

userTwo.email = "maheshsaini@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);