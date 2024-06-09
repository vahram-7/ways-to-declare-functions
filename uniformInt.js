const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;