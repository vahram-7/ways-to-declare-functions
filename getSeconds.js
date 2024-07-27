const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);