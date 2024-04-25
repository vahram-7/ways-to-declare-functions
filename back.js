const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const result = await makeHttpRequest(url);