// LocalStorage in JS is web storage API which stores the data in key-value pairs in a web browser persistently.
// Unlike cookies, localStorage is larger in capacity and does not automatically send data to the server with every HTTP request.
// The data in localStorage remains available even after the browser is closed and reopened.

/*
    Features of LocalStorage:
    1. Capacity: 5-10 MB of storage
    2. Data Lifetime: Persistent; Data remains until explicitly removed
    3. Data Scope: Limited to the Origin (Protocol, Domain and Port)
    4. Synchronous: Operations on localStorage are blocking

    Methods of localStorage:
    1. setItem(key, value): Stores a key-value pair in localStorage
    2. getItem(key): Retrieves the value associated with the specified key
    3. removeItem(key): Removes the key-value pair associated with the specified key
    4. clear(): Removes all key-value pairs from localStorage
    5. key(index): Retrieves the key at the specified index in localStorage
    6. length: Returns the number of key-value pairs in localStorage
*/

// How to use LocalStorage:

// 1. Storing Data
localStorage.setItem('hello', "Mahesh")
localStorage.setItem('username', "msk11")
localStorage.setItem('password', "msk12")

// 2. Retrieving Data
const value = localStorage.getItem('hello')
const username = localStorage.getItem('username')
const password = localStorage.getItem('password')
console.log(value);
console.log(username);
console.log(password);

// 3. Removing Data
localStorage.removeItem('hello')
console.log(localStorage.getItem('hello')) // null

// 4. Clear the localStorage
localStorage.clear()

// 5. Retrieve the key at specified index
const key1 = localStorage.key(0)
const key2 = localStorage.key(1)

console.log(key1);
console.log(key2);

// Note: while storing the key-value pairs in localStorage, keys are not stored in some specific order, i.e. ascending or by the order of insertion
// So, while printing index wise, order can be anything

// 6. Get the length of localStorage
let len = localStorage.length
console.log(len);

// Iterating through the localStorage
// ----------------------------------
// 1. using any of the loop - for, while or do-while loop

// Printing Values at each key one by one
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)))
}

// Output:
// msk11
// Mahesh
// msk12

// Printing Key-Value Pair one by one
for (let i = 0; i < localStorage.length; i++) {
    console.log(`${localStorage.key(i)} -> ${localStorage.getItem(localStorage.key(i))}`);
}

// Output:
// username -> msk11
// hello -> Mahesh
// password -> msk12

// 2. using for...in loop - Can be used to iterate over the arrays
for (const key in localStorage) {
    if(localStorage.getItem(key)) { // As it contains other properties also, that can be function or any other key
        console.log(localStorage.getItem(key));
    }
}

// 3. using Object.keys() method - return the array of keys
// On which forEach method can be applied to iterate through all the keys
// Note: forEach method is not available for Objects, It can be used on arrays
Object.keys(localStorage).forEach((key) => {
    console.log(localStorage.getItem(key))
})

// Note: localStorage['user'] = "mahesh" and console.log(localStorage['user']) --> These syntax can also be used
// But these are not recommended

// 4. using Object.values() method - return the array of values associated to each key
Object.values(localStorage).forEach((value) => {
    console.log(value)
})

// 5. using Object.entries() method - return the array of key-value pairs
Object.entries(localStorage).forEach(([key, value]) => {
    console.log(`${key} = ${value}`);
})