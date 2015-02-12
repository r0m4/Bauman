
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var conf = require('./config');
var path = require('path');

var app = express();


// all environments
//app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, conf.get('app-view')));
app.set('view engine', conf.get('app-engine'));
app.use(express.favicon());
console.log('test1');
app.use(express.logger(conf.get('log-level')));
app.use(express.json());
app.use(express.urlencoded());
console.log('test2');
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, conf.get('app-static'))));


console.log('test3');



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
console.log('test4');
app.get('/users', user.list);
console.log('test5');
http.createServer(app).listen(conf.get('port'), function(){
  console.log('Express server listening on port ' + conf.get('port'));
});
console.log('test6');