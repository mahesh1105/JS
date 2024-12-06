// Class with constructor
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
}

let us = new User("mahesh123@gmail.com", "12345") // Return the new Object to us
// console.log(us); // User { email: 'mahesh123@gmail.com', password: '12345' }

// Class with constructor, getters and setters
class User2 {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        // return `${this.email}` // RangeError: Maximum call stack size exceeded
        return `${this._email}`
    }

    set email(email) {
        // this.email = email // RangeError: Maximum call stack size exceeded
        this._email = email
    }

    get password() {
        // return `${this.password}` // RangeError: Maximum call stack size exceeded
        return `${this._password}`
    }

    set password(password) {
        // this.password = password // RangeError: Maximum call stack size exceeded
        this._password = password
    }
}

let us2 = new User2("mahesh@ai.com", "abc")

// Printing the user details - here getters are not used, toString() method is used,
// That's why you will not get any Error - Call Stack exceeded
// console.log(us2);

// Getting the email and password directly - use of getters
// console.log(us2.email);    // getters used
// console.log(us2.password); // getters used

/*
    RangeError: Maximum call stack size exceeded
    
    Reason: get email & set email AND get password & set password, here email and password are getters and setters, 
    Inside the constructor, when you are setting the properties email and password, it is not setting the values directly
    Instead it is calling the setters to set the values, but now, inside the setters if you write (this.email = email) OR (this.password = password)
    same line of code is there in constructor, which is triggering the setters to set the values, here you have placed same code in setters also
    result in calling the setter again and again and call stack will overflow
    Same thing happening with getters, while getting values, you are writing (return `${this.email}`), and it calling getter again and again
    resulting in the overflow of the call stack, that's the reason you are seeing that error message
*/

/*
    Note: email and _email are different, and same password and _password are also different
    email is getter and setter, but _email is private or internal property of the class
    password is getter and setter, but _password is private or internal property of the class
    _email and _password is not truly private in JavaScript—it’s just a convention to indicate that it’s meant to be treated as private., 
    Also, if someone try to access (_email or _password) directly outside the class, it is accessible

    JavaScript's _ Convention:
    . The underscore (_) is used by developers as a naming convention to suggest that a property is intended for internal use and should not be accessed directly.
    . However, JavaScript does not enforce privacy for properties prefixed with _. They are still publicly accessible.

    Note: If you really want to make a property private then use # instead of _, using # property will become private and
    if someone try to access it directly outside class results in syntax error
    Also, then the name of the property will be #prop_name, # is also included in the name, i.e. # is an intrinsic part of the field's name and is required for accessing it within the class.
*/

// Class with constructor, getters, setters and private properties
class User3 {
    #email     // If fields are private, neccessary to declare it on the top of class, else will get syntax error
    #password

    constructor(email, password) {
        this.email = email;       // Initialize private field '#email'
        this.password = password; // Initialize private field '#password'
    }

    get email() {
        return this.#email; // Access '#email' inside the class
    }

    set email(value) {
        this.#email = value; // Modify '#email' inside the class
    }

    get password() {
        return this.#password; // Access '#email' inside the class
    }

    set password(value) {
        this.#password = value; // Modify '#email' inside the class
    }
}

const us3 = new User3("example@domain.com", "mypassword");

// Inside the class, you use #email
console.log(us3.email);    // Works: "EXAMPLE@DOMAIN.COM"

// Outside the class, you cannot access '#email'
// console.log(us3.#email);   // SyntaxError: Private field '#email' must be declared in an enclosing class

/*
    Inside the class, you can use #email or #password, as they are private property of the class, can be used inside the class
    But outside if you want to use them, then you have to use the getters and setters defined for them
    Now, inside the class, you can use email and #email both, but here comes the difference
    While setting the values, if you have used #email directly, it will directly assign the value to the private property, without validation and verification
    AND if you have used the setters to do that task (behind the scenes it will also set the value to #email inside the function), 
    but in setters, you can add several checks to validate the email, and if it is as per the format, then only assign to #email

    here comes the main use of getters, it allows you to access the private properties outside the class
*/