const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// While doing push, it will take anything as an input,, whether it is integer, string or whole array
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])

// But while doing concat,, it will combines two or more arrays and return the new array without modifying original arrays
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)
// console.log(marvel_heroes)

// Array is an Object that is allocated dynamically at heap - Each Variable have reference to the array
// If any one variable changes the array data, it will reflect it for others who is pointing to it
// To Check whether array store the copies or the reference
let myNewArr1 = [10, 10, 30, 50]
let myNewArr2 = myNewArr1

myNewArr2[1] = 400
// console.log(myNewArr1) // [10, 400, 30, 50]
// console.log(myNewArr2) // [10, 400, 30, 50]

// Spread Operator - It will spread all the elements of an array and then those can be combined together.
// Main benefit of this method is that, it can take any number of arguments
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

// Flat method - It will creates a new array with all sub-array elements concatenated into it 
// recursively up to the specified depth.
// Means if the depth is infinite then it will removes all the sub-array and combine their element to single array
// Infinite Depth
const another_array = [1, 2, 3, [4, 5], 6, [3, 5, [6, 7, [8, 9]]]]
const real_another_array_1 = another_array.flat(Infinity)
// console.log(real_another_array_1) // [1, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9]

// Depth - 1
const real_another_array_2 = another_array.flat()
// console.log(real_another_array_2) // [1, 2, 3, 4, 5, 6, 3, 5, [6, 7, [8, 9]]]

// Depth - 1
const real_another_array_3 = another_array.flat(1)
// console.log(real_another_array_3) // [1, 2, 3, 4, 5, 6, 3, 5, [6, 7, [8, 9]]]

// Depth - 2
const real_another_array_4 = another_array.flat(2)
// console.log(real_another_array_4) // [1, 2, 3, 4, 5, 6, 3, 5, 6, 7, [8, 9]]

// Depth - 3
const real_another_array_5 = another_array.flat(3)
// console.log(real_another_array_5) // [1, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9]

// Check whether the argument passed is an array or not
// console.log(Array.isArray("Mahesh")); // false
// Convert the argument which is passed to an array into an array
// console.log(Array.from("Mahesh")) // [ 'M', 'a', 'h', 'e', 's', 'h' ]

// Note: If from method is not able to convert the passed agrument to an array, then it will return [].
// In such cases, it is not sure, what things need to be converted to an array - Here object is passed
// console.log(Array.from({name: "Mahesh"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

// Returns a new array from a set of elements
// console.log(Array.of(score1, score2, score3)) // [100, 200, 300]
