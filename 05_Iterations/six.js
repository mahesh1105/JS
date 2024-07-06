// Array Filter Method

// const coding = ["js", "py", "rust", "cpp", "java"]

// ** forEach method will never return any values,, even if you try explicitly **
// values will contain nothing,, that's why prints undefined while printing the variable
// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter will return the values based on the condition
// Implicit return - If you don't opens the scope of the function
// const newNums = myNums.filter((item) => item > 4)

// Explicit return - If you opens the scope of function
// const newArray = myNums.filter((item) => {
//     return item > 4
// })

// console.log(newNums)
// console.log(newArray)

// const newNums = []

// myNums.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item)
//     }
// })

// console.log(newNums)

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

// books whose genre is history
let userBooks = books.filter((bk) => bk.genre === 'History')

// books which is published after year 2000
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')

console.log(userBooks)