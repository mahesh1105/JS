// Objects in JS

// Creating the Object
const user = {
    name: "Mahesh",
    age: 24
}

// Accessing property of an Object
console.log(user.name);
console.log(user['age']);

// Modifying the Object property
user.name = "MS"

// Printing the Object
console.log(user);

// Deleting the property of Object
delete user.age;

console.log(user);

// Output:
const func = (function(a) {
    delete a;
    return a;
})(5);

console.log(func); // 5

// Explaination: This will not delete 'a' as 'a' is local variable to the function
// and delete is used to delete the object property not local variables

// Adding a new property to Object
const us = {
    name: "Mahesh",
    age: 25,
    "Favorite Game": 'Cricket'
};

// Only way to delete the property - Array Syntax
delete us["Favorite Game"]

console.log(us);

// Adding the property to an Object dynamically
const property = "firstName"
const value = "Mahesh"

const ust1 = {
    property: value
}

console.log(ust1); // { property: 'Mahesh' }

const ust = {
    [property]: value
}

console.log(ust); // { firstName: 'Mahesh' }

const usk = {
    username: "mahesh",
    password: "12345678"
}

// Iterating through the Object - for...in loop
for(key in usk) {
    console.log(key); // key
    console.log(usk[key]); // value
}

// Creating Constant Object
const person = {
    name: "John",
    age: 30
};

// This is not allowed:
// person = {
//     name: "Jane",
//     age: 25
// }; // TypeError: Assignment to constant variable.

// This is allowed:
person.age = 31;
person.city = "New York";

console.log(person); // { name: 'John', age: 31, city: 'New York' }

// Q1: What's the Output

const obj = {
    a: "One",
    b: "Two",
    a: "Three" // update the value of property 'a'
};

console.log(obj);

// Q2: Create a function multiplyByTwo(obj) that
// multiplies all numeric property values of nums by 2

let nums = {
    a: 100,
    b: 200,
    title: "My Nums"
};

function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(nums);
console.log(nums);

// Q3: What's the Output of the following code

const a = {}
const b = { key: "b" }
const c = { key: "c" }

a[b] = 123; // '[object Object]': 123
a[c] = 456; // '[object Object]': 456

console.log(a[b]);
console.log(a); // { '[object Object]': 456 }

// Note: Whenever any Object is used as a key or property of another Object, which cannot converted to string,
// then key will look like - '[object Object]' and for every object, key name will be the same

// When an object cannot be converted to string, it will look like - [object Object]

// Possible type for keys or property of an Object can be string or Symbol (unique identifier)
// Any other type if used as the key, will automatically get converted to string type
// Values for the key can be of any type - string, number, boolean, null, undefined, symbol,
// Also, it can be other Object, Function and Arrays

// Using Symbol as the key of Object
let sym = Symbol("Mahesh")
let obd = { [sym]: "Hello" }
console.log(obd);

// Q4: What is JSON.stringify and JSON.parse?
// JSON.stringify - Converts the Object to string
// JSON.parse - Converts the string to Object

let userq = {
    name: "userq1",
    pass: "yhgf"
}

console.log(userq);

// JSON.stringify
const val = JSON.stringify(userq)
console.log(val);
console.log(val.name); // undefined - as val is string now

// JSON.parse
console.log(JSON.parse(val));

// What is the use of both?
// While storing the Object to database or local storage, it cannot be stored directly, unless it must be converted to string, there JSON.stringify required
// And while accessing the values from the database or local storage, most of the time you get string data, that must be converted to Object for structured format, then JSON.parse is required

// Q5: What's the Output?
console.log([..."Mahesh"]); // Spread the values into an array - [ 'M', 'a', 'h', 'e', 's', 'h' ]
console.log(..."Mahesh"); // Unexpected results or behavior

// Q6: What's the Output?
const user = { name: "Mahesh", age: "21" };
const admin = { status: "Online", ...user }; // Spread the user properties in admin object
console.log(admin); // { status: 'Online', name: 'Mahesh', age: '21' }

// Q7: What's the Output?
const userw = {
    uname: "ms1212",
    level: "5",
    health: 100
}

// It will stringify only mentioned properties inside an array
const strObj = JSON.stringify(userw, ["level", "health"])
console.log(strObj);

// Q8: What's the Output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// Reason: For normal function, this refers to the called Context (means it will refer to the caller)
// But for arrow function, this refers to the window object, where radius doesn't exist, that's why result in NaN

// Q9: What is Destructuring in Objects?
// Destructuring is the unpacking of values from arrays or properties of objects into another variable

let dest = {
    name: "Mahesh",
    age: 24,
    num: 11
}

// Destructuring of dest object
const { name } = dest;
console.log(name); // Mahesh

// Destructuring and renaming the variable at the same time
const { name: uname } = dest;
console.log(uname); // Mahesh

// Destructuring can be done on nested objects as well
const destNest = {
    name: "Alex",
    age: 1000,
    fullname: {
        first: "Alex",
        last: "Carter"
    }
}

// Destructing of fullname property
const { fullname } = destNest;
console.log(fullname); // { first: 'Alex', last: 'Carter' }

// Further Destructing of the Object
const { fullname: { first } } = destNest
console.log(first); // Alex

// Syntax of Destructuring and renaming
// const { propName: newName } = objName

// Syntax of Destructuring the Object to further level
// const { propName: { insidePropName } } = objName

// Destructuring Of Arrays
let m, n, rest;
[m, n] = [10, 20]

console.log(m);
console.log(n);

[m, n, ...rest] = [100, 200, 300, 400, 500]
console.log(m);
console.log(n);
console.log(rest);

// Q10: What's the Output?
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// Error: Rest Operator must be the last parameter in Parameter List

// Improved Code
function getItems(fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit]
}

const retRes = getItems(["Banana", "Apple"], "Pear", "Orange")
console.log(retRes);

// Q11: What's the Output?
// Object Referencing

let x = { greeting: "Hey!" }
let y;

y = x; // y will be referencing to x in Memory
x.greeting = "Hello";
console.log(y.greeting); // Hello

// Reason: In JS, Memory will be allocated on the heap for all the variables, and upon assigning the variable to some other variable,
// It will refer the same memory in Heap, Changing the value by using first variable will reflect it for other also, as both are referencing the same memory location

// console.log(21 == 21); // true
// console.log(21 === 21); // true

// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false

// Note: While comparing the Primitive Values, It is compared by Values
// and for Non-Primitives(Objects including functions and arrays) are comapred by reference, not by value
// Even though the content of Non-Primitive variable are same, but they will point to different memory location

// Q13: What's the Output?
let person = { name: "Mahesh", age: 21 };
const members = [person]; // Object will be stored at 0th index of the array
// person = null; // It will not affect members variable
person.name = "Alex"; // It will affect members variable 0th index name property - as members is pointing to person object in memory

console.log(members);

// Q14: What's the Output?
const kw = { number: 10 }

// In Function Parameter List, Argument x is set to default value, if x is not provided during function call, it will take default value else it will take provided value
const multiply = (x = { ...kw }) => {
    console.log(x.number *= 2);
}

// x = { ...value } --> Cloning of Object - Instead of referencing the same location, value object will get cloned to x, if no args provided
// And if its provided, then x will refer to the same memory location of provided value

multiply(); // 20
multiply(); // 20
multiply(kw); // 20
multiply(kw); // 40

// Note: Non-Primitive values are passed as a reference during function call, means parameter inside the function will refer to the same memory location

// Q15: What's the Output?

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50
    };

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30
}

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }

// Reason: Initially person will refer to memory location of personObj1, upon changing age, it will change in that memory location, and it will reflect to each variable refering to that memory location
// Later, upon Assigning person with some other value, it will refer to some other memory location on Heap and no longer refer to old location

// Q16: What is shallow copy and deep copy?
// Shallow Copy: When one object will refer to another object, means both are pointing to same memory location on Heap
// Deep Copy: When other Object will cloned or copied from one Object, and that new Object will not refer to old object - complete copy OR Both the Objects are different Object

// Q17: How to Deep Copy or Clone an Object?

let user = {
    name: "Mahesh",
    age: 24
}

// Three ways to clone the Object from existing Object
// const objClone = Object.assign({}, user);
// const objClone = JSON.parse(JSON.stringify(user));
// const objClone = { ... user };

objClone.name = "Alex";

console.log(user, objClone);