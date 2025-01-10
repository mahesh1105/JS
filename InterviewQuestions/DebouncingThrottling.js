// Debouncing and Throttling in JS

// Debouncing and Throttling are techniques used in JavaScript to optimize event handlers
// particularly those that trigger frequently (like resize, scroll, or input events). 
// They help improve performance by limiting the number of times a function is executed within a given timeframe

// Debouncing:
/*
    Delays the execution of a function until a certain amount of time has passed since the last event trigger.
    
    Analogy: Imagine a door that automatically closes. Debouncing is like adding a timer to the door closer. 
    It waits a few seconds after the last person passes through before closing, preventing it from closing prematurely if someone else is about to enter.

    Use Case:
    1. Search suggestions: Avoid making API calls for every keystroke.
    2. Window resize: Only recalculate layout after the window has stopped resizing.
    3. Form validation: Validate the form after the user has stopped typing for a short period.
*/

// Throttling:
/*
    Limits the rate at which a function can be called. It ensures that the function is executed at most once within a specified time interval.

    Analogy: Imagine a bouncer at a club. Throttling is like the bouncer only allowing a certain number of people to 
    enter the club within a specific time frame, even if there's a long line.

    Use Case:
    1. Scroll events: Limit the number of times a function is called while scrolling to improve scrolling smoothness.   
    2. Mousemove events: Prevent excessive updates to the mouse cursor's position.   
    3. Game loop updates: Limit the number of game logic updates per second to maintain a consistent frame rate.
*/

// Debouncing: Executes the function only once after the events have stopped occurring for a specified time.
// Throttling: Executes the function at a maximum rate, regardless of how frequently the events occur.

// By using debouncing and throttling effectively, you can significantly improve the performance and responsiveness 
// of your JavaScript applications, especially in scenarios where event handlers are triggered frequently.

const btn = document.querySelector('.btn');
const btnPress = document.querySelector('.increment-pressed');
const count = document.querySelector('.increment-count');

// Q1: Create a button UI and add debounce as follows:
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of debounce

// let pressedCount=0;
// let triggerCount=0;

// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener('click', () => {
//     btnPress.innerHTML = ++pressedCount;
//     debouncedCount();
// })

// Q2: Create a button UI and add throttle as follows:
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" every 800ms of throttle

// let prCount=0;
// let trCount=0;

// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++trCount;
// }, 800);

// btn.addEventListener('click', () => {
//     btnPress.innerHTML = ++prCount;
//     throttledCount();
// })

// Main Difference between Debouncing and Throttling
// Debouncing: 
// Function or API call will occur only once when the event has stopped occuring for the specified time
// Throttling:
// Function or API call will occur every specified time when the event is occuring, regardless of how frequently the event occurs

// Q3: Create Debounce() Polyfill Implementation
const myDebounce = function(callback, delay) {
    let timer;

    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

// let pressedCount=0;
// let triggerCount=0;

// const debouncedCount = myDebounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener('click', () => {
//     btnPress.innerHTML = ++pressedCount;
//     debouncedCount();
// })

// Every time setTimeout is called, it will return some unique id
// As the button is pressed X times, so debounce function is also called X times, resulting in calling of setTimeout X times
// But setTimeout behaves asynchronously, when first call is made, no timer exists, so it will setTimeout in first call
// But delay has not been happened yet, button is presses again and 2nd call is made to debounce function
// resulting in calling of setTimeout again, but before setTimeout clearTimeout is called and it will clear the timer,
// which is basically the last setTimeout call, so it will not happen and request will be made to setTimeout again in second call
// As it will see the delay, setTimeout will execute after specified delay

// clearTimeout - is used to stop the setTimeout from occuring, so that the callback inside it will not execute
// Means if after setTimeout, clearTimeout is called and id returned by setTimeout is provided to clearTimeout, then it will never execute

// Q4: Create Throttle() Polyfill Implementation
let start = new Date().getTime();

function myThrottle(callback, delay) {
    let last = 0;

    return function(...args) {
        let now = new Date().getTime();
        if(now - last < delay) return;
        last = now;
        callback(...args);
    }
}

let prCount=0;
let trCount=0;

// myThrottle function is called and it will return a function, that is executed later
const throttledCount = myThrottle(() => {
    count.innerHTML = ++trCount;
}, 1000);

btn.addEventListener('click', () => {
    btnPress.innerHTML = ++prCount;
    const now = new Date().getTime();
    const seconds = (now - start) / 1000;
    console.log(seconds.toFixed());
    throttledCount();
})

// new Date().getTime(); --> value will be some bigger value in ms like: 1736424000500
// In first call to throttledCount, now - last < delay, i.e. (1736424000500 - 0 < 1000) --> false
// and then last will be updated to now, and callback will be executed in first call
// In second call to throttledCount(), like - after 500ms, difference between now and last will be 500ms approx
// because of that callback will not execute and control is returned back to callee,
// later when the difference comes out to be more than the delay then the callback will be executed