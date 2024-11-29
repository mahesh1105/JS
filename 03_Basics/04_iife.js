// Immediately Invoked Function Expression - IIFE
// If you want to execute the function immediately and also want to remove global scope pollution like variables, functions and other declarations....
// Then use IIFE to execute function immediately after definition

(function func() {
    // Named IIFE - Function having name
    console.log(`DB Connected`)
})();

// Where First Parenthesis () denotes function definition
// And other parenthesis () denote function call
// Use semicolon ";" to end the invoke function,, otherwise will give error

( () => {
    // Unnamed IIFE
    console.log(`DB 2 Connected`)
})();

// Important
( (name) => {
    console.log(`My name is ${name}`)
})("Mahesh")

// If you want to write two IIFE, then use semicolon at the end of first IIFE
// No need to put it at the end of last IIFE, it will work, but if semi-colon is missing in between,
// then it will give error, last IIFE is not a function