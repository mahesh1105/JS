// If we declare objects using constructor then it will create singleton object and
// if we create like literals then it will not create singleton object

// Singleton
// object.create()

// objects literals
const JsUser = {
    name: "Mahesh",
    "full name": "Mahesh Saini",
    age: 24,
    location: "Haryana",
    email: "mahesh123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Object value can be accessed using two methods - dot(.) OR square brackets []
// recommended using square brackets []
// console.log(JsUser.email);
// console.log(JsUser[email]); // Error - Keys are treated as string - JsUser["email"]
// console.log(JsUser["email"]) // compiler treats key as string
// console.log(JsUser["full name"]) // for explicitly defined string,, need to follow this syntax

// Object is basically a key-value pair, where we can define our own key
// But in case of arrays, default key is there, i.e. 0, 1, 2...

// compiler treats the key as string, no matters how we write
// value can be anything, number, string, arrays or even objects

// Interview Problem
// create a symbol using Symbol data type and use it as a key in object
// use square brackets and inside it give symbol name [], else if use directly, it will treat it as string
const mySym = Symbol("key1")

const myObj = {
    name: "MS",
    id: 2942,
    [mySym]: "myValue"
}

// printing typeof object elements
// console.log(typeof myObj.name)   // string
// console.log(typeof myObj.id)     // number
// console.log(typeof myObj[mySym]) // string

// Printing typeof mySym
// console.log(typeof mySym) // symbol

// Update or Overwrite the values
// myObj.name = "Mahesh Saini"

// myObj.id = 1234
// Freeze the object, after that no more changes can be done to it
// Object.freeze(myObj)
// myObj.id = 4567 // gets ignored by the compiler

// Prints the whole object
// console.log(myObj)

// Functions
// Creating new properties for myObj Object
myObj.greeting = function() {
    console.log("Hello JS User")
}

// Creating new properties for myObj Object
myObj.greet = function() {
    // String interpolation
    console.log(`Hello JS User, ${this.name}`)
}

// Function Call
// myObj.greeting()
// myObj.greet()