var db = require('../ext/db');
var crypt = require('crypto');
var schemaUser = new db.Schema({

    name: {
        type: String,
        require: true,
        unique: true
    },
    hash : {
        type: String,
        require:true
    },
    salt: {
        type: String,
        require:true      
    },
    created: {
        type: Date,
        default: Date.now()
    }
});
var salt = 'salt';
var pass = '1234';

var res = getHash(pass, salt);
console.log(res);

function getHash(password, salt){
    return crypt.createHmac('sha1',salt).update(password).digest('hex');
};