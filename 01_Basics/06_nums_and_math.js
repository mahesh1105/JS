// Here score is number by default
const score = 400
// console.log(score)
// console.log(typeof score)

// But if we want to explicitly define the datatype
const balance = new Number(100)
// console.log(balance)
// console.log(typeof balance)

// Converting a number to string by using toString() function
// console.log(balance.toString())
// console.log(typeof balance.toString())
// Now, as the number is converted to string, so it also has the properties of string
// console.log(balance.toString().length)

// This function is used to show the number of digits after point
// This type of things are used when you are calculating something or designing Ecom Application
// console.log(balance.toFixed(2))

const otherNumber = 123.456
// This function will tell upto how much digit precision is needed
// console.log(otherNumber.toPrecision(3)) // 123
// console.log(otherNumber.toPrecision(4)) // 123.5
// console.log(otherNumber.toPrecision(2)) // 1.2e+2

const hundreds = 1000000
// Convert the number to US standards 
// console.log(hundreds.toLocaleString())
// Convert the number to Indian Standards
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++
// Javascript Math Library is so powerful, as it contains a wide range of functions

// console.log(Math);
// console.log(Math.abs(-5));

// Rounding off the number
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// ceil - Top Value,, floor - low value
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.sqrt(8));
// console.log(Math.pow(2, 4));

// console.log(Math.min(3, 5, 2, 9));
// console.log(Math.max(3, 5, 9, 2, 55));

// Generate a random number between 0 & 1
// console.log(Math.random());
// If you want to generate the number between 0 and 10, then
// console.log(Math.random() * 10);
// If you want to generate the number between 1 and 11, then
// console.log((Math.random() * 10) + 1);

// Generate the random number between 'min' & 'max'
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)