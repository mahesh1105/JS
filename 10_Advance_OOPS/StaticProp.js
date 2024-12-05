// Parent Class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // static method means function belongs to the class itself rather than its instances
    static createId(){
        return `123`
    }
}

// Child Class
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// Creating an instance of User - Parent
const hitesh = new User("hitesh")

// Accessing the static method using Object is not allowed, results in error
// console.log(hitesh.createId()) // Error
console.log(User.createId()); // 123

// Creating an instance of Teacher - Child
const iphone = new Teacher("iphone", "i@phone.com")

// Even Child class' instance cannot access static methods
// console.log(iphone.createId()); // Error
console.log(Teacher.createId()); // 123

// As Child class is inheriting the properties of the parent, then createId is also available for it
// But it can be accessed only using the class name not with the instances