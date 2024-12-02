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