
const http = require("http");
const mongodb = require('mongodb').MongoClient;

const URL = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net'

const port = 4000 ;


mongodb.connect(URL, function (error ,myMongodbClient){
    if(error){
        console.log("mongodb not connect")
    }else{
        console.log("mongodb connection successfully")
        // createInsert(myMongodbClient)
        // updateItem(myMongodbClient)
        // createCollection(myMongodbClient)
        // dropCollection(myMongodbClient)
    }
})

/// get item 
function createInsert(myMongodbClient){
    const myDatabase = myMongodbClient.db('school');
    const myCollection = myDatabase.collection('student');
    const additems = {name:'shahadad hossain',department:'civil' ,roll:13,age:32,address:'pm khali'}
    myCollection.insertOne(additems,function (error , getMyData){
        if(error){
            console.log('not insert data')
        }else{
            console.log(getMyData)
        }
    })
}

// update item 
function updateItem(myMongodbClient){
    const myDatabase = myMongodbClient.db('school');
    const myCollection = myDatabase.collection('student');

    var oldData = {name:'somaya jahan '};
    var newData = {$set:{name:"somaya jahan " ,roll:01,age:23,address:"nowa khali"}}
    myCollection.updateOne(oldData ,newData ,function(error,result){
        if(error){
            console.log('update error data')
        }else{
            console.log(result)
        }
    })
}
 
// create my collection 
function createCollection(myMongodbClient){
    const myDatabase = myMongodbClient.db('school')
    myDatabase.createCollection('fourman',function(error,result){
        if(error){
            console.log('create a new collection')
        }else{
            console.log(result)
        }
    })
}

// drop my collection 
function dropCollection(myMongodbClient){
    const myDatabase = myMongodbClient.db('school')
    myDatabase.dropCollection('teacher',function(error,result){
        if(error){
            console.log('drop a new collection')
        }else{
            console.log(result)
        }
    })
}