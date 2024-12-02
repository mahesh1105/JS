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