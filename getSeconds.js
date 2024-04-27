const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const randomBoolean = () => Math.random() >= 0.5;
console.log("1 && 2 = "+(1 && 2));
const minNumber = arr => Math.min(...arr);