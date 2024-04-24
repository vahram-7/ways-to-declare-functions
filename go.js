const merge = [...new Set(a.concat(b))];
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
var arr3 = "jones".split('');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();