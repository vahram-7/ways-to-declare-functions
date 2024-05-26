const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const timeFromDate = date => date.toTimeString().slice(0, 8);