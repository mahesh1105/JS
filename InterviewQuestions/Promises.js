// Promises in JS
// Synchronous and Asynchronous

// Synchronous Code
console.log("Start");

console.log("Hi Mahesh...");

console.log("Finish");

// Asynchronous Code
console.log("Start");

// Even at t=0, it will execute at the end
setTimeout(() => {
    console.log("Hello Mahesh...");
}, 0)

console.log("Finish");

// Another Example
console.log("Start");

function importantAction(username) {
    setTimeout(() => {
        return `Hello ${username}`;
    }, 1000)
}

let message = importantAction("Mahesh")

// As importantAction is async function, it will take time to execute, that's why we get undefined as output
console.log(message); // undefined

console.log("Stop");

// Callbacks - When function is passed as an argument to another function
console.log("Start");

function importAction(username, cb) {
    setTimeout(() => {
        cb(`Hello ${username}`);
    }, 1000)
}

importAction("Mahesh", (message) => {
    console.log(message);
})

console.log("Stop");


// Executing one async function after another finishes its execution
console.log("Start");

function asyncFunc1(cb) {
    setTimeout(() => {
        cb("Async Function 1 executed...");
    }, 0)
}

function asyncFunc2(cb) {
    setTimeout(() => {
        cb("Async Function 2 executed...");
    }, 1000)
}

function asyncFunc3(cb) {
    setTimeout(() => {
        cb("Async Function 3 executed...");
    }, 2000)
}

asyncFunc1((message) => {
    console.log(message);
    asyncFunc2((data) => {
        console.log(data);
        asyncFunc3((value) => {
            console.log(value);
        });
    });
});

console.log("Stop");


// Callback Hell - Callback inside another callback - makes code messier
// To solve this problem, promises comes into picture

// Promises - It represents the eventual completion or failure of an asynchronous event

console.log("Start");

// Creation of Promise
const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if(result) resolve("Promise is resolved...");
        else reject(new Error("Promise is rejected..."));
    }, 5000);
});

console.log(sub); // Promise { <pending> }

// Execution of Promise
sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log("Stop");


// Directly resolve or reject a promise
console.log("Start");

// Resolved Promise
const res1 = Promise.resolve("Promise is resolved...");
console.log(res1);
res1.then((val) => {
    console.log(val);
});

// Rejected Promise
const res2 = Promise.reject("Promise is rejected...");
console.log(res2);

res2.catch((err) => {
    console.log(err);
});

console.log("Stop");

// Executing one async function after another finishes its execution - Using Promises
console.log("Start");

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async Function 1 executed...");
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async Function 2 executed...");
        }, 1000);
    })
}

function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async Function 3 executed...");
        }, 1000);
    });
}

// Execute one after another but all promises start executing at time t=0sec and after t=1sec, all finishes its execution
asyncFunc1().then((val) => {
    console.log(val);
})

asyncFunc2().then((val) => {
    console.log(val);
})

asyncFunc3().then((val) => {
    console.log(val);
})

// Execute one after another but all promises will not start executing at t=0sec
// But First start at t=0s, after its execution, next promise start executing also take 1 sec
// Then last promise executes that also takes 1 more sec
asyncFunc1().then((mess1) => {
    console.log(mess1);
    asyncFunc2().then((mess2) => {
        console.log(mess2);
        asyncFunc3().then((mess3) => {
            console.log(mess3);
        })
    })
})

// Here also, above you can see the pyramid like structure, not much easier to understand
// So to solve that problem, promise chaining comes into picture

// Now below code looks perfect

// Promises Chaining
asyncFunc1().then((mess) => {
    console.log(mess);
    return asyncFunc2();
}).then((mess) => {
    console.log(mess);
    return asyncFunc3();
}).then((mess) => {
    console.log(mess);
}).catch((err) => {
    console.log(err);
})

// Promise Combinators
// -------------------
// 1. Promise.all()
// - It takes an array of all the promises and run them in parallel, 
// - it will return an array of promises with fulfilled state, if each promise gets fulfilled
// - Else it will return the rejected promise and it will fail whole Promise.all()

Promise.all([
    asyncFunc1(),
    asyncFunc2(),
    asyncFunc3()
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

/*
    [
        'Async Function 1 executed...',
        'Async Function 2 executed...',
        'Async Function 3 executed...'
    ]
*/

/*
    When Promise.all resolves, the res parameter in .then is an array containing the 
    resolved values of asyncFunc1, asyncFunc2, and asyncFunc3, in the same order as the promises in the input array.

    The results are printed all at once because .then is executed only after all promises are resolved. 
    It doesn't execute for each individual promise resolution but waits for all of them to complete.
*/

// 2. Promise.race()
// It also takes an array of all the promises, but it will return the first executed promise
// No matter it is resolve or reject, it will return it and later handled by then or catch
// Promise which executes first will only be returned and ignores all other promises

Promise.race([
    asyncFunc1(),
    asyncFunc2(),
    asyncFunc3()
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

/*
    Async Function 1 executed...
*/

// 3. Promise.allSettled()
// It works same like Promise.all(), but it returns the whole array even any of the promise fails
// Not like Promise.all(), which only return the failed promise in that case

Promise.allSettled([
    asyncFunc1(),
    asyncFunc2(),
    asyncFunc3()
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

/*
    3rd Promise made as rejected in temp file, to see how Promise.allSettled works
    [
        { status: 'fulfilled', value: 'Async Function 1 executed...' },
        { status: 'fulfilled', value: 'Async Function 2 executed...' },
        { status: 'rejected', reason: 'Async Function 3 executed...' }
    ]
*/

// 4. Promise.allSettled()
// It works same like Promise.race(), but it returns the fulfilled promise and ignores all other promises, even rejected executed first, that also will get ignored
// But if all the promises are rejected then it will give an error, all promises are rejected

Promise.any([
    asyncFunc1(),
    asyncFunc2(),
    asyncFunc3()
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

/*
    All the promises are made as rejected, so to see the behaviour of Promise.any()

    [AggregateError: All promises were rejected] {
        [errors]: [
            'Async Function 1 executed...',
            'Async Function 2 executed...',
            'Async Function 3 executed...'
        ]
    }
*/

console.log("Stop");

// Modern way to handle Promises - async await
const rest = async () => {
    try {
        const message1 = await asyncFunc1();
        const message2 = await asyncFunc2();
        const message3 = await asyncFunc3();

        console.log({message1, message2, message3});
    } catch (error) {
        console.log("Promise failed", error);
    }
}

rest();

/*
    All the promises are made as rejected in temp file
    Output: Promise failed Async Function 1 executed...

    As soon as first promise fails, it will go to catch block and handle that error
    and comes out of try block, leaving other promises

    For below result, all the promises made as resolve
    Output:

    {
        message1: 'Async Function 1 executed...',
        message2: 'Async Function 2 executed...',
        message3: 'Async Function 3 executed...'
    }
*/

// To execute the promise one after another, no need to wait for any promise get failed and
// if any one promise fails, it will break the flow, jumps out of the try block and go to catch part

const restt = async () => {
    try {
        const message1 = await asyncFunc1();
        console.log(message1);
        const message2 = await asyncFunc2();
        console.log(message2);
        const message3 = await asyncFunc3();
        console.log(message3);
    } catch (error) {
        console.log("Promise failed", error);
    }
}

restt()

// Q1: What is the Output?

console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
})

promise1.then((res) => {
    console.log(res);
})

console.log("End");

/*
    Output:
    -------
    Start
    1
    End
    2
*/

// Reason: First Start will print, then inside the Promise, console part is synchronous, so it will execute just after it
// But resolve(2) --> Promise resolution happens asyncronously, later end will get printed and then async operation will execute
// i.e. 2 gets printed to the console

// Q2: What is the Output?

console.log("Start");

const promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
})

promise2.then((res) => {
    console.log(res);
})

console.log("End");

/*
    Output:
    -------
    Start
    1
    3
    End
    2
*/

// Another variant of this question
console.log("Start");

const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(3);
})

promise.then((res) => {
    console.log(res);
})

console.log("End");

/*
    Output:
    -------
    Start
    1
    3
    End
*/

// Reason: Promise will never consume, it will not go to then part, as there is no resolve and then is related to resolve only
// So the code inside then part, will not execute or ignored by JS Engine

// Q3: What is the Output?
console.log("Start");

// Implicit return
const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve("success");
    })

console.log("middle");

fn().then((res) => {
    console.log(res);
});

console.log("End");

/*
    Output:
    -------
    Start
    middle
    1
    End
    success
*/

// Q4: What's the Output?
function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let prom = job();

prom.then(function() {
    console.log("Success 1");
}).then(function() {
    console.log("Success 2");
}).then(function() {
    console.log("Success 3");
}).catch(function() {
    console.log("Error 1");
}).then(function() {
    console.log("Success 4");
});

/*
    Output:
    -------
    Error 1
    Success 4
*/

// Reason: As promise is rejected, it will be handled by catch and in catch block, it is not throwing any new error
// So it recovers from the rejection and then the promise becomes resolved, later handled by 'then' chained to catch

// Q5: What's the Output?
function jobb(state) {
    return new Promise(function (resolve, reject) {
        if(state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}

let proms = jobb(true);

proms.then(function(data) {
    console.log(data);
    return jobb(false);
}).catch(function(error) {
    console.log(error);
    return "Error Caught" // it will be counted as resolved promise and go then block
}).then(function(data) {
    console.log(data);
    return jobb(true);
}).catch(function(error) {
    console.log(error);
})

/*
    Output:
    -------
    success
    error
    Error Caught
*/

// Q6: What's the Output?
function jobe(state) {
    return new Promise(function (resolve, reject) {
        if(state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}

let pr = jobe(true);

pr.then(function(data) {
    console.log(data);
    return jobe(true);
}).then(function(data) {
    if(data !== "victory") {
        throw "Defeat"; // It will be treated as a rejected promise
    }
    return jobe(true);
}).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
    return jobe(false);
}).then(function(data) {
    console.log(data);
    return jobe(true);
}).catch(function(error) {
    console.log(error);
    return "Error Caught"; // It will be treated as resolved promise
}).then(function(data) {
    console.log(data);
    return new Error("test"); // Not returning a promise, It will be treated as resolve promise
}).then(function(data) {
    console.log("Success:", data.message);
}).catch(function(data) {
    console.log("Error:", data.message);
})

/*
    Output:
    -------
    success
    Defeat
    error
    Error Caught
    Success: test
*/

// Q7: Promise Chaining

// You have to create the firstPromise and resolve it with first and create the secondPromise and resolve it with firstPromise
// Then you have to resolve the secondPromise and return the result to firstPromise and then execute it

const firstPromise = new Promise((resolve, reject) => {
    resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
});

secondPromise.then((res) => {
    return res;
}).then((res) => console.log(res));

// Output: First!

// Q8: Rewrite this example using 'async/await' instead of '.then/catch'
function loadJson(url) {
    return fetch(url).then((response) => {
        if(response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
}

loadJson("https://jsonplaceholder.typicode.com/posts").catch((err) => {
    console.log(err);
})

// using async/await
async function loadJson(url) {
    const response = await fetch(url);
    if(response.status == 200) {
        let json = await response.json();
        return json;
    }
    
    throw new Error(response.status);
}

try {
    loadJson("https://jsonplaceholder.typicode.com/posts");
} catch(err) {
    console.log(err);
}

// Q9: Solve Promise Recursively
// funcPromises --> Array of Promises

function asyncFun1() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 1");
    })
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 2");
    })
}

function asyncFun3() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 3");
    })
}

function promRecurse(funcPromises) {
    if(funcPromises.length === 0) return;

    const currProm = funcPromises.shift();

    currProm.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    promRecurse(funcPromises);
}

promRecurse([
    asyncFun1(),
    asyncFun2(),
    asyncFun3()
]);

// Q10: Promise Polyfill Implementation

function PromisePolyFill(executor) {
    let onResolve, onReject, isFulfilled=false, isRejected=false, isCalled=false, value;

    function resolve(val) {
        isFulfilled = true;
        value = val;

        if(typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;

        if(typeof onReject === 'function') {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function(callback) {
        onResolve = callback;

        if(isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }

        return this;
    }

    this.catch = function(callback) {
        onReject = callback;

        if(isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }

        return this;
    }

    try {
        executor(resolve, reject);
    } catch(error) {
        reject(error);
    }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

PromisePolyFill.resolve = (val) => {
    return new PromisePolyFill(function executor(resolve, reject) {
        resolve(val);
    });
}

PromisePolyFill.reject = (val) => {
    return new PromisePolyFill(function executor(resolve, reject) {
        reject(val);
    });
}

/*
    For async operation, it is possible because of functions like - setTimeout, setInterval inside the Promise, which makes that Promise behaves asynchronously
    so, in that case, it will wait for some time, and when promise is in pending state, .then is called after it and when time has finished executing, then resolve will be called
    Now, for async, .then is aclled first, inside that, its if condition is false and it will not be executed and when resolve is called, 
    its if condition gets executed and it will call the callback passed with .then
    
    But in case of sync operation, directly resolve will be called first, as there is no async operation and later .then is called and executed
    Now, resolve will be called first, its if condition is false, as onResolve is undefined as .then is not called yet
    So, .then if condition gets executed and it will call the callback function under .then

    Note: new Promise(() => {}) --> new Promise(callback)
    Someone needs to call this callback explicitly, then only it will be executed
*/

function asyncFunction1() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 1");
    })
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 2");
    })
}

function asyncFunction3() {
    return new Promise((resolve, reject) => {
        resolve("Async Function 3");
    })
}

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if(!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((res) => {
                results[idx] = res;
                pending--;

                if(pending === 0) {
                    resolve(results);
                }
            }, reject);
        });
    });
}

Promise.allPolyfill([
    asyncFunction1(),
    asyncFunction2(),
    asyncFunction3()
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error("Failed:", err);
});