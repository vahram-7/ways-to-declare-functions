const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const merge = (a, b) => [...a, ...b];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");