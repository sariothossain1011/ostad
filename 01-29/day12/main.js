var mongodb = require('mongodb').MongoClient;

var URL = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net';

mongodb.connect(URL, function(error){
    if(error){
        console.log('connection fail')
    }else{
        console.log('connection success')
    }
});