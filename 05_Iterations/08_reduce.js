// Array reduce method

const myNums = [1, 2, 3, 4, 5]

// This method will basically takes one callback function,, inside that we take accumulator - which will store the return value
// And currentValue will store each number at a time (one by one)
// Starting value of accumulator is passed outside the function separated by comma
// and final result is returned by accumulator at the end

// Using Function Expressions
let myTotal = myNums.reduce(function (accumulator, currentValue) {
    // console.log(`acc: ${accumulator} and currVal: ${currentValue}`)
    return accumulator + currentValue
}, 0 )

// console.log(myTotal) // 15

// Using Arrow functions and implicit return
myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(myTotal) // 15

const shoppingCart = [
    {
        courseName: "JavaScript",
        coursePrice: 2999
    },
    {
        courseName: "C++",
        coursePrice: 1999
    },
    {
        courseName: "Python",
        coursePrice: 999
    },
    {
        courseName: "Web Dev",
        coursePrice: 9999
    }
]

// To Do - Sum of course prices
// using forEach Method
// let sumOfPrices=0

// shoppingCart.forEach((item) => {
//     sumOfPrices += item.coursePrice
// })

// console.log(sumOfPrices) // 15996

// Using reduce method with arrow function and implicit return
sumOfPrices = shoppingCart.reduce((accumulator, currentValue) => accumulator + currentValue.coursePrice, 0)

// console.log(sumOfPrices) // 15996