// Create the getter and setter methods without using the class
// Note - Why creating properties for function, At the end function is also an Object, So this is allowed
function user(email, password) {
    // This will not work - as first you are creating two properties email and password, then assigning values to it - OK
    // Later you are overwriting the same properties using defineProperty() by assigning getter/setter value to these properties
    // this.email = email
    // this.password = password

    // Other way - create property with different name - (_email and _password) --> Property Name
    this._email = email
    this._password = password

    // To create the email property for setters and getters -
    Object.defineProperty(this, 'email', {
        get: function() {
            return `${this._email.toLowerCase()}`
        },
        set: function(value) {
            this._email = value
        }
    })

    // To create the password property for setters and getters -
    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password}111`
        },
        set: function(value) {
            this._password = value
        }
    })
}

const obj = new user("MaheshSaini@google.com", "124578")
// console.log(obj);

/*
    user { email: [Getter/Setter], password: [Getter/Setter] }
    if properties are overwritten

    But if you want to use the setter to set the values instead of creating the separate property _email or _password
    then define getters and setters first, later set the values, See Below functiom
*/

// Accessing both the properties separately
// console.log(obj.email);    // getters used
// console.log(obj.password); // getters used

function user2(email, password) {

    // To create the email property for setters and getters -
    Object.defineProperty(this, 'email', {
        get: function() {
            return `${this._email.toLowerCase()}`
        },
        set: function(value) {
            this._email = value
        }
    })

    // To create the password property for setters and getters -
    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password}111`
        },
        set: function(value) {
            this._password = value
        }
    })

    // Now setters are used to set the values - which are defined above
    this.email = email
    this.password = password

    // (_email and _password) --> Property Name, But they are handled internally using getters and setters
}

const obj2 = new user("MaheshSaini@google.com", "124578")
console.log(obj2);

// Accessing both the properties separately
console.log(obj2.email);    // getters used
console.log(obj2.password); // getters used