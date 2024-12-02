// Array in JS

// Javascript arrays are resizable and can contain a mix of different data types
// Javascript arrays are zero-indexed,, First Element : Index 0 & Last Element : Index (Length-1)
// Javascript array-copy-operations create shallow copies,,
// All standard built-in copy operations with any JS objects create shallow copies, rather than deep copies

// Shallow Copy : A shallow copy of an object is a copy whose properties share the same references 
// (point to same underlying values),, Any changes either to source or to copy,, it may also cause the other object to change too

// Deep Copy : A Deep copy of an object do not share the same references
// When you change either the source or the copy, you are not causing the other object to change too

const myArr = [10, 20, 30, 40, 50]
// console.log(myArr[2]);

const heroes = ["Iron-Man", "Thor", "Superman", "Batman"]
// console.log(heroes[0]);

// Creating the Array Object using the Array Constructor
const arr = new Array(100, 1000, 10000)
// console.log(arr[1]);

// Add values at the end
// myArr.push(60)
// console.log(myArr)

// Remove the last value
// myArr.pop()
// console.log(myArr)

// Add the value at the starting of the array
// Problem - due to this,, rest all values will get shifted
// myArr.unshift(0)
// console.log(myArr)

// Removes the Element at the first index of the array
// myArr.shift()
// console.log(myArr)

// Result : Boolean -- It will check whether the value is present in the array or not
// console.log(myArr.includes(15)) // false
// console.log(myArr.includes(30)) // true

// Result : Integer -- It will give index of the element which is present in the array
// If the element is not present in the array, then it will return -1
// console.log(myArr.indexOf(15)) // -1
// console.log(myArr.indexOf(30)) // 2

// Join the array elements and give a final string
// const newArr = myArr.join()

// console.log(myArr) // [10, 20, 30, 40, 50]
// console.log(newArr) // 10,20,30,40,50
// console.log(typeof newArr) // string

// Method - slice and splice

// Printing Multiple values to the console
// console.log("A ", myArr)

// slice method - begin from 1st Arg and go till 2nd Arg,, but doesn't include 2nd Args
// It does not exclude that part from original array,, original array remains unaffected
const myn1 = myArr.slice(1, 3)

// console.log("B ", myArr)
// console.log(myn1)

// splice method - begin from 1st Arg and go till 2nd Arg,, but it include 2nd Args,,
// also it exclude that part from the original array
const myn2 = myArr.splice(1, 3)

// console.log("C ", myArr)
// console.log(myn2)

// Declaring a Dynamic Array
// let myColors = new Array()

// Declaring a Static Array
let myColors = []

// Later Elements can be added to the Array using push() method