// 'this' keyword in JS
// Implicit Binding

/*
    Note:
    Window Object -- Browser
    Global Object -- Node
    Module Object -- Node
*/

// Here 'this' will refer to the global object (in Node - Module Object & in Browser - Window Object)
this.a = 5
console.log(this.a);

// Normal Functions
function getParam() {
    // Here 'this' will refer to the parent object (in Node - Global Object & in Browser - Window Object)
    console.log(this.a);
}

getParam()

// With browser, it will work fine, but in Node env, initially it will set the value for module object
// and inside the function, it is trying to access the global object's 'a', which is not there - that's why undefined

// Arrow Functions
const func = () => {
    // Here 'this' will refer to global scope (in Node - Module Object & in Browser - Window Object)
    console.log(this.a);
}

func()

// Behavior with Objects
let user =  {
    name: "Mahesh",
    age: 24,
    getDetails() {
        // Here 'this' will refer to the parent object, which is 'user' object itself
        console.log(`Name: ${this.name}`);
    }
}

user.getDetails()

// Nested Objects
let us =  {
    name: "Mahesh",
    age: 24,
    childObj: {
        name: "Alex",
        getDetails() {
            // Here 'this' will refer to immediate parent object, which is 'childObj' object
            console.log(`Primary Name: ${this.name} and Secondary Name: ${this.name}`);
        }
    }
}

us.childObj.getDetails()

// With Arrow Functions
let userq = {
    name: "Mahesh",
    age: 24,
    getDetails: () => {
        // Here 'this' will refer to the global object (in Node - Global Object & in Browser - Window Object)
        console.log(`Name: ${this.name}`);
    }
}

userq.getDetails()

// With Arrow Function inside Normal Function
let userk = {
    name: "Mahesh",
    age: 24,
    getData() {
        const getDetails = () => {
            // Here 'this' will refer to its parent (in Node - Outer Function & in Browser - Outer Function)
            console.log(`Name: ${this.name}`);
        }
        getDetails()
    }
}

userk.getData()

// With Class
class mainUser {
    constructor(n) {
        this.name = n;
    }

    getName() {
        // Here 'this' will refer to its parent (in Node - Class & in Browser - Class)
        console.log(this.name);
    }
}

const userz = new mainUser("Mahesh")
userz.getName();

// Q1: What is the Output?
const abc = {
    firstName: "Mahesh",
    getName() {
        const firstName = "Mahesh Saini";
        return this.firstName;
    }
};

console.log(abc.getName()); // Mahesh

// Reason: Here 'this' will point to its parent, which is abc object and abc's firstName will get returned
// if only firstName is returned then it will return the local variable of the function

// Q2: What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        // Here 'this' will refer to the global object (in Node - Global Object & in Browser - Window Object)
        ref: this
    }
}

let uss = makeUser()

console.log(uss.ref.name); // undefined

// Reason: 'name' doesn't exist in global object

// How to make this point to the current object (which is being returned)
function makeUser() {
    return {
        name: "John",
        ref() {
            // Here 'this' will refer to the current object (in Node - Current Object & in Browser - Current Object)
            return this;
        }
    }
}

let usa = makeUser()

console.log(usa.ref().name); // John

// Reason: Inside the function, 'this' will always refer to its parent object, i.e. returned Object (in this case)

// Q3: What is the Output?

const usl = {
    name: "Mahesh",
    logMessage() {
        console.log(this.name);
    }
}

// setTimeout(usl.logMessage, 1000) // undefined

// Reason: in setTimeout, logMessage is passed as a callback, so after 1 second, callback will be executed independently
// and in that case, 'this' will refer to the window object, there name property doesn't exist

// How to fix this? - Simple, wrap that callback inside the function

setTimeout(function() {
    usl.logMessage()
}, 1000)

// Reason: Now Callback will get executed and inside that logMessage() method will be called which belongs to usl object

// Q4: What is the Output?
const uso = {
    name: "Mahesh",
    greet() {
        // Here 'this' will refer to the current object (in Node - Current Object & in Browser - Current Object)
        return `Hello, ${this.name}!`;
    },
    farewell: () => {
        // Here 'this' will refer to the global Object (in Node - Global Object & in Browser - Window Object)
        return `Goodbye, ${this.name}`;
    }
};

console.log(uso.greet());
console.log(uso.farewell());

// Reason: for arrow function, 'this' will refer to its outer scope, i.e. outer function (normal function), if present, which will ultimately point to current object
// Otherwise point to the global Object

// Q5: Create the Calculator Object

let calculator = {
    read() {
        this.a = +prompt("Enter first number", 0)
        this.b = +prompt("Enter second number", 0)
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// this.a = +prompt("Enter first number", 0) -- prompt for the user to get the value of a
// '+' is used, so that the integer will be stored in the variable

// Q6: What is the Output?

// var length = 4;

// function callback() {
//     // Here 'this' will refer to the parent object (in Node - Global Object & in Browser - Window Object)
//     console.log(this.length);
// }

// const obx = {
//     length: 5,
//     method(fn) {
//         fn()
//     }
// };

// obx.method(callback); // 4

// Another variant - trickiest

var length = 4;

function callback() {
    // Here 'this' will refer to the parent object (in Node - Global Object & in Browser - Window Object)
    console.log(this.length);
}

const obx = {
    length: 5,
    method() {
        arguments[0]();
    }
};

obx.method(callback, 10, 20); // 3

// Note: argument contains the set of values which is being passed to the function during function call, passed values will automatically recieved by argument array
// arguments[0] - 1st element of the array
// when you execute the callback at 0th index, inside function, it will point to its parent object, which is array itself in this case
// That's why, Output = 3, in this case, which is the length of the array itself

// Q7: Implement calc

const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(b) {
        this.total *= b;
        return this;
    },
    subtract(c) {
        this.total -= c;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);