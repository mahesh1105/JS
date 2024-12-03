# DOM Projects

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

``` JavaScript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button)

    button.addEventListener('click', (e) => {
        // Print the event
        console.log(e)
        // Print the target from which the event coming
        console.log(e.target)

        // Change the Background Color by Id
        body.style.backgroundColor = e.target.id
    })
})
```

## Project 2

``` JavaScript
const form = document.querySelector('form')

// This usecase will give you empty height and weight
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "<span>Please enter a valid height</span>"
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "<span>Please enter a valid weight</span>"
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        if(bmi < 18.5) {
            result.innerHTML = `<span>BMI: ${bmi} & Under Weight</span>`
        } else if(bmi >= 18.5 && bmi < 25) {
            result.innerHTML = `<span>BMI: ${bmi} & Healthy Weight</span>`
        } else if(bmi >= 25 && bmi < 30) {
            result.innerHTML = `<span>BMI: ${bmi} & Over Weight</span>`
        } else {
            result.innerHTML = `<span>BMI: ${bmi} & Obesity</span>`
        }
    }
})
```

## Project 3

``` JavaScript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(() => {
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 4

``` JavaScript
// Generate the random number between [1, 101)
let randomNumber = parseInt(Math.random() * 100 + 1)

// It will return an Empty string, if values fetched here
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true
// Calling the main function to start the game
mainFunc()

const startGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        // Generating the new random number before starting the game
        randomNumber = parseInt(Math.random() * 100 + 1)
        // Resetting or Clearing the variables
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = '10'
        startOver.removeChild(p)
        // Removing the disabled attribute so that user can input values after starting the game
        userInput.removeAttribute('disabled', '')

        // Setting the playGame to true, so that new game can be started
        playGame = true

        // Calling the main function so that user can start the game again
        mainFunc()
    })
}

const endGame = () => {
    userInput.value = ''
    // Setting the attribute to disabled so that user cannot input number
    userInput.setAttribute('disabled', '')
    // Adding a class button to standalone p
    p.classList.add('button')
    // Setting the innerHTML of that standalone p
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    // Appending that standalone p to last div, so that it will show the Start new Game message
    startOver.appendChild(p)
    // Setting the playGame variable to false, so that user can't play more
    playGame = false
    startGame()
}

const displayGuess = (guess) => {
    // Clearing the Input value so that new value can be taken
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    remaining.innerHTML = `${10 - numGuess}`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const checkGuess = (guess) => {
    if(guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if(guess > randomNumber) {
        displayMessage(`Number is too high`)
    } else {
        displayMessage(`You guessed it right`)
        endGame()
    }
}

const validateUserInput = (guess) => {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1 || guess > 100) {
        alert('Please enter a number b/w 1 to 100')
    } else {
        // Pushing the guessed number into the container
        prevGuess.push(guess)
        numGuess++
        if(numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function mainFunc() {
    if(playGame) {
        submit.addEventListener('click', (e) => {
            // Stops the value going to server or whereever it gets called
            e.preventDefault()
    
            const guess = parseInt(userInput.value)
            console.log(guess)
            validateUserInput(guess)
        })
    }
}
```

## Project 5

``` JavaScript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>KeyName</th>
            </tr>
            <tr>
                <td>${e.key === " " ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})
```

## Project 6

``` JavaScript

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

```