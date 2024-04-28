var arr2 = arr1.reverse();
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();