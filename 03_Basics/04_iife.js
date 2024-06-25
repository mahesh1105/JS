// Immediately Invoked Function Expression - IIFE
// If you want to execute the function immediately and also want to remove global scope pollution like variables, functions and other declarations....
// Then use IIFE to execute function immediately after definition

(function func() {
    // Named IIFI - Function having name
    console.log(`DB Connected`)
})();

// Where First Parenthesis () denotes function definition
// And other parenthesis () denote function call
// Use semicolon ";" to end the invoke function,, otherwise will give error

( () => {
    // Unnamed IIFI
    console.log(`DB 2 Connected`)
})();

// Important
( (name) => {
    console.log(`My name is ${name}`)
})("Mahesh")

// If you want to write two IIFI, then use semicolon at the end of first IIFI