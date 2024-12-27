// Currying in JS
// Currying is a functional programming technique in JS in which a function is transformed into a sequence of functions, each taking a single argument
// Example fn(a, b) to fn(a)(b)

function func(a, b) {
    return `${a} ${b}`
}

console.log(func(10, 20)); // 10 20

// Currying
function fn(a) {
    return function(b) {
        return `${a} ${b}`
    }
}

console.log(fn(20)(20)); // 20 20

// Why should we use currying?
// Answers:
// 1. To avoid passing same variable again and again
// 2. To Create Higher Order Functions
// 3. To make your function pure and less prone to error

// Q1: sum(2)(6)(1)

function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

console.log(sum(10)(20)(30)); // 60

// Q2:
/*
    evaluate("sum")(4)(2)
    evaluate("diff")(4)(2)
    evaluate("multiply")(4)(2)
    evaluate("divide")(4)(2)
*/

function evaluate(oper) {
    return function(a) {
        return function(b) {
            if(oper === "sum")
                return a+b;
            else if(oper === "diff")
                return a-b;
            else if(oper === "multiply")
                return a*b;
            else if(oper === "divide")
                return a/b;
            else
                return "Invalid Operation"
        }
    }
}

console.log(evaluate("sum")(4)(2))
console.log(evaluate("diff")(4)(2))
console.log(evaluate("multiply")(4)(2))
console.log(evaluate("divide")(4)(2))

// Benefit of Currying - Initialize your function once and use it later
const mul = evaluate("multiply")
console.log(mul(10)(2));
console.log(mul(15)(3));
console.log(mul(4)(3));

// Q3: Infinite Currying -> sum(1)(2)(3)....(n)
// Use Recursion

function add(a) {
    return function(b) {
        if(b) return add(a+b)
        return a;
    }
}

console.log(add(2)(3)(4)(5)());
// console.log(add(2)(3)(4)(5)); -- It will return an anonymous function

// Q4: Currying vs Partial Application

// Partial Application:
// Partial application is a functional programming technique in JavaScript where you fix a few arguments of a function, 
// producing another function that takes the remaining arguments. It is commonly used to make functions more reusable and concise.

// Partial Application
function sum(a) {
    return function(b, c) {
        return a+b+c;
    }
}

const x = sum(10)
console.log(x(10, 10));
console.log(x(20, 20));

// OR

console.log(sum(20)(10, 10));

// Currying
function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

console.log(sum(10)(20)(30)); // 60

// Q5: Manipulating DOM using Currying - Practical Example of Currying

// Function to update the text content of the selected element using id
function updateElementText(id) {
    return function(content) {
        document.querySelector('#'+id).textContent = content;
    };
}

// Select the id and store the refernce of closure in variable
const updateHeader = updateElementText('main-heading')
updateHeader("Namaste JavaScript")

// Benefit: for changing the content of element, we don't need to use querySelector again and again
// instead we can use our own created function and pass the value

// Q6: Curry() Implementation
// f(a, b, c) -> f(a)(b)(c)

function curry(func) {
    // Return the function, which takes arguments one by one
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next);
            };
        }
    };
}

// Sum Function
const sum = (a, b, c, d) => a+b+c+d;

// Transforming sum function into currying
const totalSum = curry(sum)
console.log(totalSum(1)(2)(3)(4));

// Note: funcName.length => Return the total number of arguments passed to it

// Explaination: First 1 will go to args, then 1 is not >= 4 then it will go for else and return the closure
// later to execute the function, it needs to be called with an argument, then 2 is passed, which will call curriedFunc
// with args - 1, 2 and args will be having 1 and 2 inside it, again 2 is not >= 4, then same thing will happen
// until if condition is not satisfied, finally, it return the args to sum function using spread operator
// so that it will spread the values and sum function can recieve it in each variable and perform the compuatation and return the result