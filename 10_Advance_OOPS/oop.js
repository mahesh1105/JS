// Object Literal
const user = {
    username: "Mahesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log("Got user data from database...")
        console.log(this.username) // Prints the username
        console.log(this) // Current Context - Prints the whole Object
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// Note: Whenever you are talking about "this", you are talking about the current context
// console.log(this) // {} --> Empty Object

function userDetails(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = userDetails("Mahesh", 10, true)
const userTwo = userDetails("Hello", 24, false)

console.log(userOne) // "Hello", 24, false
console.log(userTwo) // "Hello", 24, false
userTwo.greeting() // Welcome Hello

console.log(userOne.constructor); // [Function: Object]

console.log(this) // {} --> Empty Object

// Both of the console above print the same result, i.e. userTwo data
// Reason: in userDetails function, this indicates the global object - First you are setting global object with 1st detail and then with 2nd detail

// In order to create the separate object, use the new keyword while creating the object

// const userOne = new userDetails("Mahesh", 10, true) // New Instance
// const userTwo = new userDetails("Hello", 24, false) // New Instance

// console.log(userOne) // "Mahesh", 10, true
// console.log(userTwo) // "Hello", 24, false

// console.log(this) // {}

// Two Modes - Strict and Non-Strict
// if you write 'use strict'; then it is strict mode, and some things are not allowed in strict mode,
// i.e. using a variable without declaring it, Using an object without declaring it, Deleting a variable (or object) is not allowed, 
// Deleting a variable (or object) is not allowed (delete func_name), Duplicating a parameter name is not allowed, Writing to a read-only property is not allowed
// if you don't write 'use strict'; then it will be in non-strict mode

// In Non-strict mode,,
// If inside the function, you assign something using 'this' and try to print 'this', then it indicates the global object
// And in Global Scope, it represents module.exports, that is shareable between each module
// module is nothing but any file, we call it module, if we want to get the data from other file then,
// const data = require('file_name')

// In strict mode,,
// Inside the function, 'this' is undefined
// Inside the method, it represent the called object (method, that belongs to class)

// new keyword - 
// Whenever you use 'new' keyword, then new empty object is created everytime and it is called instance
// Constructor function will gets called to initialize the values
// Arguments value gets injected using this keyword
// Then you will get the values inside the variable