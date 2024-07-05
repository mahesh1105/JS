// for of loop

// ["", "", ""]
// [{}, {}, {}]

// iterator - for iterating the values across arrays, objects or list
// object - used in broader way,, i.e. it doesn't mean this loop is for object only
// we can use any list - like arrays, objects, string and many more...
// for (const iterator of object) {
    
// }

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Char: ${greet}`)
// }

// Map
// Map object holds key-value pairs and remembers the original insertion order of the keys
// Any value (both objects and primitive values) may be used as either a key or a value

// Map objects are collection of key-value pairs. 
// A key in Map may only occur once, it is unique in the Map's collection.
// A Map object is iterated by key-value pairs - a for...of loop returns,,
// a 2-member array of [key, value] for each iteration.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map) // Give Output as key-value pair,, key => value

// for (const val of map) {
//     console.log(val) // will give value as array of key-value pairs,, [key, value]
// }

// for (const [key, val] of map) {
//     // Both will behave same
//     console.log(key, "->" ,val)
//     console.log(key + " -> " + val)
// }

const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman",
    'game3' : "Asphalt"
}

// Below iteration will not work,, as this is not the way to iterate the object
// Error : Object is not iterable
// for (const iter of myObject) {
//     console.log(iter)
// }