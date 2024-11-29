// Array map method

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map method is used to creates a new array by applying a given function to each element of the original array
// It transforms each element of the original array into a new value.
// const newNums = myNumbers.map((num) => num + 10)

// console.log(newNums)

// filter method is used to creates a new array containing only the elements from the original array that pass a specific condition
// It won't modify the array, It will simply return the array elements satisfying the given condition OR
// It filters the original array based on the provided condition.
// const newNums2 = myNumbers.filter((num) => num > 5)

// console.log(newNums2)

// Chaining of Methods - Using more methods on top of one method
// Here the result of first method is passed to next method in chain And
// At last method, it will return final result to the conatiner or variable
let finNums = myNumbers.map((item) => item * 10).map((item) => item + 1)

finNums = myNumbers.map((item) => item * 10).map((item) => item + 10).filter((item) => item > 50)

console.log(finNums)

// Note
// Use "filter" when you want to select a subset of elements from an array based on a condition.
// Use "map" when you want to transform each element of an array into a new value.

