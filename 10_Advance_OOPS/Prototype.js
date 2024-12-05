/*
    JavaScript is a prototype-based language, which means that inheritance and object behaviors are defined through prototypes 
    rather than classical class-based structures found in languages like Java or C++.

    1. What is a Prototype?
        A prototype is an object from which other objects inherit properties and methods. 
        Every JavaScript object has an internal link to another object, called its prototype, from which it can inherit properties.
        . This prototype chain forms the basis of JavaScript's inheritance system.
        . Objects can share behavior (methods and properties) via the prototype.
    
    2. How Prototypes Work
        When you try to access a property or method on an object:
        . JavaScript first checks if the property/method exists on the object itself.
        . If not found, it looks up the prototype chain to find it.
    
        Example:

        const user = {
            name: "Alice",
            greet: function () {
                console.log(`Hello, ${this.name}`);
            }
        };

        const admin = Object.create(user); // `admin`'s prototype is `user`
        admin.name = "Bob";

        admin.greet(); // Output: Hello, Bob
        
        . admin does not have its own greet method, so JavaScript looks for it in the prototype (user).
    
    3. The Prototype Chain
        Every object has a hidden property called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf(obj)) that points to its prototype.
        . If a prototype itself has a prototype, JavaScript continues looking up the chain until it reaches the root prototype, which is null.
    
        Visual Representation:
        -----------------------
        admin --> user --> Object.prototype --> null
    
        Example:
        ------------------
        console.log(admin.__proto__ === user); // true
        console.log(user.__proto__ === Object.prototype); // true
        console.log(Object.prototype.__proto__); // null
    
    4. Functions and Prototypes
        . In JavaScript, every function has a special property called prototype (used when the function is called with new).

        Example:
        -------------
        function User(name) {
            this.name = name;
        }

        User.prototype.sayHello = function () {
            console.log(`Hello, ${this.name}`);
        };

        const alice = new User("Alice");
        alice.sayHello(); // Output: Hello, Alice
        
        . When you create an object using new User(), the new object's [[Prototype]] is set to User.prototype.
        . This links the object to the prototype, enabling inheritance.
        
        Visual Representation:
        ------------------------
        alice --> User.prototype --> Object.prototype --> null

    5. Object.create for Custom Prototypes
        . You can create objects with a specific prototype using Object.create.

        Example:
        -------------
        const user = {
            greet: function () {
                console.log("Hello!");
            }
        };

        const admin = Object.create(user);
        admin.role = "Admin";

        admin.greet(); // Output: Hello!
        console.log(admin.__proto__ === user); // true
        
        . Here, admin inherits the greet method from user through its prototype.

    6. Why Prototypes Instead of Classes?
        . JavaScript uses prototypes because:

        -- Dynamic Nature:
            . Prototypes are flexible and allow properties/methods to be added or overridden at runtime.
        -- Shared Behavior:
            . Prototypes enable shared behavior without duplicating methods for each object.
    
        Example of Sharing Methods:
        -----------------------------
        function User(name) {
            this.name = name;
        }

        User.prototype.sayHello = function () {
            console.log(`Hello, ${this.name}`);
        };

        const alice = new User("Alice");
        const bob = new User("Bob");

        console.log(alice.sayHello === bob.sayHello); // true (shared method)

    7. Prototypes vs Classes
        . JavaScript now has class syntax, but under the hood, it is still prototype-based. The class syntax is syntactic sugar to make the code easier to understand and more familiar to developers from class-based languages.

        Example:
        -------------
        class User {
            constructor(name) {
                this.name = name;
            }

            sayHello() {
                console.log(`Hello, ${this.name}`);
            }
        }

        const alice = new User("Alice");
        console.log(Object.getPrototypeOf(alice) === User.prototype); // true

    8. Benefits of Prototype-Based Inheritance
        . Efficiency: Shared methods reduce memory usage.
        . Flexibility: Methods and properties can be added or overridden dynamically.
        . Dynamic Objects: You can modify prototypes at runtime.
    
    9. Drawbacks
        . Confusion for Beginners: Prototypes can be tricky to understand compared to class-based inheritance.
        . Prototype Chain Overhead: Long prototype chains can make property lookups slower.
    
    10. Summary
        . JavaScript objects inherit properties and methods via the prototype chain.
        . Prototypes are a way to share behavior between objects without duplicating it.
        . The class syntax is a convenient way to use prototypes but doesn't change the prototype-based nature of JavaScript.
*/

let myName = "mahesh     "
let mychannel = "chai     "

// console.log(myName.length); // 11 -- Including spaces

// If you want length without spaces then,
// console.log(myName.trim().length); // 6

// If we have want to create a separate function for trimmed length, that can also be created
// You need to create in Object level, i.e. Top-Level Hierarchy, so that it can be accessible to all
// Else you can create it for myName variable only (that is string, and at the end an object)
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// If you want to create the mahesh function which can be accessible to all the object, can be done following the below syntax -
// Also, It is accessible to array, function, string, object, because at the end, everything is an object
Object.prototype.mahesh = function(){
    console.log(`mahesh is present in all objects`);
}

// If you want to create the heyMahesh function which can be accessible to all the Array, can be done following the below syntax -
// But remember, it is accessible to all the arrays only, not Objects
Array.prototype.heyMahesh = function(){
    console.log(`Mahesh says hello`);
}

// heroPower.mahesh()
// myHeros.mahesh()
// myHeros.heyMahesh()
// heroPower.heyMahesh() // Array Method is not accessibel to Object

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Used to inherit TeachingSupport properties and methods, basically inheriting it
}

// Old Way
Teacher.__proto__ = User // Used to inherit User

// modern syntax - Behind the scenes, __proto__ syntax is only followed
// TeachingSupport will inherit all the properties of the Teacher -- Prototypal Inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

// Problem: Get the trimmed length
let anotherUsername = "ChaiAurCode     "

// Created the separate function - One Word - Behind the scenes trim().length is only there
String.prototype.trueLength = function(){
    console.log(`${this}`); // Prints the reference to the current context
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// Example of Prototype chain
const o = {
    a: 1,
    b: 2,

    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
      __proto__: {
        d: 5,
      },
    },
};

// Note::
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
  
console.log(o.d); // 5