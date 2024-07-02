// If string contains some value - It is assumed to be true
// If string is empty - It is treated as false
const userEmail = ""

// if(userEmail) {
//     console.log("Got user Email")
// } else {
//     console.log("User Email not found")
// }

// Falsy Values
// false, 0, -0, 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}

// if(0n) {
//     console.log("Execute")
// }

// if(-0) {
//     console.log("Execute")
// }

// if(userEmail.length === 0) {
//     console.log("String is empty")
// }

// if([]) { // [] - Truthy Value
//     console.log("Array is Empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty")
// }

// console.log(typeof false); // boolean

// Note::
// false == 0  --> true --> boolean == Number
// false == '' --> true --> boolean == String
// 0 == ''     --> true --> Number == String

// false === 0  --> false --> boolean === Number
// false === '' --> false --> boolean === String
// 0 === ''     --> false --> Number === String

// Nullish Coalescing Operator (??): null undefined
// It is basically used for cheking the type-safety,,
// if we are fetching the value from database and sometimes undefined or null gets assigned to the variable
// Then we use this (??) operator which basically ensures that variable will not contain null or undefined
// First valid value got assigned to the variable other than null or undefined

let val1;
// console.log(val1)        // undefined
// val1 = 5 ?? 10           // 5 --> First Value
// val1 = null ?? 20        // 20
// val1 = undefined ?? 50   // 50
// val1 = null ?? 10 ?? 20  // 10

// console.log(val1)

// Ternary Operator
// condition ? true : false

// let value = 100
// value >= 50 ? console.log("Greater than 50") : console.log("Less than 50")