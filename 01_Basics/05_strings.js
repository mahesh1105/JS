// String in JS can be written in single (''), double quote ("") and backticks (``)

const myName = "Mahesh"
const repoCount = 50

// Old way to Concatenate - Not preffered
// console.log(myName + repoCount + " Value");

// Modern Way - String Interpolation
// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

// String Objects - Not an Array
const gameName = new String('mahesh012')

// console.log(gameName[0]); // To Access Particular Index
// console.log(gameName.__proto__);

// console.log(gameName.length) // Length of string
// console.log(gameName.toUpperCase()) // To convert the string to Uppercase
// console.log(gameName.charAt(2)) // To get the char at index 2
// console.log(gameName.indexOf('h')) // To get the position of char 'h' in the String

// Parameter of substring - ( Starting index, Last Index ) => [StartIndex, LastIndex)
// substring doesn't take negative value as a parameter
const newString = gameName.substring(2, 4)
// console.log(newString) // he

// The slice() method of String values extracts a section of this string and 
// returns it as a new string, without modifying the original string
const myStr = "Hey My Name is Mahesh and I am from Haryana" // 43

// Syntax: String.slice(startIndex, endIndex) => [startIndex, endIndex)

// Note: endIndex is optional, if not provided then it will be String.length
const finStr1 = myStr.slice(15)
// console.log(finStr1) // Mahesh and I am from Haryana

const finStr2 = myStr.slice(15, 25)
// console.log(finStr2) // Mahesh and

// If indexStart < 0, the index is counted from the end of the string. 
// In this case, the substring starts at max(indexStart + str.length, 0).
const finStr3 = myStr.slice(-4)
// console.log(finStr3) // yana

// If indexStart >= str.length, an empty string is returned.
const finStr4 = myStr.slice(50)
// console.log(finStr4) // "" --> Empty String

// If indexStart is omitted, undefined, or cannot be converted to a number, it's treated as 0.
const finStr5 = myStr.slice("a")
const finStr6 = myStr.slice(NaN)
// console.log(finStr5) // Whole String
// console.log(finStr6) // Whole String

// If indexEnd is omitted or undefined, or if indexEnd >= str.length, slice() extracts to the end of the string.
const finStr7 = myStr.slice(15, 60)
// console.log(finStr7)

// If indexEnd <= indexStart after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), 
// then an empty string is returned.
const finStr8 = myStr.slice(30, 3)
// console.log(finStr8) // "" --> Empty String

// Here startIndex is convereted to Positive - i.e. -7 + 43 = 36 and endIndex = 5
const finStr9 = myStr.slice(-7, 5)
// console.log(finStr9) // "" --> Empty String

const newStringOne = "    Mahesh     "
// console.log(newStringOne);
// This function removes the extra whitespaces from the string plus newline characters if there is any
// console.log(newStringOne.trim())

// Sometimes user put spaces between the url link, browser doesn't understand the spaces
// so, it convert the space to %20 i.e. URL encoding
const url = "https://mahesh.com/mahesh%20saini"
// Replace '%20' to '-' and print the String
// console.log(url.replace('%20', '-'))

// This method will basically checks whether the particular word is included in URL or not
// If it is included then it returns true else false
// console.log(url.includes('mahesh'))
// console.log(url.includes('hello'))

// This method will basically convert the string into an array based on given separator
const finString = "mahesh-saini-87"
// console.log(finString.split('-')) // [ 'mahesh', 'saini', '87' ]