// Use of call in JS
function setUserName(username) {
    // Complex DB Calls, Other work...
    this.username = username
    console.log("Function Called");
}

// Problem:
// function createUser(username, email, password) {
//     setUserName(username)
//     this.email = email
//     this.password = password
// }

// Solution:
function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

// New keyword is used to create the separate instance and createUser() will behave as constructor function and it returns an object to it
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// Output:
/*
    Function Called
    createUser { email: 'chai@fb.com', password: '123' }
*/

// Problem: Even we have called setUserName() function, username didn't set
// The thing happening is - the setUserName() function is getting called, but the values which you are settin using this,
// you are setting to its global EC i.e. its own Execution context, that is not accessible outside

// That's why you have to use call method to store the reference of that function inside createUser and
// also have to pass 'this' keyword as the first argument to that function (which is usually optional in function call)
// It tells JS to set the 'username' value to the execution context of that function, i.e. createUser() not for setUserName()
// Then you will get all the values

// Now Output:
/*
    Function Called
    createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
*/