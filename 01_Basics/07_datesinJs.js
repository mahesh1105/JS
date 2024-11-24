// Date in JS
// Start from Jan 01, 1970

// Current Date and Time
let myDate = new Date()
// console.log(myDate); // YYYY-MM-DDTHH:MM:SS.MSZ
// console.log(typeof myDate) // Object

// toString() = toDateString() + toTimeString() --> Standard Date & Time
// console.log(myDate.toString()) // DAY MONTH DATE YEAR HH:MM:SS GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // DAY MONTH DATE YEAR
// console.log(myDate.toTimeString()) // HH:MM:SS GMT+0530 (India Standard Time)

// toLocaleString() = toLoacleDateString() + toLocaleTimeString() --> Local Date & Time
// console.log(myDate.toLocaleString()) // MM/DD/YYYY, HH:MM:SS AM|PM
// console.log(myDate.toLocaleDateString()) // MM/DD/YYYY
// console.log(myDate.toLocaleTimeString()) // HH:MM:SS AM|PM

// console.log(myDate.toISOString()) // YYYY-MM-DDTHH:MM:SS.MSZ

// Creating our own Date,, Date(Year, Month, Date)
// Month - Starting from zero --> Jan = 0, Feb = 1 ....
let myCreatedDate = new Date(2000, 4, 11)
// console.log(myCreatedDate.toDateString())

// Creating new Date,, Date(Year, Month, Date, Hour, Min)
let myNewDate = new Date(2000, 4, 11, 15, 30)
// console.log(myNewDate.toLocaleString())

// Time Format : YYYY-MM-DD
let myDateFormat1 = new Date("2024-05-11")
// Time Format : MM-DD-YYYY
let myDateFormat2 = new Date("05-11-2024")
// console.log(myDateFormat1.toLocaleString()) // 5/11/2024, 5:30:00 AM
// console.log(myDateFormat2.toLocaleString()) // 5/11/2024, 12:00:00 AM

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
// getDay() - Start from Zero --> Sun = 0, Mon = 1 ....
// console.log(myOldDate.getDay())

myOldDate.toLocaleString('default', {
    weekday: "narrow",
    month: "narrow"
})