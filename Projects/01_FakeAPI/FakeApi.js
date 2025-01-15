// Consuming a Promise - using then and catch
// function getData() {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => {
//       console.log("Promise Resolved...");
//       return response.json(); // Parse the JSON from the response
//     })
//     .then(data => {
//       console.log(data); // Log the parsed data
//     })
//     .catch(error => {
//       console.log("Error Fetching Data:", error); // Handle errors
//     });
// }

// getData();

// Consuming a Promise - using async and await
let mainDiv = document.querySelector('#main');

// Dynamically create the Array of size 50 and fill false to it
let arr = new Array(100).fill(false);

// Function to display the JSON Object Data
function displayData(element) {
  return `albumId: ${element.albumId}
          id: ${element.id}
          title: ${element.title}
          url: ${element.url}
          thumbnailUrl: ${element.thumbnailUrl}`;
}

function createDiv(element) {
  let div = document.createElement('div');
  div.id = `${element.albumId}`;
  div.innerHTML = `<ul id='l${element.albumId}'></ul>`;
  arr[element.albumId - 1] = true;
  mainDiv.appendChild(div);
}

async function func() {
  try {
    const pr = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await pr.json();
    
    // Iterating over JSON Data one by one
    data.forEach((element) => {
      if(arr[element.albumId - 1] === false) {
        createDiv(element);
      }

      const li = document.createElement('li');
      li.innerText = displayData(element);

      let childDiv = mainDiv.lastChild;
      childDiv.firstChild.appendChild(li);
    });
  
  } catch(error) {
    console.log("Error");
  }
}

func();