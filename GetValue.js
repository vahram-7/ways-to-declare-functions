const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(+"1" +  "1" + "2");