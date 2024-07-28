let score = 95

// console.log(typeof score);
// console.log(typeof(score));

// console.log("\n String Input \n")

// Converting num1 to Number Type
// If result can be converted to number then it gets stored into valueInNumber1, else NaN gets stored
let num1 = "50"
let valueInNumber1 = Number(num1)
// console.log(typeof valueInNumber1); // number
// console.log(valueInNumber1); // 50

// console.log("\n String Input \n")

let num2 = "50abc"
let valueInNumber2 = Number(num2)
// console.log(typeof valueInNumber2); // number
// console.log(valueInNumber2); // NaN - which is also a number

// console.log("\n Null Input \n")

let num3 = null
let valueInNumber3 = Number(num3)
// console.log(typeof valueInNumber3); // number
// console.log(valueInNumber3); // 0

// console.log("\n Undefined Input \n")

let num4 = undefined
let valueInNumber4 = Number(num4)
// console.log(typeof valueInNumber4); // number
// console.log(valueInNumber4); // NaN

// console.log("\n True Input \n")

let num5 = true
let valueInNumber5 = Number(num5)
// console.log(typeof valueInNumber5); // number
// console.log(valueInNumber5); // 1

// console.log("\n False Input \n")

let num6 = false
let valueInNumber6 = Number(num6)
// console.log(typeof valueInNumber6); // number
// console.log(valueInNumber6); // 0

// "33" => 33 (Convertible into Number)
// "33abc" => NaN (Cannot be Convertible into a Number)
// "Mahesh" => NaN (Cannot be Convertible into a Number)
// null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn1 = 1

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
// console.log(booleanIsLoggedIn1); // true

let isLoggedIn2 = 0

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
// console.log(booleanIsLoggedIn2); // false

let val1 = ""

let booleanValue1 = Boolean(val1);
// console.log(booleanValue1); // false

let val2 = "Mahesh"

let booleanValue2 = Boolean(val2);
// console.log(booleanValue2); // true

// 1 => true; 0 => false
// "" => false
// "mahesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

// *************************** Operations ***************************

let value = 3
let negValue = -value

// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.66666
// console.log(2%3); // 2

let str1 = "Hello"
let str2 = " Mahesh"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2"); // 12
// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 6); // Try to use the paranthesis as per your requirements

// console.log(+true);  // 1
// console.log(+false); // 0
// console.log(+"");    // 0

let n1, n2, n3
n1 = n2 = n3 = 2 + 2 // Readabilty is not good here

let gameCounter = 100
gameCounter++
++gameCounter

// console.log(gameCounter)