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