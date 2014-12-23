var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("привет от Романа");
    res.end();

}).listen(8080, function (){console.log("listening");});