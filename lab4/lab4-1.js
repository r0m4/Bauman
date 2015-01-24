var fs = require('./get-file');
console.log("get required");
var msg = require('./logs');
console.log("logs required");
var http = require('http');
console.log("http required");

console.log('starting build server...');
http.createServer(function(req, res) {
    console.log('first step');
    msg.info("Download start");
    console.log('second step');
    res.writeHead(200, {'Content-Type':'image/png'});
    console.log('third step');
    var file = fs('Dinka.png');
    console.log('fourth step');
    file.pipe(res);
    console.log('fifth step');
    msg.info('Download finish');
}).listen(8080, function(){console.log('listening')});