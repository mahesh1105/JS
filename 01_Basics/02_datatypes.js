"use strict"; // Treat all JS code as newer version

// To Generate the pop up window on the browser
// alert(3 + 3) // we are using Node JS not browser

/*
console.log(3
    +
    3) // Code reusability should be high
*/

// Primitive DataTypes
// Number => -(2^53 - 1) and (2^53 - 1)
// Bigint => Suffix - n,, store bigger number
// String => '', "", `` => Single Quotes, Double Quotes, Backticks
// Boolean => true/false
// Null => standalone value
// Undefined => value is not assigned yet
// Symbol => unique

let num = 20
let n = BigInt(200000)
let str = "Mahesh"
let isReady = true
let k = null
let val
let sym1 = Symbol("id")

console.log(typeof num)     // Number
console.log(typeof n)       // BigInt
console.log(typeof str)     // String
console.log(typeof isReady) // Boolean
console.log(typeof k)       // Object
console.log(typeof val)     // Undefined
console.log(typeof sym1)    // Symbol


// Symbol
// Each Symbol is unique even if created with the same description
let sy1 = Symbol('identifier');
let sy2 = Symbol('identifier');
console.log(sy1 === sy2); // false

// Once a Symbol is created, it cannot be changed, means it is immutable
// Mutable => Which can be modified or altered after creation
// Immutable => Whose state or value cannot be changed after its creation
// If Symbol is const then it can't be reassigned
sy1 = Symbol('ms') // variable is referring to a new Symbol, but the old Symbol still exists

console.log(sy1.description); // ms

// While creating the symbol, you can provide the optional descripion (a string) for debugging purpose
const sym = Symbol('debugInfo');
console.log(sym.description); // "debugInfo"

// Symbols can be used as keys for object properties
// Ideal for adding metadata or private-like fields to object
const symKey = Symbol('key'); // symKey is referring to symbol key
const obj = { [symKey]: 'value', "Mahesh": 10 };
console.log(obj[symKey]); // "value"
// When you try printing the keys, it will not print the symbol key, keeping it as private
console.log(Object.keys(obj)); // [ 'Mahesh' ]

// Symbols are not enumerable in for...in
for (const key in obj) {
    console.log(key); // Mahesh
}

// Symbols allow libraries and frameworks to define properties 
// without risking name clashes with user-defined properties.
const librarySymbol = Symbol('libraryMethod');
const userSymbol = Symbol('libraryMethod'); // No collision

const objx = {
  [librarySymbol]: () => 'Library logic',
  [userSymbol]: () => 'User logic',
};

console.log(objx[librarySymbol]()); // "Library logic"
console.log(objx[userSymbol]()); // "User logic"


// console.log(typeof null) // object
// console.log(typeof undefined) // undefined
// console.log(typeof NaN); // Number

// Objects - Later talk about it