// for in loop

// Object
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

// variable key - will hold only the key of the array elements
// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`)
// }

// Array
const myArray = ["js", "rb", "py", "java", "cpp"]

// variable key - will hold only the key of the array elements
// for (const key in myArray) {
//     console.log(`${key} : ${myArray[key]}`)
// }

// So the major difference between for...in and for...of loop is that only,,
// for...of loop, variable will store key-value pair, and
// for...in loop, iterable variable will store key only,, using that key, values can be printed

// Note: Map is not iterable

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// It will not show anything - No error also
// for (const key in map) {
//     console.log(key)
// }