var http = require('http');
var server = http.createServer().listen(8080);

server.on('request', function(req, res){
    res.writeHead(200);
    res.write('Hello');
    res.end('The end');
});

server.on('listening', function(){
    console.log('Listening: 8080...');
});

server.on('request', function(req, res){
    console.log('Request', req.method, req.url);
});