console.log( "A" - "B" + 2);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};