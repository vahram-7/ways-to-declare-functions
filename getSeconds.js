const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const removeDuplicates = (arr) => [...new Set(arr)];