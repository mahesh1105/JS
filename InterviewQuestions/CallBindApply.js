// Call, Bind and Apply in JS
// Explicit Binding

// Call:
// -----
// Invokes a function immediately with a specified this context and arguments passed individually.

// Syntax:
// func.call(thisArg, arg1, arg2, ...);

// Apply:
// ------
// Invokes a function immediately with a specified this context and arguments passed as an array.

// Syntax:
// func.apply(thisArg, [arg1, arg2, ...]);

// Bind:
// -----
// Returns a new function with a specified this context and optional initial arguments. The function is not invoked immediately.
// Usually for event listeners, callbacks, or delayed execution.
// It basically binds the function with the specified this context, so that it can be used later

// Syntax:
// const boundFunc = func.bind(thisArg, arg1, arg2, ...);
// boundFunc();

// -------------------------------------------------------------------------------------------------------------

// Q1: What is Call?

var obj = { name: "Mahesh" };

function sayHello(age) {
    return `Hello ${this.name}, age: ${age}`
}

console.log(sayHello.call(obj, 10));

// Q2: What is Apply?

var user = { uname: "Mahesh", pass: "123qwe" }

function greeting(month, year) {
    return `Hey ${this.uname}, Welcome to ${month} ${year}`
}

console.log(greeting.apply(user, ['Jan', 2025]));

// Q3: What is Bind?

var student = {
    name: "Aman",
    marks: 95
}

function getDetails(message) {
    return `${message} ${this.name}!!, Marks: ${this.marks}`
}

const func = getDetails.bind(student);
console.log(func('Good Job'));

// Q4: Output based Question

const person = { name: "Piyush" };

function sayHi(age) {
    return `${this.name} is ${age}`
}

console.log(sayHi.call(person, 24)); // Piyush is 24
console.log(sayHi.bind(person, 24)); // Prints the function - as we are doing console log - else store it somewhere and executes it later
// const ff = sayHi.bind(person, 24)
// console.log(ff())

// Q5: Call with function inside Object

const age = 10;

var per = {
    name: "Piyush",
    age: 20,
    // Function Expression - Anonymous
    getAge: function() {
        return this.age;
    }
};

var per2 = { age: 24 };
console.log(per.getAge.call(per2)); // 24
console.log(per.getAge.apply(per2)); // 24
console.log(per.getAge.bind(per2)()); // 24

// Q6: What is the Output?

var status = "😎";

setTimeout(() => {
    const status = "😍";

    const data = {
        status: "🙄",
        getStatus() {
            return this.status;
        }
    };

    console.log(data.getStatus()); // 🙄
    console.log(data.getStatus.call(this)); // 😎
}, 0);

// Q7: Call printAnimals such that it prints all animals in object

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
    this.print = function() {
        console.log("#" + i + " " + this.species + ": " + this.name);
    }
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}

// Q8: Append an array to another array
// Modify the Original Array instead of returning a new array

let arr = [10, 20, 30, 40, 50]
let brr = [100, 200, 300]

// 1st Way
// arr = [...arr, ...brr]
// console.log(arr);

// 2nd Way
// for(let i=0 ; i<brr.length ; i++) {
//     arr.push(brr[i])
// }
// console.log(arr);

// 3rd Way
arr.push.apply(arr, brr)
console.log(arr);

// Q9: Using apply to enhance built-in functions

// Find min/max number in an array
const numbers = [10, 20, 30, 40, 50]

// To find the maximum and minimum in an array, we can use Math Library min and max method
// console.log(Math.min(2, 4, 8, 5, 1, 7));
// console.log(Math.max(2, 4, 8, 5, 1, 7));

// But those methods doesn't work on arrays or array given as input to them
// console.log(Math.max(numbers)); // NaN

// using loop
// let min = +Infinity, max = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if(min > numbers[i]) {
//         min = numbers[i]
//     }

//     if(max < numbers[i]) {
//         max = numbers[i]
//     }
// }

// console.log(min, max);

// Here, apply method takes values from an array one by one and provide it to Math.min method
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));

// Q10: Bound Function

function f() {
    console.log(this);
}

let user = {
    g: f.bind(null)
};

user.g(); // Window Object

// Reason: Only for passing null reference
/*
    f.bind(null):
    - bind(null) ka matlab hai ki this ko explicitly null banaya ja raha hai. 
    Par kuch environments, jaise browser mein, agar this null set hota hai aur strict mode nahi hai, 
    toh default this window object ban jata hai.

    Non-Strict Mode Behavior:
    - Agar tumhara code strict mode mein nahi chal raha hai, toh this ko null set karne par 
    JavaScript usse automatically window object se replace kar deta hai.
*/

// Q11: Bind Chaining

function f() {
    console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();

// Output: John
// Reason: Once a function is bound to some object, it will always remain bounded to it
// No Bound Chaining exists, Once binded cannot be rebinded

// Q12: Fix last line to make this code work properly

function checkPassword(success, failed) {
    let password = prompt("Password?", "");
    if(password == "mahesh") success();
    else failed();
}

let user = {
    name: "Mahesh Saini",

    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },

    loginFailed() {
        console.log(`${this.name} failed to log in`);
    }
};

checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// Q13: Partial application for login function

function checkPassword(ok, fail) {
    let password = prompt("Password?", "");
    if(password == "mahesh") ok();
    else fail();
}

let user = {
    name: "Mahesh",

    login(result) {
        console.log(this.name + " " + (result ? "Login Successful" : "Login Failed"));
    }
};

checkPassword(user.login.bind(user, true), user.login.bind(user, false))

// Q14: Explicit Binding with Arrow Function

const num = 10;

var pers = {
    name: "Mahesh",
    num: 20,
    getNumArrow: () => {
        console.log(this.num);
    },
    getNum: function() {
        console.log(this.num);
    }
};

var person2 = { num: 24 };

pers.getNum.call(person2); // 24
pers.getNumArrow.call(person2); // undefined

// Reason: Arrow Function will work same with call, bind or apply as it is working earlier, no change will come after adding these
// It will point to its parent normal function, but there is no normal function in outer scope, so it will point to global object (i.e. window object in chrome)

// Important: Regardless of using call, bind or apply method, we can't manipulate the context of an arrow function

// Q15: Polyfill for Call Method
// -----------------------------

let car1 = {
    color: "Red",
    company: "Ferrari"
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

// Applying call method on the function
// purchaseCar.call(car1, "Rs.", "5000000");

Function.prototype.myCall = function(context, ...args) {
    if(typeof this !== "function") {
        throw new Error(`${this} It's not callable`);
    }

    // If context is 'null' or 'undefined' then it will be set to globalThis (Global or Window Object)
    context = context || globalThis;

    // Providing the context of same function on which call is chained - Actual Change of Context
    context.fn = this;

    // Calling the function with provided args
    context.fn(...args);
}

purchaseCar.myCall(car1, "Rs.", "5000000")

// Q16: Polyfill for Apply Method
// ------------------------------

let car2 = {
    color: "Red",
    company: "Ferrari"
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

// Applying apply method on the function
// purchaseCar.apply(car2, [ "Rs.", "5000000" ]);

Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this !== "function") {
        throw new Error(`${this} It's not callable`);
    }

    if(!Array.isArray(args)) {
        throw new TypeError("CreateListFromArrayLike called on non-object")
    }

    // If context is 'null' or 'undefined' then it will be set to globalThis (Global or Window Object)
    context = context || globalThis;

    // Providing the context of same function on which call is chained - Actual Change of Context
    context.fn = this;

    // Calling the function with provided args
    context.fn(...args);
}

purchaseCar.myApply(car2, [ "Rs.", "5000000" ]);

// Q17: Polyfill for Bind Method

let car3 = {
    color: "Red",
    company: "Ferrari"
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

// Applying the bind method on the function
// const fn = purchaseCar.bind(car3, "Rs.", "100000000")
// fn()

Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error(`${this} cannot be bound as it's not callable`);
    }

    // If context is 'null' or 'undefined' then it will be set to globalThis (Global or Window Object)
    context = context || globalThis;

    // Providing the context of same function on which call is chained - Actual Change of Context
    context.fn = this;

    // If we are passing arguments later during function call
    return function(...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

const fn = purchaseCar.myBind(car3, "Rs.", "100000000");
fn()