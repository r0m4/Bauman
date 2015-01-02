var http = require('http');

var server = http.createServer().listen(8080, function(){console.log("listening on 8080... ")});

server.on('close', function(req){
    console.log("the end");
    
});

server.on('request', function(req, res) {
    if (req.url == '/stop') {
        
        server.close();
    } else {
        res.writeHead(200, {'Content-type' : "text/plain; charset=utf-8"});
        
        res.write('Hello from Node.js\n\n\n\n\n');
        res.end('Конец указан явно!... как в задании!');
      }
});

server.on('listening', function(){
    console.log("listening port : 8080...")
});

server.on('connection', function(){
    console.log('Connnected...')
});

server.on('request', function(req, res){
    console.log(req.method, req.url, res.statusCode);
    
});





