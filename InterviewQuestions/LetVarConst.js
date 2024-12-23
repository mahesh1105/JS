// let, var and const
// Scope

// Scope is the region where the variable exists and it can be recognized and beyond that it cannot be recognized
// There are three scopes - Global, Function and Block scope

// In JavaScript, we use var, let, and const to create variables

/*
    JavaScript var keyword -->
    ----------------------
    The var is the oldest keyword to declare a variable in JavaScript.
    It has the Global scoped or function scoped. This means:

    - If you create a variable outside of a function, you can use it anywhere in your code.
    - If you create a variable inside a function, you can only use it within that function.

    Note: if you declare and initialize a var variable inside the block, then it can be accessible outside that block
*/

// Ex-1: The below code shows the use of var keyword to declare the variables
// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();
// console.log(a);

// Ex-2: The below code shows the behavior of var variables when declared inside a function and accessed outside of it
// function f() {
//     // It can be accessible anywhere within this function
//     var a = 10;
//     console.log(a)
// }
// f();

// // 'a' cannot be accessible outside of function
// console.log(a);

// Ex-3: The below code re-declare a variable with same name in the same scope using the var keyword, 
// which gives no error in the case of var keyword
// var a = 10

// // User can re-declare variable using var
// var a = 8

// // User can update var variable
// a = 7 
// console.log(a); // 7

// Ex-4: The below code explains the hoisting concept with the var keyword variables
// console.log(a); // undefined
// var a = 10;

/*
    JavaScript let keyword -->
    ----------------------
    The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015
    These variables has the block scope. It can’t be accessible outside the particular code block ({block}).

    - The variable is only available inside the block {} where you define it.
*/

// Ex-1: The below code declares the variable using the let keyword
// let a = 10;
// function f() {
//     let b = 9
//     console.log(b);
//     console.log(a);
// }
// f();

// Ex-2: The below code explains the block scope of the variables declared using the let keyword.
// let a = 10;
// function f() {
//     if (true) {
//         let b = 9
//         console.log(b); // 9
//     }

//     console.log(b); // error: b is not defined
// }
// f()

// console.log(a) // 10

// Note: As soon as you get the first error JS will not execute the code after that

// Ex-3: The below code explains the behaviour of let variables when they are re-declared in the same scope
// let a = 10
// let a = 10 // Not allowed

// a = 10 // Assignment is allowed

// Note: redeclaration of 'let' and 'const' variables in the same scope is not allowed but for 'var' its allowed

// Ex-4: The below code explains the behaviour of let variables when they are re-declared in the different scopes
// let a = 10
// if (true) {
//     let a = 9
//     console.log(a) // 9
// }
// console.log(a) // 10

// Ex-5: This code explains the hoisting concept with the let variables
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

/*
    JavaScript const keyword -->
    ------------------------
    The const keyword has all the properties that are the same as the let keyword, 
    except the user cannot update it and have to assign it with a value at the time of declaration. 
    
    These variables also have the block scope. It is mainly used to create constant variables 
    whose values can not be changed once they are initialized with a value.

    const is similar to let, but with one big difference: once you assign a value to a const variable,
    you can’t change it later. Like let, const is block-scoped.
*/

// Ex-1: This code tries to change the value of the const variable
// const a = 10;
// function f() {
//     a = 9 // error - assignment to constant variable - not allowed
//     console.log(a)
// }
// f();

// Ex-2: This code explains the use of the const keyword to declare the JavaScript objects
// const a = {
//     prop1: 10,
//     prop2: 9
// }

// // It is allowed
// a.prop1 = 3

// // It is not allowed
// a = {
//     b: 10,
//     prop2: 9
// }

// -----------------------------------------------------------------
// Important:
// let and const variables are stored in separate memory space, so it is called block-scoped 
// but var variables can be accessed outside the block as it is stored in the Global object memory space, 
// hence it is called Global scoped.

// Example-
// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

// ---------------------------------------------------------------------------------

/*
    Variable Shadowing:
    -------------------
    Introduction of 'let' and 'const' in ECMAScript 6 along with block scoping allows variable shadowing.
    - When a variable is declared in certain scope having same name as of the variable defined in outer scope
      and when we call the variable from the inner scope, the value assigned to the variable in the inner scope
      is the value that will be stored in the variable in the memory space.
      This is known as Shadowing or Variable Shadowing.
*/

// Ex:
// function func() {
//     let a = 'Hello';
    
//     if (true) {
//         let a = 'Hi';  // New value assigned
//         console.log(a); // Hi
//     }
    
//     console.log(a); // Hello
// }
// func();

/*
    Illegal Shadowing:
    ------------------
    Now, while shadowing a variable, it should not cross the boundary of the scope, 
    i.e. we can shadow var variable by let variable but cannot do the opposite. 
    So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and 
    it will give the error as “variable is already defined.” 
*/

// function func() {
//     var a = 'Mahesh';
//     let b = 'Mahesh';
    
//     if (true) {
//         let a = 'Hello'; // Legal Shadowing
//         var b = 'Hi';    // Illegal Shadowing
//         console.log(a); // Hello
//         console.log(b); // Error: b is already defined
//     }
// }
// func();

// variable 'a' is stored in function scope of function's execution context and same with variable 'b'
// But when it comes to new block (if), as let respect block scoping, a separate memory block is created for 'a'
// and var doesn't respect block scoping and no new memory block got created for it
// Instead it will use the same function scope to create variable 'b' and 'b' is already present in that scope
// and variable created using let doesn't allow redeclaration, that's the reason, error will get encountered
// and It is known illegal shadowing

// -----------------------------------------------------------------------------------
// How let, var and const works behind the scenes in Global, Function and Block Scope

// I) Global Scope
// When variables are declared in the global scope:

// 1. var:
// It is attached to the Global Object (in browsers, it's the window object and in Node Env, its empty object)
// Example:
// var x = 10;
// console.log(window.x); // 10

// 2. let and const:
// They are not attached to the Global Object.
// Instead, they are stored in a separate memory block within the Script Environment Record, managed by JavaScript internally.
// Example:
// let y = 20;
// const z = 30;
// console.log(window.y); // undefined
// console.log(window.z); // undefined

// II) Function Scope
// Inside a function:

// Variables (var, let, const) are stored in the function’s local execution context, not the Global Object.
// How they behave:
// - var is hoisted and initialized to undefined.
// - let and const are hoisted but kept in the Temporal Dead Zone (TDZ) until they are initialized.

// Example:
// function test() {
//     var a = 10;  // Stored in function context.
//     let b = 20;  // Stored in function context.
//     const c = 30; // Stored in function context.
// }
// test();

// Memory Breakdown for test:
// - var a is created in the function context and initialized to undefined during the memory allocation phase.
// - let b and const c are also stored in the function context but are not initialized until their declaration line is executed.

// III) Block Scope
// For block-scoped variables (inside if, for, etc.):

// let and const:
// Stored in a separate memory block for that specific block (a new "block-level environment record").
// They cannot be accessed outside the block.

// var:
// Ignored block boundaries and stored in the function context or global context (if outside a function).

// Example:
// function demo() {
//     if (true) {
//         var x = 10; // Added to function scope.
//         let y = 20;   // Block-specific memory - different memory block is created
//         const z = 30; // Block-specific memory - different memory block is created
//     }
//     console.log(x); // 10 (accessible because it's in function scope).
//     console.log(y); // Error (block-scoped).
//     console.log(z); // Error (block-scoped).
// }
// demo();

// Answer to Illegal Shadowing:

// How It Works with Function Scope?
// - When you declare variables with var inside a function, they are part of the function’s local execution context.
//   In case of var, it doesn't create separate memory block for each new block instead 
//   it uses the function if block is present inside the function OR global scope if block is present globally
// - let and const are also stored in the function’s local execution context but are managed differently:
//   They respect block boundaries and create a new memory block for each block.

// --------------------------------------------------------------------------------------------------

// JS Execution Context:
// ---------------------
// JavaScript executes the code in two phases -
// 1. Memory Creation Phase 
// 2. Execution Phase

// 1. Memory Creation Phase:
// - Creates a global object that is window in the browser and global in NodeJs.
// - Sets up a memory for storing variables and functions.
// - Stores the variables with values as undefined and function references.

// 2. Execution Phase:
// - JS executes code line by line and values assigned to those variables and executed

// --------------------------------------------------------------------------------------------------

// 1. var, let and const 'declaration without initialization'

// let and var can be declared without initialization (means no need to define the value during declaration)
// But for const, it must be initialized at the time of declaration
// var x; // Allowed
// let y; // Allowed
// const z; // Not Allowed

// 2. var, let and const 're-declaration'

// variable declared using var can be redeclared in the same scope but not let and const variables
// variable created using let should not be already present in same scope, else will get error

// var x; // OK
// var x; // OK
// let y; // OK
// let y; // Not allowed - variable is already present
// const z=10; // OK
// const z=20; // Not allowed

// 3. var, let and const 're-initialization'
// variable created using let and var can be updated but not const variables

// var x = 20
// x = 10 // OK
// let y = 10
// y = 50 // OK
// const z = 30
// z = 10 // Not allowed - Assignment to constant variable

// Important**::
// Note: when it comes to different scopes like - global, function and block for let and const - It will work as expected
// But when it comes to var for block scope - Need to think, as it doesn't respect the block scope and uses the outer scope for storing the variable

// Ex1:
// var x=10;
// let x=20; // Not allowed - as x is already present in same scope

// Ex2:
// For Global and Function Context, var behavior is same
// var x=20;
// var x=30;
// console.log(x) // 30 - Value gets updated
// x = 10;
// console.log(x); // 10 - Value updated

// Ex3:
// For Block Scope, var behavior is different than let and const
// var doesn't respect the block scope and variable will get memory in global scope here
// Initially x is 20 in global scope, later updated to 30 in same global scope
// That's the reason outside x value is 30
// var x=20;
// {
//     var x=30;
//     console.log(x); // 30
// }
// console.log(x); // 30

// Ex4:
// for function, different EC gets created and variable gets memory inside that, outside that EC it is not accessible
// function abc() {
//     var a = 10;
//     console.log(a); // 10
// }
// abc()
// console.log(a); // Error: a is not defined

// --------------------------------------------------------------------------------------------------

// Hoisting - let, var and const
// JS moves the declaration of variables and function to the top of the code in the memory creation phase
// var variable obviously gets hoisted but let and const also get hoisted, but they are hoisted in the temporal dead zone
// JS manages a local script environment to hoist these variables

// Ex1:
// function abc() {
//     console.log(a); // undefined - hoisting happens
//     var a = 10;
// }
// abc()

// Ex2:

// function abc() {
//     // a - undefined, b & c - error: cannot access before initialization
//     console.log(a, b, c);
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// abc()