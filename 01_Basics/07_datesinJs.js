// Date in JS
// Start from Jan 01, 1970

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate)

// toString() = toDateString() + toTimeString()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())

// toLocaleString() = toLoacleDateString() + toLocaleTimeString()
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// console.log(myDate.toISOString())

// Creating our own Date,, Date(Year, Month, Date)
// Month - Starting from zero...
let myCreatedDate = new Date(2000, 4, 11)
// console.log(myCreatedDate.toDateString())

// Creating new Date,, Date(Year, Month, Date, Hour, Min)
let myNewDate = new Date(2000, 4, 11, 15, 30)
// console.log(myNewDate.toLocaleString())

// Time Format : YYYY-MM-DD
let myDateFormat1 = new Date("2024-05-11")
// Time Format : MM-DD-YYYY
let myDateFormat2 = new Date("05-11-2024")
// console.log(myDateFormat1.toLocaleString())
// console.log(myDateFormat2.toLocaleString())

// Time in ms(millisecond)
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDateFormat1.getTime())

// To get time in second
// console.log(Math.floor(Date.now()/1000))

let myOldDate = new Date()
// console.log(myOldDate.getDate())
// getMonth() - Start from zero
// console.log(myOldDate.getMonth() + 1)
// getDay() - Start from one
// console.log(myOldDate.getDay())

myOldDate.toLocaleString('default', {
    weekday: "narrow",
    month: "narrow"
})