// String in JS can be written in single ('') or double quote ("")

const myName = "Mahesh"
const repoCount = 50

// Old way to Concatenate - Not preffered
// console.log(myName + repoCount + " Value");

// Modern Way
// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

// String Objects - Not an Array
const gameName = new String('mahesh012')

// console.log(gameName[0]); // To Access Particular Index
// console.log(gameName.__proto__);

// console.log(gameName.length) // Length of string
// console.log(gameName.toUpperCase()) // To convert the string to Uppercase
// console.log(gameName.charAt(2)) // To get the char at index 2
// console.log(gameName.indexOf('h')) // To get the position of char 'h' in the String

// Parameter of substring - ( Starting index, Last Index )
// substring doesn't take negative value as a parameter
const newString = gameName.substring(0, 4)
// console.log(newString)

// Need to check - Doubt
const anotherString = gameName.slice(-7, 5)
// console.log(anotherString)

const newStringOne = "    Mahesh     "
// console.log(newStringOne);
// This function removes the extra whitespaces from the string plus newline characters if there is any
// console.log(newStringOne.trim())

// Sometimes user put spaces between the url link, browser doesn't understand the spaces
// so, it convert the space to %20 i.e. URL encoding
const url = "https://mahesh.com/mahesh%20saini"
// console.log(url.replace('%20', '-'))

// This method will basically checks whether the particular word is included in URL or not
// console.log(url.includes('mahesh'))
// console.log(url.includes('hello'))

// This method will basically convert the string into an array based on given separator
const finString = "mahesh-saini-87"
// console.log(finString.split('-'))