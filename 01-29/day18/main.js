const http = require('http')
const mongodb = require('mongodb').MongoClient ;

const URL = 'mongodb://127.0.0.1:27017/'

mongodb.connect(URL, function (error, myMongodbClient){
    if(error){
        console.log('mongodb is not connect')
    }else{
        console.log('mongodb connection successfully')
        myMongodbInsertOneItem(myMongodbClient)
    }
})

function myMongodbInsertOneItem(myMongodbClient){
    const myDatabase = myMongodbClient.db('school');
    const myCollection = myDatabase.collection('student')
    const insertData = {name:'ali hossain',department:'food' ,roll:20,age:30,address:'Noa khali'}
    myCollection.insertOne(insertData,function(error){
        if(error){
            console.log("insert not data")
        }else{
            console.log('insert data successfully')
        }
    })
}

