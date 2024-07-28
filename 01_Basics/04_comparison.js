// console.log(1 > 2);
// console.log(2 >= 1);
// console.log(2 < 3);
// console.log(1 == 2);
// console.log(1 != 2);

// Comparing different datatype - Sometimes shows unpredictable results
// Typescript does not allow to compare different data types - Can be taken care in JS itself
// console.log("1" > 2); // 1 > 2 :: false
// console.log("02" < 3); // 2 < 3 :: true

// Equality check Operator (==) and Comparison Operator (<, <=, >, >=) works differently
// Comparison will convert null to a number treating it as zero
// These types of comparsion should not be happen -- Unpredictable result
// sometimes null got converted to NaN or sometimes to Zero
// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// Equality (==) and strict equality (===) operators
// Equality -- Checks for the values but conversion will happen here if datatype is not same
// strict equality -- Checks for the values and its types also,, if the type is not same,, it will return false