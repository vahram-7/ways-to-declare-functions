const shuffledArray = array.sort(() => Math.random() - 0.5); 
const merge = Object.assign({}, obj1, obj2);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
console.log(false == '0');