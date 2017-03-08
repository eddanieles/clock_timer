const countdown = document.querySelector('.countdown');
const timer = document.querySelector('.timer');
const clock = document.querySelector('.clock');
const startBtn = document.querySelector('.startBtn');

startBtn.addEventListener('click', setTimer)

let startSeconds = -10;

function setTimer() {
  let seconds = startSeconds % 60;
  let minutes = Math.floor(startSeconds/60);
  countdown.textContent = `Countdown: ${minutes}:${seconds}`;
  startSeconds++;
  setTimeout(setTimer, 1000);
}



function displayCurrentTime() {
  const end = new Date();
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  clock.textContent = `Current Time:${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

setInterval(displayCurrentTime, 1000)
