// Parent
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child - Inheriting the Parent
class Teacher extends User{
    constructor(username, email, password){
        super(username) // Calling Parent's constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating the instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()
chai.logMe()

// Creating the instance of User
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User);    // true

// Note:
console.log(chai === Teacher); // false - As chai is an instance of the class, not actually the class