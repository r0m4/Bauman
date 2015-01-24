//работаю на модуле express версии 3.5.0
var request = require('request');
var express = require('express');
var url = require('url');
var app = express();
app.listen(8080, function(){console.log('listening 8080...');});

app.set('views', __dirname);
app.set('view engine', 'ejs');


var names = {'john': 'admin', 
            'mike':'manager', 
            'ivan':'user'
            };

app.get('/', function(req, res){
    res.sendfile(__dirname + '/test.html');
});
app.get('/user/:name', function(req, res){
    var name = req.params.name;
    var options = {
        protocol: 'http',
        host: 'localhost:8081',
        pathname: '/',
        query: {user: name}
    };

    var needUrl = url.format(options);
    request(needUrl, function(err, response, body){
        //console.log(body);
        var arr = JSON.parse(body);
        res.render('user', {name:arr[0].name, age: arr[0].age
        });
    });
});

/*app.get('/user/:name', function(req, res){
   var role;
   var name = req.params.name.toLowerCase();
   console.log(name);
   if(name in names)
    role = names[name];
   else 
    role = "Unknown role";
   res.render('user', {name:req.params.name,
                       role: role
            });
   res.end();
});*/