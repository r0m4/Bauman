var http = require('http');
console.log('Request start');
var options = {
    host: "locaslhost",
    port: 8080,
    path: '/',
    method: 'POST'
};

var request = http.request(options, function(response){
    console.log("Response start");
    response.on('data', function(data){
        console.log(data.toString());
    });
});
request.write('Hello, world!');
request.end();