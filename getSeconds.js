const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const copyToClipboard = (text) => navigator.clipboard.writeText(text);