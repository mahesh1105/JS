// Map, Filter and Reduce, ForEach
// Above all are array methods that are used to iterate over the array to perform transformation and computation

// Map
// Map is used to transform the values of original array without modifying the original array

// let arr = [10, 20, 30, 40, 50]
// let result = arr.map((num, i, nums) => {
//     return num*5 + i
// })

// console.log(result);

// Note:
// arr.map(callback) --> callback = function(num, i, nums)
// Callback can take upto 3 paramaters, it is our choice to provide any number of parameters
// num = individual element of the array one by one
// i = index of each element
// nums = whole array, on which operation is going on

// Filter
// Filter is used to filter the array values based on some condition
// It will return those values which satisfies the given criteria

// let brr = [1, 2, 3, 4, 5]
// let result = brr.filter((num) => {
//     // Condition
//     return num > 2;
// })

// console.log(result);

// Note:
// If any element satisfies the condition, it is pushed to the array

// Reduce
// It reduces down the array values to single value - that may be the sum of its elements

// let crr = [10, 20, 30, 40, 50]
// let result = crr.reduce((acc, value, i, crr) => {
//     return acc+value
// }, 0)

// console.log(result);

// Note:
// It requires 2 parameter, one is callback function and another is initial value
// Also, Callback requires four parameters -> acc, value, i, arr
// acc - result of the previous computation, used to store the sum of elements
// value - array individual value, one at a time, i - index of the current element, crr - whole array on which operation is going on

// ------------------------------------------------------------------------------------------

// Creating all the methods from scratch

// 1. Polyfill for map()
// ---------------------

// arr.map((num, i, arr) => {})
// Array.prototype.myMap = function(callback) {
//     let temp = []
    
//     for (let i = 0; i < this.length; i++) {
//         temp.push(callback(this[i], i, this))
//     }

//     return temp
// }

// let myArr = [100, 200, 300, 400, 500, 1000]

// let myResult = myArr.myMap((num, i, myArr) => {
//     return num*10
// })

// console.log(myResult);

// 2. Polyfill for filter()
// ------------------------

// arr.filter((num, i, arr) => {})
// Array.prototype.myFilter = function(callback) {
//     let temp = []

//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)) {
//             temp.push(this[i])
//         }
//     }

//     return temp
// }

// let myArr = [10, 20, 30, 40, 50, 100]

// let myResult = myArr.myFilter((num, i, myArr) => {
//     if(num%20 === 0) {
//         return num
//     }
// })

// console.log(myResult);

// 3. Polyfill for reduce()
// ------------------------

// arr.reduce((acc, val, i, arr) => {}, initVal)
// Array.prototype.myReduce = function(callback, initVal) {
//     let val = initVal;

//     for (let i = 0; i < this.length; i++) {
//         // val = callback(val, this[i], i, this)
//         // if user forgot to provide the initVal, then the first element shall be considered as initVal
//         val = val ? callback(val, this[i], i, this) : this[i]
//     }

//     return val;
// }

// let arr = [10, 10, 10, 10]

// let myResult = arr.myReduce((acc, val, i, arr) => {
//     // if you print accumulator inside it, each time you get different value - sum of values one by one
//     return acc+val
// }, 0)

// console.log(myResult);

// Question 1: map() vs forEach()

// let myArr = [10, 20, 30, 40, 50]

// const mapResult = myArr.map((val) => {
//     return val+10
// })

// console.log(mapResult) // [20, 30, 40, 50, 60]

// const forEachResult = myArr.forEach((val) => {
//     return val+10
// })

// console.log(forEachResult) // undefined

// Difference: map will return the new array with transformed values but forEach will not return any array
// Instead for each can be used to modify the original array, but it will not return any array

// const forEachResult2 = myArr.forEach((val, i) => {
//     myArr[i] = val+10
// })

// console.log(forEachResult2) // undefined
// console.log(myArr); // [20, 30, 40, 50, 60]

// Also, forEach doesn't return anything, so it can't be chained, but map will return a new array
// so it can be chained with filter and later filter can also be chained

// Question 2:
let students = [
    { name: "Mahesh", rollNumber: 31, marks: 100 },
    { name: "Alex", rollNumber: 10, marks: 50 },
    { name: "Abhi", rollNumber: 4, marks: 80 },
    { name: "Akash", rollNumber: 2, marks: 40 }
];

// (A). Return All the student name in Capital Letters

// using map:
// let resultName = students.map((val) => {
//     return val.name.toUpperCase()
// })

// console.log(resultName);

// using for loop:
// let finRes = []

// for (let i = 0; i < students.length; i++) {
//     finRes.push(students[i].name.toUpperCase())
// }

// console.log(finRes);

// using forEach:
// let temp = []

// students.forEach((val) => {
//     temp.push(val.name.toUpperCase())
// })

// console.log(temp);

// (B). Return only details of those students who scored more than 60

// using filter:
// let result = students.filter((val) => {
//     return val.marks > 60
// })

// console.log(result);

// using for loop:
// let temp = []

// for (let i = 0; i < students.length; i++) {
//     if(students[i].marks > 60) {
//         temp.push(students[i])
//     }
// }

// console.log(temp);

// using forEach:
// let finRes = []

// students.forEach((val) => {
//     if(val.marks > 60) {
//         finRes.push(val)
//     }
// })

// console.log(finRes);

// (C). Marks more than 60 and Roll Number is greater than 15

// using filter:
// const result = students.filter((val) => {
//     return val.marks > 60 && val.rollNumber > 15
// })

// console.log(result);

// (D). Find the sum of marks of all the students
// const finMarks = students.reduce((acc, val) => {
//     return acc+val.marks
// }, 0)

// console.log(finMarks);

// (E). Return only the names of the students who scored more than 60

// using forEach:
// let temp = []

// students.forEach((val) => {
//     if(val.marks > 60) {
//         temp.push(val.name)
//     }
// })

// console.log(temp);

// Note: forEach and for can be used interchangably

// using filter and map:
// let finalNames = students.filter((val) => {
//     return val.marks>60
// }).map((val) => {
//     return val.name
// })

// console.log(finalNames);

// (F). Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const finMarks = students.map((stu) => {
    if(stu.marks < 60) {
        stu.marks += 20 // Update the student marks by giving 20 marks grace
    }
    return stu
}).filter((stu) => {
    return stu.marks > 60
}).reduce((acc, stu) => {
    return acc + stu.marks
}, 0)

console.log(finMarks);