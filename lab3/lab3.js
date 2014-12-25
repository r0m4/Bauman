var fs = require('fs');

var index = fs.createReadStream('index.html');
var output = fs.createWriteStream('output.txt');
index.pipe(output);
/*index.on('data', function(d){
    process.stdout.write(d);
})*/