var http = require('http').createServer().listen(8080, function(){console.log("listening on 8080...")});
var fs = require('fs');

http.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : "image/png"});
    if(req.url == "/logo"){
        var img = fs.createReadStream('Dinka.png');
        img.pipe(res);
        
    }

});


