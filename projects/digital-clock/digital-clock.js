const clockHour = document.querySelector(`.clock-hour`);
const clockMinute = document.querySelector(`.clock-minute`);
const clockSeconds = document.querySelector(`.clock-seconds`);
const formatToggler = document.querySelector(`.format-toggler`);
const ampmIndicator = document.querySelector(`.ampm-indicator`);

let is24HourFormat = true;

function updateClock() {
  const date = new Date();

  let hours = date.getHours();
  let period = ``;

  if (!is24HourFormat) {
    period = hours >= 12 ? `PM` : `AM`;
    hours = hours % 12 || 12;
  }

  clockHour.textContent = String(hours).padStart(2, `0`);
  clockMinute.textContent = String(date.getMinutes()).padStart(2, `0`);
  clockSeconds.textContent = String(date.getSeconds()).padStart(2, `0`);

  ampmIndicator.textContent = !is24HourFormat ? period : `24H`;

  updateTheme(date.getHours());
}

function updateTheme(hour) {
  const theme = hour >= 6 && hour <= 18 ? `day` : `night`;

  document.body.setAttribute(`data-theme`, theme);
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;

  formatToggler.textContent = is24HourFormat
    ? `Switch to 12-Hour`
    : `Switch to 24-Hour`;

  updateClock();
}

function init() {
  updateClock();
}

init();

// Update the clock every second
setInterval(updateClock, 1000);
formatToggler.addEventListener(`click`, toggleFormat);
