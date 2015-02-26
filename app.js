
/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var conf = require('./config');
var path = require('path');
var log = require('./ext/log');
var app = express();


// all environments
//app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, conf.get('app-view')));
app.set('view engine', conf.get('app-engine'));
app.engine('ejs', require('ejs-locals'));
//app.use(express.favicon());
//console.log('test1');
app.use(express.logger(conf.get('log-level')));
//app.use(express.json());
//app.use(express.urlencoded());

app.use(express.bodyParser());

app.use(express.cookieParser());
app.use(express.session({
  secret: conf.get('session:secret'),
  key: conf.get('session:key'),
  cookie: conf.get('session:cookie')
}));


app.use(app.router);

app.use(express.static(path.join(__dirname, conf.get('app-static'))));



require('./routes')(app);

app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

//console.log('test3');



// development only
if ('development' == app.get('env')) {
  app.use(function(err, req, res, next){
   res.status(err.status || 500);
   res.render('error', {
     message: err.message,
     error: err,
     title: "Ошибка"
   });
  });

  //app.use(express.errorHandler());
}
app.use(function(err, req, res, next){
   res.status(err.status || 500);
   res.render('error', {
     message: err.message,
     error: {},
     title: "Ошибка"
   });
  });

/*
app.get('/testlog', function(req, res){
  log.info('Hello from log');
  res.end('TEST LOG');
});
*/

//app.get('/', routes.index);
//console.log('test4');
//app.get('/users', user.list);
//console.log('test5');
http.createServer(app).listen(conf.get('port'), function(){
  console.log('Express server listening on port ' + conf.get('port'));
});
//console.log('test6');