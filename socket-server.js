var socket = require('socket.io');
var express = require('express');
var app = express();
var io = socket.listen(app.listen(8080, function(){console.log("listening on port 8080...")}));


app.set('views', __dirname);
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname+'/folder'));

app.get('/', function(req, res){
    res.render('page');
});
io.sockets.on('connection', function(client){
    client.on('message', function(data){
        //client.set('nickname', data);
        client.emit('hello', {hello: 'Привет '+data});
        client.broadcast.emit('hello', {hello: 'Привет от'+data});
        
    });

    client.on('disconnect', function(){
        io.sockets.emit('hello', {hello: ' один из нас свалил!'});
        
    });

    client.on('new_message', function(data){
       client.emit('hello', {hello: 'Привет '+data});
       /*client.get('nickname', function(err, oldName){
            client.broadcast.emit('hello', {hello: oldName+"теперь "+data}); 
       });
       client.set('nickname', data);
         */      
    });
});


