var fs = require('fs');

console.log('Executed before file reading.');

var data = fs.readFileSync('./files/file', 'utf8');

console.log(data);

console.log('Executed after file reading, Hopefully.');
