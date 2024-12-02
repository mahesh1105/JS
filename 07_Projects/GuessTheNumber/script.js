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