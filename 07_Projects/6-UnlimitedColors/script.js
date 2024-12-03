// Problem Statement: When clicked on start, body color should change every time timeout expires and
// Once stop clicked, then it should stop changing the color or resset the body color to white

const colorCont = ['red', 'blue', 'green', 'pink', 'aqua', 'yellow', 'orange', 'black', 'grey', 'violet']

// Generate the Random Color using HEX Value
const genRandomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i=0 ; i<6 ; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

// Create a variable to maintain the container elements
// Note if yoy declare and assign this variable inside the setInterval function
// Then everytime it executes, i will be set to 0 and you will see red color always
let i=0

// Create a variable which will store the reference of setInterval, that is later passed to clearInterval to stop its execution
let refToSetInt

// const startChangingColor = () => {
//     refToSetInt = setInterval(() => {
//         // Change the Body Color from the container
//         document.body.style.backgroundColor = colorCont[i]
//         i++

//         // If it goes out of bound then reset it to zero so that it will not go outside the container
//         if(i == 10) {
//             i=0
//         }

//     }, 500)
// }

// Note - Initially refToSetInt is undefined, and when you check the if case then it will return true
// Here How... 
// The == operator performs loose equality comparison, meaning it treats both null and undefined as equal.
// So, refToSetInt == null will return true if refToSetInt is either null or undefined.

const startChangingColor = () => {
    if(refToSetInt == null) {
        refToSetInt = setInterval(() => {
            // Call the function to generate the random color
            let color = genRandomColor()

            // Change the Body Color to random value
            document.body.style.backgroundColor = color

        }, 500)
    }
}

const stopChangingColor = () => {
    clearInterval(refToSetInt)
    document.body.style.backgroundColor = '#212121'
    // For cleaner code set the reference variable to null
    refToSetInt = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

// Issues Faced:
// Taking the reference of body's background color into a variable so that later on it can be changed 
// directly by assigning to it
// let bodyColor = document.body.style.backgroundColor;
// bodyColor = 'red'
// But this will not work, Reason -->
// JavaScript does not use pass-by-reference for primitive values, 
// such as strings, numbers, or booleans. Instead, it uses pass-by-value for these types.
// Here bodyColor is primitive variable, which basically stores the string as a result of assignment

/*
    1. document.body.style.backgroundColor is a getter/setter:
    When you access document.body.style.backgroundColor, it returns a string value representing the current background color of the body (or an empty string if no color is set).
    When you assign a new value to document.body.style.backgroundColor, it updates the actual background color of the body.

    2. Assignment to bodyColor creates a copy:
    The bodyColor variable receives a copy of the current background color string. 
    Modifying bodyColor does not affect the backgroundColor property of the body, because bodyColor is just a standalone string variable, not a reference to document.body.style.backgroundColor.

    3. Pass-by-reference applies only to objects: ** (IMP)
    If bodyColor were an object or array, modifications to its properties would reflect in the original object because objects are passed by reference. 
    However, in this case, bodyColor is just a string.

    Why it doesn't work
    When you assign colorCont[i] to bodyColor, you're only updating the local bodyColor variable. 
    The actual document.body.style.backgroundColor property remains unchanged because there's no connection 
    between bodyColor and document.body.style.backgroundColor after the assignment.

    Correct Approach:
    Directly update the document.body.style.backgroundColor to target color
    document.body.style.backgroundColor = colorCont[i];

*/

// ---------------------------------------------------------------------------------------------------

// Generate the Random Color using HEX Value
// const genRandomColor = () => {
//     const hex = "0123456789ABCDEF"
//     let color = "#"

//     for(let i=0 ; i<6 ; i++) {
//         color += hex[Math.floor(Math.random() * 16)]
//     }

//     return color
// }

// Generate the Random Color using RGB Value
// const genRandomColor2 = () => {
//     let rgbCont = []

//     for(let i=0 ; i<3 ; i++) {
//         rgbCont.push(Math.floor(Math.Random() * 256))
//     }

//     // return the container and later on use its values to pass in rgb function
//     return rgbCont
// }

// Hex Value = #12bca7
// Hex Value for Color is the combination of 6 characters ranging from 0-15, i.e. 0-9 then A-F
// Possible Hex Values = 16*16*16*16*16*16 = 16,777,216

// RGB(10, 230, 170)
// RGB function takes three arguments and its value ranging from 0-255
// Possible RGB Values = 256*256*256 = 16,777,216

// So any of the above can be used
// Also, Number of possible color = 16,777,216 = (16)^6 OR (256)^3

// Power of Math.random()
// Range --> [0, 1)
// It will generate the random decimal values between 0 and 1, but never generate 1
// So, if you multiply it by 10, then Range --> [0, 10), never generate 10 means between 0 to 9
// If you take floor values will be from 0 to 9, that is the power
// If you want to generate the random number between 0-255, then multiply it by 256
// It will never give 256 and values will be in range from 0-255
// like this you can do,, just multiply it and you will get the range as per you want