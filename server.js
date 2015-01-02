var http = require('http');

http.createServer(function (req, res) {
    console.log('Server listen');
    res.writeHead(200);
    req.on('data', function(data){
        console.log('Request: ', data.toString());
        res.write('Write: ' + data.toString());
    })
    req.on('end', function(){
        console.log('The end');
    });

    
    res.end();

}).listen(8080, function (){console.log("listening");});