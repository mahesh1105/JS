// Closures and Lexical Scoping in JS

// Lexical Scoping
// Inner Function have access to outer function's variables and it is decided at compile time

// Ex:
function init() {
    let name = "Mahesh"; // name is a local variable created by init
    
    // displayName() is the inner function, that forms a closure
    function displayName() {
        console.log(name); // use variable declared in the parent function
    }

    displayName();
}
init();

// The displayName() function can access name because of lexical scoping, even though name is not declared inside displayName()

// Closures
// --------
// Function remembers the parent's scope variables, even after it is executed or its EC context is destroyed

// Ex:
function makeFunc() {
    const name = "Mozilla";
    
    function displayName() {
        console.log(name);
    }

    return displayName;
}
  
const myFunc = makeFunc();
myFunc();

// Above can also be written as:
makeFunc()();

// Here, displayName forms a closure over name and retains access to it even though the makeFunc function has finished executing.

// Lexical Scoping
// Functions have access to variables defined in their own scope and in any parent (enclosing) scopes
// It is also known as static scoping
// It refers to the scope of variables being determined by the structure of code at compile time

// Closures
// When a function is returned from another function, it retains access to the variables of the outer function, forming a closure
// A closure is a function that "remembers" the scope in which it was created, even after that scope has exited
// Closures are enabled by lexical scoping
// Closures are created every time a function is created, at function creation time

// In other programming languages, this type of code (closure) doesn't work, But in JS,
// Everytime we create a new function, it binds itself to its environment or its lexical scope
// Because of that, it have access to its parent's scope or global scope variables

// Why Closures?
// It makes possible for functions to have private variables that are not present in same scope (function's scope)
// and those variables were shared by sibling functions in the containing scope

// Closure Scope Chain
// Every Function have three scopes
// 1. Local Scope (Current Function Scope)
// 2. Outer Function's Scope (Parent's Scope)
// 3. Global Scope (Parent's Parent Scope)

// Ex:
// global scope
const e = 10;
function sumx(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sumx(1)(2)(3)(4)); // 20

// More Easy
// global scope
const er = 10;
function sumy(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + er;
      };
    };
  };
}

const sum2 = sumy(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

// Closures Questions
// Q1: What is the Output to Console

let count = 0;
(function printCount() {
    if(count === 0) {
        let count = 1; // Shadowing
        console.log(count); // 1
    }
    console.log(count); // 0
})();

// Q2: Create a function that would allow you to do this

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Clearly, createBase should return a function, reference to which is stored in addSix and later addSix called

function createBase(num) {
    function func(val) {
        return val+num;
    }
    return func;
}

// Q3: Time Optimization

function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");

// Simple, if find function called everytime, it will take more time
// It should be called only once

// It can be achieved using the closures
function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }

    return function(index) {
        console.log(a[index]);
    }
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

// Now outer function called only once, resulting in for loop will run only once and time will get optimized

// Q4: Block Scope and setTimeout

function a() {
    for(var i=0 ; i<3 ; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000)
    }
}

a();

// Output: 3, 3, 3

// Point to Note:
// for(var i=0 ; i<10 ; i++) {
//     setTimeout(function log() {
//         console.log(i);
//     }, 1000)
// }

// Regarding timings: loop will run from 0-10, as soon as it see async function, it will call Web API and
// send it over there for its execution, it will be done 10 times, and this for loop execution from 0-10 is so fast,
// that it will take some milli or micro seconds
// When one second time elapsed, all the 10 output printed to console, 
// means after 1 second passed only, 10 output printed to console
// Note: all 10 process will run parallely, collectively take 1 sec in total

// in case of i*1000, every setTimeout will run parallely, not one after another (**)
// then, at t=1sec, 0 will get printed, at t=2sec, 1 will get printed, like this...
// after 10 sec in total, every value will be there on console window

// If you want to print 0, 1, 2 then use create i variable using let keyword
// But how we can do this using var only
// Think of creating separate memory block for i, so that its value can be retained even it is hoisted
// Use lexical scoping to create separate block inside the function, i.e. function inside function
// Create block for each i - use lexical scoping - then i is local variable to inner function rather than taking from outer scope

function a() {
    for(var i=0 ; i<3 ; i++) {
        function inner(i) {
            setTimeout(function log() {
                console.log(i);
            }, i * 1000)
        }

        inner(i);
    }
}

a();

// Q5: How would you a closure to create the private counter?

function counter() {
    let _counter=0;
    
    function increment(val) {
        _counter += val;
    }

    function retrieve() {
        return _counter;
    }

    // It will not only return the function, but also return the closure which includes outer scope
    // Returning two function at a time
    return {
        increment, retrieve
    }
}

const c = counter()
c.increment(10)
c.increment(5)

console.log(c.retrieve());

// Q6: What is Module Pattern?

var module1 = (function() {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // privateMethod can be called here
            // which is private to this function
            // and cannot be accessible outside
        }
    };
})();

// Ex:
var module2 = (function() {
    function privateMethod() {
        console.log("Private");
    }

    return { // returning an Object
        publicMethod: function() {
            privateMethod();
            console.log("Public");
        }
    };
})();

module2.publicMethod()
// module2.privateMethod() // Not accessible outside the function

// Q7: Make this run only once

let view;
function likeTheVideo() {
    view = "Mahesh";
    console.log(`Hello, ${view}`);
}

likeTheVideo()
likeTheVideo()
likeTheVideo()
likeTheVideo()
likeTheVideo()

// It can be achieved using closures - by wrapping the inner content inside the function and
// mainiting a counter which will ensure this function to run only once

let uname;
function callTheFunction() {
    let called = 0;

    return function() {
        uname = "Mahesh";
        
        if(called > 0) {
            console.log("Already Called...");
        } else {
            console.log(`Hello, ${uname}`);
            called++;
        }
    }
}

let isFuncCalled = callTheFunction()
isFuncCalled()
isFuncCalled()
isFuncCalled()
isFuncCalled()
isFuncCalled()

// If lexical scoping has used then everytime outer function get called, inner will also execute
// But in case of closure, first we will store the refernce of inner function and then call it everytime
// Maintaing a counter variable parallely which will ensure that it should not not be called everytime

// Q8: Once Polyfill

function once(func, context) {
    let ran;

    return function() {
        if(func) {
            ran = func.apply(context || this, arguments);
            func = null
        }

        return ran;
    };
}

// hello() function will run everytime
// const hello = () => console.log('Hello Mahesh')

// hello()
// hello()
// hello()
// hello()
// hello()

// But if we wrap that function in once polyfill then it will run only once, as function will become null

// hello() function will run once
const hello = once((a, b) => console.log('Hello Mahesh' + " " + a + " " + b))

hello(10, 20) // Called only once
hello(10, 20)
hello(10, 20)
hello(10, 20)
hello(10, 20)

// Usecase -
// A function should be executed only once (e.g., initializing a resource, setting up an event listener, or performing an expensive computation).

// Q9: Implement Caching/Memoize Function

function myMemoize(fn, context) {
    // Store the results
    let res = {};

    return function(...args) {
        const argsCache = JSON.stringify(args);

        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }

        return res[argsCache];
    };
}

const clumsyProduct = (num1, num2) => {
    for(let i=0 ; i<100000000 ; i++) {}

    return num1*num2;
}

// console.time("First Call");
// console.log(clumsyProduct(10, 20))
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(clumsyProduct(10, 20))
// console.timeEnd("Second Call");

// Problem: Above function clumsyProduct() with same arguments again and again taking same amount of time when called everytime
// For Same Args, it should not take much time, instead it should memoize the result and if same args passed again 
// then it should return previous without doing any computations again and again

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First Call");
console.log(memoizedClumsyProduct(10, 20))
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumsyProduct(10, 20))
console.timeEnd("Second Call");

// Q10: Difference between closure and scope?

// Closure
// When you have function inside another function, that inner function is known as the closure

// Scope
// It defines variables accessibility in the particular block