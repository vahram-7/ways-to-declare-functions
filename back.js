const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isTabInView = () => !document.hidden;