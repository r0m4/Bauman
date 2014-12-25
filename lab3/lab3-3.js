var fs = require('fs');

var index = fs.createReadStream('index.html');

index.pipe(process.stdout);
/*index.on('data', function(d){
    process.stdout.write(d);
})*/