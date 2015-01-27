var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');
var MY_IP = '193.111.188.180';
var app = express();
app.listen(8090, function(){console.log('listening 8090...');});
app.set('views', __dirname);

app.get('/google/feeds/for/:search', function(reqst, respse){
    var search = reqst.params.search;
    var options = {
        protocol: 'http',
        host: 'ajax.googleapis.com',
        pathname: '/ajax/services/feed/find',
        query: {v: '1.0', userip:MY_IP, q:search}
    };
    var searchURL = url.format(options);
    request(searchURL, function(err, response2, body){
        var feeds = JSON.parse(body);
        respse.render('google-search.ejs', {feeds: feeds.responseData, keyword: search})
    })
});

var categories = {
    'auto' : 'Автомобили', 
    'world' : 'в Мире',
    'internet' : 'Интернет', 
    'sport' : 'Спорт', 
    'culture' : 'Культура', 
    'movies' : 'Кино', 
    'politics' : "Политика",
    'index' : 'Главные Новости' 
};
app.get('/yandex/:cnt/news/for/:search', function(req, response){
    var search = req.params.search;
    if(!(search in categories))
        search = 'index';
    var name = categories[search];
    var cnt = req.params.cnt;
    var options = {
        protocol: 'http',
        host: 'ajax.googleapis.com',
        pathname: '/ajax/services/feed/load',
        query: {
                    v: '1.0', 
                    num: cnt,
                    userip: MY_IP, 
                    q: 'http://news.yandex.ru/'+search+ '.rss'
                }
    };
    var searchURL = url.format(options);
    request(searchURL, function(err, response2, body){
      var news = JSON.parse(body);
      response.render('yandex-search.ejs', {news: news.responseData.feed, category: name, count:cnt})
    })
});
