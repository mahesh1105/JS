// Setting the end date and using getTime() over it to get the final time in ms
const endTime = new Date("11 Apr, 2025 17:15:00").getTime();

// Get the start time in ms
const startTime = new Date().getTime();

// Call the function every 1 sec
let x = setInterval(updateTimer, 1000);

// Function to Update the Timer
function updateTimer() {
    // Get the current time in ms - every time when the function called - It will get the current time
    const currentTime = new Date().getTime();

    // Calculate the distance covered for the progress bar
    const distCov = currentTime - startTime;

    // Calculate the Total Distance for the Progress Bar
    const totalDis = endTime - startTime;

    // Access HTML elements using DOM
    const days = document.querySelector("#days");
    const hrs = document.querySelector("#hrs");
    const mins = document.querySelector("#mins");
    const secs = document.querySelector("#secs");

    const progressBar = document.querySelector(".progress-bar");

    // Time Difference in Milli Seconds
    const diffInMs = endTime - currentTime;

    // Calculate the Milli Seconds for Days, Hours, Minutes and Seconds
    const oneDayinMillis = 24 * 60 * 60 * 1000;
    const oneHourinMillis = 60 * 60 * 1000;
    const oneMininMillis = 60 * 1000;
    const oneSecinMillis = 1000;

    // Calculate the Number of days, hours, minutes and seconds
    const day = Math.floor(diffInMs / oneDayinMillis);
    const hr = Math.floor((diffInMs % oneDayinMillis) / oneHourinMillis);
    const min = Math.floor((diffInMs % oneHourinMillis) / oneMininMillis);
    const sec = Math.floor((diffInMs % oneMininMillis) / oneSecinMillis);

    // Update the data in HTML using DOM
    days.textContent = day;
    hrs.textContent = hr;
    mins.textContent = min;
    secs.textContent = sec;

    // Update the Progress bar - So that progress can be seen on the window
    progressBar.style.width = `${(distCov / totalDis) * 100}%`;

    if(diffInMs < 0) {
        // Call the clearInterval function to stop the updateTimer Call
        clearInterval(x);

        // Update the HTML for Countdown Timer to Expired
        document.querySelector(".countdown").innerHTML = "EXPIRED";

        // Set the width of progress bar to 100%
        progressBar.style.width = `100%`;
    }
}