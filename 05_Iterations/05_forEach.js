// forEach loop

// The forEach() method calls a function for each element in an array.
// It does not return a new array and does not modify the original array.
// It’s commonly used for iteration and performing actions on each array element.

// Array is basically a special type of object
const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach is an element of Array Object
// coding.forEach(function (val) {
//     console.log(val)
// })

// console.log(typeof coding) // Object

// coding.forEach((item) => {
//     console.log(item)
// })

// function printVal(item) {
//     console.log(item)
// }

// Passing function to forEach Element
// coding.forEach(printVal)

// item - contains the array element
// index - contains the index number for that element
// coding - access to whole array - takes whole array into it
// coding.forEach((item, index, coding) => {
//     console.log(item, index, coding)
// })

// Point to Note::
// Values coming from database are mostly in the form of arrays and each element is an object.
// Array of Objects
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

// Prints the whole Array
// console.log(myCoding)

// Using forEach method
// myCoding.forEach((item) => {
//     // Here item have gets access for each object one by one
//     console.log(item)
// })

// Accessing object elements
// myCoding.forEach((item) => {
//     console.log(`Language : ${item.languageName} & File Extension : ${item.languageFileName}`)
// })

// Benefit of using the forEach() loop - it will iterate through all the elements one by one AND
// particular action can be performed on each element of an array

// Means -->
// You have two ways - Either you can use the normal for loop, iterate through each element one by one by specifying the range, i.e. start and end
// and write the action part in the loop (which you want to perform)
// OR just use the forEach() method and pass the function name as an argument to it
// and write the action part in the function body, which will make code more readable and understandable

// Syntax: Array.forEach(func_name)
// Note: forEach method does not return anything, even if you try explicitly (you will get undefined) and it will not modify the original array
// It is basically used for performing some actions on each values which can be printing, iterating and any other actions