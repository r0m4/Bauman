var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');
var MY_IP = '193.111.188.180';
var app = express();
app.listen(8090, function(){console.log('listening 8090...');});
app.set('views', __dirname);

