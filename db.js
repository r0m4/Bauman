var User = require('./site/schema/user').User;

var admin = new User({
  name: 'root',
  password: 'pass@word1'
});

admin.save(function(err){
  if(err) {console.dir(err)};
});


 /*
 var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var schemaCat = mongoose.Schema({
  name: String, 
  age: Number

});

schemaCat.methods.say = function(){
  console.log('Hello from '+ this.get('name'));
};

var Cat = mongoose.model('Cat', schemaCat);



var tuzik = new Cat({ name: 'tuzik', age: 3 });
tuzik.save(function (err) {
  if (err) // ...
    console.log("tuzik : meow");
  else 
    tuzik.say();
});
*/


 /*
 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
 
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
    var collection = db.collection('test_insert');
    collection.insert({a:2}, function(err, docs) {
      
      collection.count(function(err, count) {
        console.log(format("count = %s", count));
      });
 
      // Locate all the entries using find 
      collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db 
        db.close();
      });
    });
  })*/