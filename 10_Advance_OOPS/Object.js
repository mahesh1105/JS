// In JS, At the end everything is an Object
// Array, String, and even Function is also an Object
// Function behave like function and but it have object properties as well
// Function --> Object --> null
// Array --> Object --> null
// String --> Object --> null

// Note::
// Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
// The chain ends when we reach a prototype that has null for its own prototype.

// Note::
// When you try to access a property of an object: if the property can't be found in the object itself, 
// the prototype is searched for the property. If the property still can't be found, 
// then the prototype's prototype is searched, and so on until either the property is found, 
// or the end of the chain is reached, in which case undefined is returned.
// Its like an infinite chain of prototype until null is reached

// Note::
// The property of an object that points to its prototype is not called prototype. 
// Its name is not standard, but in practice all browsers use __proto__. 
// The standard way to access an object's prototype is the Object.getPrototypeOf() method.

function multipleBy5(num){
    return num*5
}

// Property of the function
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = createUser("chai", 25)
const tea = new createUser("tea", 250)

console.log(chai); // undefined -- as you are not returning anything from createUser Function
console.log(tea);

tea.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

-- A new object is created: The new keyword initiates the creation of a new JavaScript object.

-- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
   This means that it has access to properties and methods defined on the constructor's prototype.

-- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
   If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

-- The new object is returned: After the constructor function has been called, 
   if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*
    Note::
    Using the new keyword fundamentally changes how the function behaves and how the resulting variable is treated. Here's a detailed breakdown:

    1. With the new Keyword
        When you use the new keyword with a function:

        . The function behaves like a constructor function.
        . It creates a new object.
        . The properties and methods defined in the constructor (and its prototype) are bound to the new object.
        . The variable you assign to holds a reference to this new object.
    
    Example:
    ------------
    function createUser(username, score) {
        this.username = username;
        this.score = score;
    }
    createUser.prototype.sayHello = function() {
        console.log(`Hello, ${this.username}`);
    };

    const user = new createUser("chai", 25); // Using new
    console.log(user); // Output: createUser { username: 'chai', score: 25 }
    user.sayHello(); // Output: Hello, chai

    -- ** Here, createUser behaves like a constructor function because of new.
    -- ** user is treated as an object instance.

    2. Without the new Keyword
        When you call a function without new:

        . The function behaves like a normal function.
        . this is determined by the calling context:
            . In non-strict mode, this refers to the global object (global in Node.js or window in browsers).
            . In strict mode, this is undefined.
        . The function does not return an object unless explicitly coded to do so.
    
    Example:
    ------------
    function createUser(username, score) {
        this.username = username;
        this.score = score;
    }

    const user = createUser("chai", 25); // No new keyword
    console.log(user); // Output: undefined
    console.log(global.username); // Output: chai (polluted global object in non-strict mode)

    . Here, createUser behaves like a regular function.
    . this.username assigns chai to the global object (or throws an error in strict mode).

    3. Why does it matter?
    
    When Using new:
        . It allows you to create multiple instances of an object with shared behaviors via prototypes.
        . It's essential for object-oriented programming in JavaScript.
    Without new:
        . The function simply runs as a regular function, and it won't set up prototypes or encapsulate data correctly.

    Summary::
    ----------------
    With new:
        . Function behaves as a constructor.
        . The variable refers to an object instance.
    
    Without new:
        . Function behaves as a normal function.
        . Variable is not an instance of the object and might lead to bugs.
*/

// Any variable inside the Object is known as property
// AND any function inside the Object is known as method