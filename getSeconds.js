const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const randomBoolean = () => Math.random() >= 0.5;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');