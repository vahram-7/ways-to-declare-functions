console.log(+"1" +  "1" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);