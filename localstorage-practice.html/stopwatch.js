let timer = null;
let elapsedTime = 0; // Time in milliseconds
let isRunning = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const hundredths = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');

  return `${minutes}:${seconds}:${hundredths}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;
    
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10); // Update every 10ms for smooth hundredths readout
  }
});

pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
});

resetBtn.addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  lapCounter = 1;
  updateDisplay();
  lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  if (isRunning) {
    const li = document.createElement('li');
    li.innerHTML = `<span>Lap ${lapCounter++}</span> <strong>${formatTime(elapsedTime)}</strong>`;
    lapsList.prepend(li); // Show newest lap at top
  }
});