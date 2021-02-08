const days = document.getElementById('d-value');
const hours = document.getElementById('h-value');
const minutes = document.getElementById('m-value');
const seconds = document.getElementById('s-value');

const christmas = "25 Dec 2021";

// function for countdown timer
function countdown() {
    const christmasDate = new Date(christmas);
    const currDate = new Date();

    const TotalSeconds = (christmasDate - currDate) / 1000;

    const day = Math.floor(TotalSeconds / 3600 / 24);
    const hour = Math.floor(TotalSeconds / 3600) % 24;
    const min = Math.floor(TotalSeconds / 60) % 60;
    const sec = Math.floor(TotalSeconds % 60);

    days.innerHTML = formatTime(day);
    hours.innerHTML = formatTime(hour);
    minutes.innerHTML = formatTime(min);
    seconds.innerHTML = formatTime(sec);
}

// function to display time in correct format
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

countdown();
setInterval(countdown, 1000);