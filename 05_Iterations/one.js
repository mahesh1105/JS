// Loops in JavaScript

// for(let i = 0 ; i <= 10 ; i++) {
//     let element = i
//     console.log(element)
// }

// Nested Loops

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop Value : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop Value : ${j} and inner loop ${i}`)
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length)

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }

// If you out of bounds in an array, then you won't get any exceptions else will get undefined,, 
// if you try to print the value beyond the indexes

// break and continue

// for (let index = 1; index <= 10; index++) {
//     if(index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`)
// }

for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index}`)
}