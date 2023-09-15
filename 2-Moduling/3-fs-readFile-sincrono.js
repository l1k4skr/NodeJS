const fs = require('node:fs');

const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);
