// Run the below command in browser - Default Object for Browser -> window object
console.log(window)

// To print the content under windows - specifically document
console.log(window.document)
// OR below command can be used, both works same
console.log(document)

// To get all the properties of the document
console.dir(document)

// To get the whole element by its id - here 'firstHeading' is the id of the h1 tag
document.getElementById('firstHeading')
// Output -->
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​::before​<span class=​"mw-page-title-main">​Brendan Eich​</span>​</h1>​

// For Manipulation
document.getElementById('firstHeading').innerHTML = "<h2>Mahesh Saini</h2>"
// It will replace the HTML content under the h1 tag with "Mahesh Saini" and it will get printed on the web

// querySelector - Can select any tag, element, id, class by using the CSS Query Selector Syntax
// Note: It selects only the first Element
document.querySelector('.class_name') // Select the class having mentioned class_name
document.querySelector('#id_name') // Select the id having mentioned id_name
document.querySelector('tag_name') // Select the tag having mentioned tag_name
document.querySelector('input[type="password"]') // Select the input tag whose type is password

// Below command returns an array
const title = document.getElementById(h1)
title.innerHTML() // displays the inner HTML for the selected tag - tags, content everything included
title.innerText() // displays the Text but doesn't show the which is hidden by using some CSS
title.textContent() // displays all the Text inside the selected tag and also show the hidden content

title.innerText = "Mahesh" // Manipulate the inner Text of selected tag

document.getElementById('id_name') // Get the Element having mentioned id
document.getElementById('id_name').className // Get the class name within the selected id
document.getElementsByClassName('class_name') // Get the Element with mentioned class name

document.querySelectorAll('tag_name') // Returns the Array or Nodelist (An Array Only) of all the element having mentioned tag_name
const myItems = document.querySelectorAll('tag_name')

// Using CSS properties on HTML elements by selecting them using querySelector OR querySelectorAll
myItems[0].style.padding = "10px"
myItems[0].style.color = "green"
myItems[0].style.backgroundColor = "red"

// getElementByClassName() returns the HTMLCollection which is not an array if you want to trasform the HTMLCollection into a Array
// then use the below Syntax
// ArrName.from(HTMLCollectionName)
// and store it inside some variable and use its methods like - forEach, map, reduce, filter, ...