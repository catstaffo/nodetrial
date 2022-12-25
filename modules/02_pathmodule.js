const path = require('path');


console.log(path.sep);

// This gives me the *NORMALIZED* path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Tadam, the base
const base = path.basename(filePath);
console.log(base);

// COMPLETE ABSOLUTE FILE PATH
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
