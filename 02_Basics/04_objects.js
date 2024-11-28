// Sigleton Object - made using constructor
const tinderUser = new Object()

// Adding elements to the Object
tinderUser.id = "123abc"
tinderUser.name = "Mahesh Saini"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// Non Singleton Object OR Object Literals
// const newObj = {}
// console.log(newObj)

const regularUser = {
    email: "maheshsaini123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mahesh",
            lastname: "Saini"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// Assigning all the object elements to single object
// This curly braces {} as first agrument to function ensures that all the object is assigned to object only
// Basically, the first argument is target and rest all are source
const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4)

// All the object can be assigned to single object using spread operator ...
// First spread the object and then combine it
const obj5 = {...obj1, ...obj2, ...obj3}

// console.log(obj5)

// checking whether obj4 is equals to obj5 or not
// Output: false, since it compares the memory addresses not the actual content of object
// if we want to compare the object, then we need to explicity do that
// console.log(obj4 == obj5)

// Array of objects
const myArr = [
    {
        id: 1,
        email: "m12@gmail.com"
    },
    {
        id: 2,
        email: "ms123@gmail.com"
    },
    {
        id: 3,
        email: "msk12@gmail.com"
    }
]

// Accessing the array element at particular index
// console.log(myArr[0])
// console.log(myArr[1])

// The will give the output in the form of an array, that we can use further to iterate through it
// console.log(Object.keys(tinderUser)) // Return an array of keys -- ['id', 'name', 'isLoggedIn']
// console.log(Object.values(tinderUser)) // Return an array of values -- ['123abc', 'Mahesh Saini', false]

// This will give 2D array as an output - i.e. Array inside Array
// Array of Arrays of Key-Value pairs
// console.log(Object.entries(tinderUser))

// Sometimes while accessing data from database, there will be chances that the required property will not be there
// Then this can be checked by using the below command
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Object de-structure
const course = {
    coursename: "JS Fundamentals",
    price: "1000",
    courseInstructor: "Mahesh"
}

// if you want to access the courseInsructor under course object
// but if we need to do it 3-4 times, then everywhere we have to write this course.courseInstructor
console.log(course.courseInstructor)

// Access the courseInstructor from course
const {courseInstructor} = course
console.log(courseInstructor)

// Access the "courseInstructor" from course and change it to "instructor"
// It can now be accessed using "instructor" instead of "courseInstructor"
const {courseInstructor: instructor} = course
console.log(instructor)

// We can get the data from JSON (JavaScript Object Notation) API
// It is basically collection of objects, which we use to add data inside it,
// so that later we can use that data for processing

// JSON
// {
//     {
//         name: "Mahesh",
//         id: 23
//     },
//     {
//         age: 14
//         favColor: "Red"
//     }
// }

// JSON
// [
//     {},
//     {},
//     {}
// ]