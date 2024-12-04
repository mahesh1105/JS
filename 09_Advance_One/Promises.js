// Promises in JavaScript
// The Promise is an object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Basically it represent the state of asynchronous operation whether its pending, success or rejected

// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
// the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
// fetch(requestURL).then().catch().finally()

// fetch will return with promise response either success or rejected,
// later then(), catch() and finally() methods are chained together to consume the promise
// if its successful, then() will consume the promise and execute its operation
// if its rejected, catch() will consume the promise to handle the error
// finally() method will always run, no matter the response is success or rejected

// Creation of Promise
// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB Calls, Cryptography, Networking
//     setTimeout(() => {
//         console.log("Async Task is completed...")
//     }, 1000)
// })

// Creation of promise is only not enough, we need to consume it also, there then() and catch() help to consume it
// Note: resolve is related to then() method, if you want then() to execute, you need to call resolve()
// Likewise, reject is related to catch() method, if you want catch() to be executed, you need to call reject() method

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 1 is completed...")
        resolve()
    }, 5000)
})

// Here, we have stored the promise inside a varaiable then we can consume it using that variable
promiseOne.then(() => {
    console.log("Promise 1 Consumed")
})

// Instead of storing the promise inside the variable and then consuming it using then separately,
// You can do all those things together using chaining

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 is completed...")
        resolve()
    }, 5000)
}).then(()=> {
    console.log("Promise 2 Consumed")
})

// Arguments can also be passed to then method
// If no time is passed to setTimeout then it will try to execute it as soon as possible
// This is the reason you will see, promiseThree will get executed first then after promiseOne and two
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 3 is completed...")
        resolve({username: "Mahesh", password: "1234"}) // Passing an object to then() method
    })
})

// Consuming the promise
promiseThree.then((userData) => {
    console.log(userData)
})

// Note: Promise is not a function, so don't execute it like - promiseThree()
// Actually, Promise is eventual object

// Same like resolve part, you need to handle the reject part, because there are chances that async operation will get fail
// Then reject part will handle the error

const promiseFour = new Promise((resolve, reject) => {
    const result = false
    if(!false) {
        console.log("Async Task 4 is completed")
        resolve({username: "Mahesh", password: "12345"})
    } else {
        reject('Something went wrong...')
    }
})

// Consuming the promise using then() and catch(), i.e. then() for resolve part and catch() for reject part
promiseFour.then((userDetails) => {
    console.log(userDetails)
    return userDetails.username // This is returned to next then() method
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Finally will always execute, no matter promise is resolve or reject")
})

// That's how we can chain multiple then() together, the usecase of this is, if we want to perform multiple operations one after another and 
// they have dependency on each other, means sequential dependency
// Then we can put all difference operations in each then() method one by one sequentially
// By this, code will be more readable, understandable and easy to debug, if some error comes

// One more thing, each then() will be executed sequentially, means one after another
// until first then() will not be executed completely, second will never be called
// AND if any error comes in any of the then() method then catch() will catch and handle the error

// Also, finally() method, it will always execute no matter promise is resolve or reject

/*
    ** When to Use Multiple .then() vs. a Single .then()
    -- Use Multiple .then(): When each step has distinct logic or when the output of one step is needed for the next. 
       This keeps the code modular and easier to follow.
    -- Use a Single .then(): When the steps are simple and closely related, or when no intermediate transformations are needed.
*/

/*
    Advantages of .then() Chaining -->
    ________________________________
    1. Sequential Execution:
    --> Each .then() executes only after the previous .then() has resolved, making it easy to work with sequential asynchronous operations.
    Example:
    -----------
    fetchData()
    .then(data => processData(data)) // First operation
    .then(processedData => saveData(processedData)) // Second operation
    .then(savedData => console.log("Data saved:", savedData)) // Final operation
    .catch(error => console.error("Error occurred:", error));
    ___________________________________
    2. Modularity and Readability:
    --> Chaining .then() keeps each operation focused on a single task.
    --> This improves readability and makes debugging easier.
    Example:
    ------------
    fetchData()
    .then(data => {
        console.log("Fetched data:", data);
        return processData(data);
    })
    .then(processedData => {
        console.log("Processed data:", processedData);
        return saveData(processedData);
    })
    .then(savedData => {
        console.log("Saved data:", savedData);
    })
    .catch(error => console.error("Error:", error));
    __________________________________
    3. Error Propagation:
    --> Chaining ensures that any error in the promise chain propagates down to the catch() block, regardless of where it occurs.
    ___________________________________
    4. Transforming Data Between Steps:
    --> Each .then() can transform the data before passing it to the next .then(). This avoids deeply nested callbacks.
    Example:
    ---------------
    fetchUserData()
    .then(user => user.id)
    .then(userId => fetchUserPosts(userId))
    .then(posts => displayPosts(posts))
    .catch(error => console.error(error));
    ______________________________________________
    
    ** Why Not Use a Single .then()?
    You can execute all operations in a single .then(), but it often results in more complex and less readable code:
    Code::
    ----------
    fetchData()
    .then(data => {
        const processedData = processData(data);
        saveData(processedData).then(savedData => {
        console.log("Data saved:", savedData);
        });
    })
    .catch(error => console.error("Error:", error));

    --> This introduces nesting, reducing readability and making it harder to maintain or debug the code. 
    --> Additionally, if an error occurs in the inner saveData call, it may not propagate correctly to the outer catch().
*/

// The same thing we did above using then() and catch() can also be done using async and await

const promiseFive = new Promise((resolve, reject) => {
    const result = true
    if(!result) {
        console.log("Async Task 5 is completed")
        resolve({username: "Mahesh", password: "12345678"})
    } else {
        reject('JS went wrong...')
    }
})

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// Calling the function to consume the promise, else it will never consume
consumePromiseFive()

// Also, whenever await is there, it should be placed inside async function, else it will throw the error
// i.e. await called without async, basically await tell this operation will take time, in meantime, it will get completed
// execute other operations, and this is async behavior, that's why it must be there in async function

// Note: Either you create or implement your own Promise or you something which return a promise object, like - fetch()

// Using fetch()

// const getAllUsers = async () => {
//     const response = fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response) // Promise { <pending> }
// }
// getAllUsers()

// In the above code, when you try to print the response, it will give Promise { <pending> }
// Reason: That Operation will take time to fetch the data from that api, then you have to tell javascript, 
// that it is async operation, it will take time, please wait for response from api, don't print Promise Pending
// For that you have to add await keyword before that operation

const getAllUsers2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response) // Print the data received from the api (string format)

        // This operation will also take some time to execute, if executed without await, it will return Promise <pending>
        const jsonData = await response.json() // Convert the data in JSON format which is more readable and understandable
        console.log(jsonData);
    } catch(error) {
        console.log("E: ", error);
    }
}
getAllUsers2()

// Note: you have to add the above fetch call in try block, if the response from the api is rejected then catch block will handle that exception
// Else in console, you will get error message that, exception raised, but there is no catch to handle that exception

// Same can be achieved using then() and catch()
// Note here fetch() is used to retrieve the data from the api, if its resolve then() will get executed else catch() will execute
// It will handle resolve() and reject() calls internally
fetch('https://api.github.com/users/mahesh1105')
.then((response) => {
    return response.json()
})
.then((objData) => {
    console.log(objData)
})
.catch((error) => {
    console.log(error)
})

// Need to study
// Promise.all