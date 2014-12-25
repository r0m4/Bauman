var fs = require('fs');
var http = require('http').createServer().listen(8080);
http.on('request', function(req, res){
    res.writeHead(200);
    var newFile = fs.createWriteStream('file-4.txt');
    //req.pipe(newFile);
    
    req.on('data', function(txt){
        //txt = 'NEW: ' + txt;
        var buffer = newFile.write(txt);
        
        if (!buffer) {
            console.log('PAUSED');
            req.pause();
        }
    });

    newFile.on('drain', function(){
        req.resume();
    });

    req.on('end', function(){
        res.end('UPLOADED!');
    });
}); 

