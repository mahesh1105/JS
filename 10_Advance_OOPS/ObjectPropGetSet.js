// Creating the Object and defining setters & getters as the property of the Object
const user = {
    email: "maheshsaini@google.com",
    password: "12345",

    get: function() {
        return `Email: ${email} and Password: ${password}`
    },
    set: function(email, password) {
        this.email = email
        this.password = password
    }
}

// To Create the separate instance of the user use Object.create()
const us = Object.create(user)
console.log(us.email);

// Creating getters and setters with email and password
// Note: Property name must differ from setters and getters name
const user2 = {
    _email: "mahesh@ai.com",
    _password: "abcc",

    get email() {
        return `Email: ${this._email}`
    },
    set email(email) {
        this._email = email
    },
    get password() {
        return `Password: ${this._password}`
    },
    set password(password) {
        this._password = password
    }
}

// To Create the separate instance of the user use Object.create()
const us2 = Object.create(user2)
console.log(us2._email);