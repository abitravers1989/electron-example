var fs = require('fs');

var readMe = fs.readFileSync('README.md', 'utf8');
fs.writeFileSync('writeME.txt', readMe);
