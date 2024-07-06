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

// item - contains the array elements
// index - conatins the index number for that element
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