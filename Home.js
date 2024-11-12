let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let lapTimes = [];
let isRunning = false;

const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const lapList = document.getElementById('lap-list');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapTime);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(updateTime, 1000);
        startButton.disabled = true;
        pauseButton.disabled = false;
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(intervalId);
    startButton.disabled = false;
    pauseButton.disabled = true;
    isRunning = false;
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapTimes = [];
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    lapList.innerHTML = '';
    startButton.disabled = false;
    pauseButton.disabled = true;
    isRunning = false;
}

function lapTime() {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    lapTimes.push(lapTime);
    const lapListItem = document.createElement('li');
    lapListItem.textContent = lapTime;
    lapList.appendChild(lapListItem);
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}