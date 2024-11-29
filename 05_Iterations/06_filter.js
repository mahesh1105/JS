// Array Filter Method

const coding = ["js", "py", "rust", "cpp", "java"]

// Note ::
// ** forEach method will never return any values,, even if you try explicitly **
// values will contain nothing,, that's why prints undefined while printing the variable
// const values = coding.forEach((item) => {
//     console.log(item)
//     return item // will not return anything
// })

// console.log(values) // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter will return the values based on the condition
// Implicit return - If you don't opens the scope of the function
// const newNums = myNums.filter((item) => item > 4)

// console.log(newNums) // [5, 6, 7, 8, 9, 10]

// Explicit return - If you opens the scope of function
// const newArray = myNums.filter((item) => {
//     return item > 4
// })

// console.log(newArray) // [5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item)
//     }
// })

// console.log(newNums) // [5, 6, 7, 8, 9, 10]

// Array of Objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

// Prints the whole array
// console.log(books)

// Filter method returns the element based on the condition
// books whose genre is history
let userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks) // Array of 2 Objects whose genre is History

// books which are published in and after year 1995 and whose genre is History
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
// console.log(userBooks) // Array of 1 Object

// Syntax: Array.filter(func_name)
// Note: filter method returns the values based on the given condition, and logic is kept inside the function
// This method does not modify the original array, but it returns the array based on the condition given
// which can be filtering values like - (items > 4)