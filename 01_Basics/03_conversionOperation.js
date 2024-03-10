let score = 95

// console.log(typeof score);
// console.log(typeof(score));

// console.log("\n String Input \n")

let num1 = "50"
let valueInNumber1 = Number(num1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);

// console.log("\n String Input \n")

let num2 = "50abc"
let valueInNumber2 = Number(num2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

// console.log("\n Null Input \n")

let num3 = null
let valueInNumber3 = Number(num3)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);

// console.log("\n Undefined Input \n")

let num4 = undefined
let valueInNumber4 = Number(num4)
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);

// console.log("\n True Input \n")

let num5 = true
let valueInNumber5 = Number(num5)
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);

// console.log("\n False Input \n")

let num6 = false
let valueInNumber6 = Number(num6)
// console.log(typeof valueInNumber6);
// console.log(valueInNumber6);

// "33" => 33 (Convertible into Number)
// "33abc" => NaN (Cannot be Convertible into a Number)
// "Mahesh" => NaN (Cannot be Convertible into a Number)
// null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn1 = 1

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
// console.log(booleanIsLoggedIn1);

let isLoggedIn2 = 0

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
// console.log(booleanIsLoggedIn2);

let val1 = ""

let booleanValue1 = Boolean(val1);
// console.log(booleanValue1);

let val2 = "Mahesh"

let booleanValue2 = Boolean(val2);
// console.log(booleanValue2);

// 1 => true; 0 => false
// "" => false
// "mahesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);