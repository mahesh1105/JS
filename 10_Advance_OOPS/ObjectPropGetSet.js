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