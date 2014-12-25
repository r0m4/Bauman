var fs = require('fs');

var file = fs.createReadStream('hello.txt');

var newFile = fs.createWriteStream('file-1.txt');

file.pipe(newFile);