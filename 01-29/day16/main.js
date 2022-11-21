
const mongodb = require('mongodb').MongoClient;

const URL = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net'

mongodb.connect(URL,function(error,myMongoClient){
    if(error){
        console.log('connect fail')
    }else{
        console.log('connect success');
        // insertData(myMongoClient)
        // deleteData(myMongoClient)
        // deleteAllItem(myMongoClient)
        // findOneItemWithoutCondition(myMongoClient)
        // findOneItemWithCondition(myMongoClient)
        // findAllItems(myMongoClient)
        // findAllItemsByProjection(myMongoClient)  // error in this code >> i can solve this code
        // findAllItemsByQuery(myMongoClient)
        // findAllItemsByLimit(myMongoClient)
        // findAllItemsBySort(myMongoClient)
    }
})
// delete insert item 
function insertData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
   var myCollection =  myDatabase.collection('student');

   var myData = {name:"sariot hossain ",roll:"15",class:"nine",city:"cox's bazar"}
   myCollection.insertOne(myData ,function(error){
    if(error){
        console.log('data insert fail')
    }else{
        console.log('data insert success')
    }
   })
}

// delete one item 
function deleteData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var deleteItem = {roll:"10"}
    myCollection.deleteOne(deleteItem,function(error){
        if(error){
            console.log('data delete fail')
        }else{
            console.log('data delete success')
        }
    })
}


//delete all item 
function deleteAllItem(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    myCollection.deleteMany(function(error, resultObj){
        if(error){
            console.log('delete many fail')
        }else{
            console.log(resultObj)
        }

    })
}

// find one item without condition
function findOneItemWithoutCondition(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var findData = {};
    myCollection.findOne(findData , function(error ,result){
        console.log(result)
    })
}

// find one item withcondition
function findOneItemWithCondition(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var findData = {roll:'12'};
    myCollection.findOne(findData , function(error ,result){
        console.log(result)
    })
}

// findAll item 
function findAllItems(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    myCollection.find().toArray( function(error , allData){
        if(error){
            console.log('not find all data')
        }else{
            console.log(allData)
        }
    })
}
// findAll item projection
function findAllItemsByProjection(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var itemObj ={}
    var itemProjection ={projection:{roll:1,city:1}} ///error in this code >> i can solve this code
    myCollection.find(itemObj,itemProjection).toArray( function (error , allData){

            console.log(allData)

    })
}

// findAll item query
function findAllItemsByQuery(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var Query ={roll:'15',city:"cox's bazar"}
    myCollection.find(Query).toArray( function (error , allData){

            console.log(allData)

    })
}

// findAll item Limit
function findAllItemsByLimit(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    myCollection.find().limit(10).toArray( function (error , allData){

            console.log(allData)

    })
}

// findAll item Sort
function findAllItemsBySort(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('student');
    var itemSort = {roll:-1}
    myCollection.find().sort(itemSort).toArray( function (error , allData){

            console.log(allData)

    })
}