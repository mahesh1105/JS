// Functions in JS

// Function Definition with no Parameters
function myFunc() {
    console.log("Hello My Function")
}

// myFunc()

// function addTwoNumbers(num1, num2) {
//     console.log(`Sum: ${num1+num2}`) // String Interpolation
// }

// Function Definition with two Parameters
function addTwoNumbers(num1, num2) {
    return num1+num2
}

const result = addTwoNumbers(20, 30)

// console.log("Result: ", result) // Normal
// console.log(`Result: ${result}`)   // String Interpolation

// Parameters - which is being written in Function Definition
// Arguments  - which is passed to the Function during call

function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter the username...")
        return
    }

    return `${username} just logged in...`
}

// const res = loginUserMessage("Mahesh")
// console.log(res)

// const res2 = loginUserMessage()
// console.log(res2)

// Rest Operator - Handles any number of arguments passed during function call
// OR when you don't have any idea about number of arguments
// Create a function that accepts any number of parameters

// Handling only one value argument
function calculateCartValue(num) {
    return num
}

// console.log(calculateCartValue(100)) // 100
// console.log(calculateCartValue(100, 200, 400)) // 100

// Handling multiple values at a time
function calculateCartValue2(...num) {
    return num
}

// console.log(calculateCartValue2(100, 200, 400, 500))

// If First and Second Parameters to be stored separately and rest all in another variable
function calculateCartValue3(num1, num2, ...num) {
    return num
}

// console.log(calculateCartValue3(100, 200, 400, 500, 1000))

// Defining the Object
const user = {
    username: "Mahesh",
    id: 1234
}

// Handling Objects through a Function
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)
}

// Passing Object to Function
// handleObject(user)

// Passing Object to Function - Creating at same time
// handleObject({
//     username: "sam",
//     id: 1212
// })

// In JS,, When we pass object and array as an argument to function call,,
// Then it is accepted as a refernce in Function Definition

// Creating the Array
const myArr = [100, 200, 400, 800]

function getArrayValue(arr) {
    // return the second value
    return arr[1]
}

// console.log(getArrayValue(myArr))
// console.log(getArrayValue([10, 20, 30, 40, 50]))

// Defining function - Other way
const myFunction = function() {
    let a = 20
    var b = 50

    return a+b
}

console.log(myFunction())