// Event Propagation in JS

// Q1: What is Event Propagation?
// Event Propagation determines that in which order the element recieves the event

/*
    For example, suppose there are three components namely component1, component2, component3, one inside another.
    Inside these components, we attached the onClickEventListener event handlers.
    Now when we click on component3 the event handler for all the three components will be executed. 
    Now here the question is in which order the event will execute. Here Event Propagation will come into picture.
*/

// Q2: What is Event Bubbling?
// Event Bubbling:
// Here, Event is fired in bottom up order, like bubble goes in the air, i.e. from bottom to top
// This is the default behavior of occuring of event
// Ex: For Button --> Button - Form - Div

// const div = document.querySelector("div")
// const form = document.querySelector("form")
// const button = document.querySelector("button")

// div.addEventListener('click', function() {
//     alert("div");
// })

// form.addEventListener('click', function() {
//     alert("form");
// })

// button.addEventListener('click', function() {
//     alert("button");
// })

// Note: Events which don't bubble are: focus and blur

// Q3: event.target vs this.target vs event.currentTarget

// div.addEventListener('click', func)
// form.addEventListener('click', func)
// button.addEventListener('click', func)

// function func(event) {
//     alert(`currentTarget = ${event.currentTarget.tagName}, target = ${event.target.tagName}, this = ${this.tagName}`)
// }

// currentTarget - Where is the target now - follows event bubbling i.e. bottom up order
// target - From where the event is generated, i.e. source
// this.tagName - Name of the tag, i.e. where is the target now

// Q4: What is Event Capturing and Trickling?
// Event Capturing:
// Here the event occurs in top to bottom order, just the opposite of event bubbling
// Ex: For Button --> Div - Form - Button

// div.addEventListener('click', () => {
//     alert('div')
// }, true);

// form.addEventListener('click', () => {
//     alert('form')
// }, true);

// button.addEventListener('click', () => {
//     alert('button')
// }, true)

// Q5: How to stop Bubbling or Capturing?
// This is also known as Stop Propagation

// div.addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert('div')
// });

// form.addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert('form')
// });

// button.addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert('button')
// })

// e.stopPropagation(); --> It means, event will not propagate once it encounters this part of code.

// Q6: What is Event Delegation?
// Event Delegation is adding the event listeners to the parent element instead of adding it to the descendant element

// document.querySelector('.products').addEventListener('click', (event) => {
//     // Prints the closest SPAN to target event if any
//     console.log(event.target.closest("SPAN"));
    
//     // Prints the target event info, i.e. from which the event is fired
//     console.log(event.target);

//     if(event.target.tagName === 'SPAN') {
//         window.location.href += '/' + event.target.className;
//     }
// })

// Q7: When Button is clicked, then event should be triggered from form to button to div

// div.addEventListener('click', () => {
//     alert('div')
// });

// form.addEventListener('click', () => {
//     alert('form')
// }, true);

// button.addEventListener('click', () => {
//     alert('button')
// })

// Q8: Create a Modal which closes by clicking on negative space.

const container = document.querySelector('.modalContainer');
const button = document.querySelector('.modalButton');

button.addEventListener('click', () => {
    toggleModal(true);
});

function toggleModal(toggle) {
    container.style.display = toggle ? 'flex' : 'none';
}

container.addEventListener('click', (e) => {
    if(e.target.className === 'modalContainer') {
        toggleModal(false);
    }
})