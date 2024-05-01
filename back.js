const stringReverse = str => str.split("").reverse().join("");
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const fullName = name || 'buddy';