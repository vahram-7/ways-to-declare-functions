const isWeekday = (date) => date.getDay() % 6 !== 0;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const buildOutputPath = path.join(repositoryRootPath, 'out');