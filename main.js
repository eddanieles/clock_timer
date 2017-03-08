const countdown = document.querySelector('.countdown');
const timer = document.querySelector('.timer');
const clock = document.querySelector('.clock');
const startBtn = document.querySelector('.startBtn');

startBtn.addEventListener('click', setTimer)

let startSeconds = -5;

timer.textContent = `-00:00:05`;

function setTimer() {
  let seconds = startSeconds % 60;
  let minutes = startSeconds/60 < 0 ? 0 : Math.floor(startSeconds/60);
  let hours = startSeconds/3600 < 0 ? 0 : Math.floor(startSeconds/3600)
  if (startSeconds < 0) {
    let adjustedSeconds = startSeconds * -1;
    timer.textContent = `-0${hours}:0${minutes}:${adjustedSeconds < 10 ? `0${adjustedSeconds}` : `${adjustedSeconds}`} `
  } else {
    timer.textContent = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  }

  startSeconds++;
  setTimeout(setTimer, 1000);
}



function displayCurrentTime() {
  const time = new Date();
  const hour = time.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const beforeNoon = hour > 12 ? 'PM' : 'AM';
  const minutes = time.getMinutes();
  clock.textContent = `${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${beforeNoon}`;
}

displayCurrentTime();
setInterval(displayCurrentTime, 1000)
