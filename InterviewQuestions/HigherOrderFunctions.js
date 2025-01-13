// Higher Order Functions in JavScript

// Functions passed as an argument to another function or function is returned from another function is known as HOF
// The function which is passed as an argument to the function is known as Callback Function
// The function in which function is passed as passed as an argument is known as HOF

// let radius = [10, 20, 30, 40, 50];

// let calculateArea = function(radius) {
//     let output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }

// let calculateCircumference = function(radius) {
//     let output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }

//     return output;
// }

// let calculateDiameter = function(radius) {
//     let output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }

//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));

// Above three functions: calculateArea, calculateCircumference, calculateDiameter have almost same code and only logic is different

// To make these functions generic, we have to separate the logic in other functions and use it as callback to HOF

let radius = [10, 20, 30, 40, 50];

// Callback
let area = function(radius) {
    return Math.PI * radius * radius;
}

// Callback
let circumference = function(radius) {
    return 2 * Math.PI * radius;
}

// Callback
let diameter = function(radius) {
    return 2 * radius;
}

// HOF
let calculate = function(radius, logic) {
    let output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Map can also be used here to calculate the area, circumference and diameter
// Remember, Map is used to transform the array elements and return it.

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// calculate function can be transformed in such a way that it will be the polyfill of map

Array.prototype.calculate = function(logic) {
    let output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));