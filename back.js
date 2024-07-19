const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const isEven = (num) => num % 2 === 0;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';