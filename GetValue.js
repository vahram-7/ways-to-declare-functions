console.log(+"1" +  "1" + "2");
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const fullName = name || 'buddy';