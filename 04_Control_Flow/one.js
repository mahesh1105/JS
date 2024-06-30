// Relational or Comparison Operator
// <, >, <=, >=, ==, !=, ===, !==

// if block

// if(2 === 2) {
//     console.log("Both are equal...")
// }

let isUserLoggedin = true

// if-else block
// if(isUserLoggedin) {
//     console.log("User is Logged in...")
// } else {
//     console.log("User is not logged in...")
// }

// if(3 === "3") {
//     console.log("Both Types are Equal...")
// } else {
//     console.log("Both Types are not Equal...")
// }

// if(3 !== "3") {
//     console.log("Both Types are Different...")
// }

const balance = 1000

// Implicit Scope - It is assumed that scope is limited to one line only
// if(balance > 500) console.log("Balance is Greater...") // OK

// Not a Good Practice
// if(balance > 500) console.log("Balance is Greater"), console.log("Need to Check");

// if-else ladder : if-else if-else

// if(balance < 500) {
//     console.log("Balance is less than 500")
// } else if(balance < 750) {
//     console.log("Balance is less than 750")
// } else if(balance < 900) {
//     console.log("Balance is less than 900")
// } else {
//     console.log("Balance is less than 1200")
// }

// Checking Combined statements
let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if(userLoggedIn && debitCard) { // Both must be true - to enter if block
    console.log("User can purchase the things...")
}

if(loggedInFromGoogle || loggedInFromEmail) { // Any of the condition to be true
    console.log("User login is verified...")
}