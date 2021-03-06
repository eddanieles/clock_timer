const timer = document.querySelector('.timer');
const milli = document.querySelector('.milli');
const clock = document.querySelector('.clock');
const startBtn = document.querySelector('.startBtn');
const fullScreen = document.querySelector('.glyphicon-fullscreen');
const stopBtn = document.querySelector('.stopBtn');
let countdown, countdown2;

startBtn.addEventListener('click', setTimer);
stopBtn.addEventListener('click', stopTimer);

let startSeconds = -5;

timer.textContent = '-00.00.05';
milli.textContent = '.000';

function setTimer() {
  const now = Date.now();
  const then = now - startSeconds * 1000;
  countdown = setInterval(() => {
    const seconds = Math.round((then - Date.now())/1000);
    displayTimer(seconds * -1);
  }, 1000);
  countdown2 = setInterval(() => {
    const milliSecs = (then - Date.now())/1000;
    displayMilli(milliSecs * -1);
  }, 1);
}

function displayTimer(time) {
  let seconds = time % 60;
  let minutes = time/60 < 0 ? 0 : Math.floor(time/60);
  let hours = time/3600 < 0 ? 0 : Math.floor(time/3600);
  if (time < 0) {
    let adjustedSeconds = seconds * -1;
    timer.textContent = `-0${hours}.0${minutes}.${adjustedSeconds < 10 ? '0' : ''}${adjustedSeconds}`
  } else {
    timer.textContent = `${hours < 10 ? '0' : ''}${hours}.${minutes < 10 ? '0' : ''}${minutes}.${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

function displayMilli(time) {
  let milliSecs = (time % 1).toFixed(3).replace(/^0+|^-0+/, '');
  //console.log(milliSecs);
  milli.textContent = `${milliSecs}`

}

function stopTimer() {
  clearInterval(countdown);
  clearInterval(countdown2);
  return;
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
setInterval(displayCurrentTime, 1000);

fullScreen.addEventListener('click', () => {
  timer.webkitRequestFullscreen();
});
