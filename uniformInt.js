const merge = [...new Set([...a, ...b])];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const symbolsPath = path.join(buildOutputPath, 'symbols');