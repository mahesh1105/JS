// In this file, we will learn about arrow functions and this keyword

const user = {
    username: "Mahesh",
    price: "1000",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website...`)
        console.log(this) // Current Context
    }
}

// Calling the welcomeMessage() function which is the property of an Object
// user.welcomeMessage()
// user.username = "Xyz"
// user.welcomeMessage()

// When we run the below command in Browser, Then the global object in browser is "window object" - default object
// Because of that only, we can access all the events or properties of windows object in the browser
// But same if we run in Node environment, we will get empty object
// console.log(this) // {} --> Node Environment

// function func() {
//     let username = "Mahesh"
//     console.log(this) // it will give all the events under global object - works with function only
//     console.log(this.username) // undefined, "this" will work with object only
// }

// func()

// const func = function() {
//     let username = "Mahesh"
//     console.log(this) // Global Object
//     console.log(this.username) // undefined
// }

// func()

// Arrow Functions
// const func = () => {
//     let username = "Mahesh"
//     // console.log(this) // {} -> Empty Object
//     // console.log(this.username) // undefined
// }

// func()

// Arrow Function - "Explicit return"
// const addNum = (num1, num2) => {
//     return num1 + num2
// }

// Arrow Function - "Implicit return", no need to specify the return keyword
// Curly Braces {} are optional here
const addNum = (num1, num2) => num1 + num2

// console.log(addNum(5, 7))

// Note - While using curly braces {}, return keyword must be used to return any value
// But if parenthesis () are used then return keyword is not necessary
const sum1 = (num1, num2) => { return num1 + num2 }
const sum2 = (num1, num2) => ( num1 + num2 )

// If u want to return an object via arrow function, using implicit return
const myFunc = () => ({ username: "Mahesh", id: 1234 })
// Above function is returning the value, if want to see, need to do console.log()
// console.log(myFunc())