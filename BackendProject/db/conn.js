const mongoose = require('mongoose')

const DATABASE = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net/firstbackendproject'

 mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("Mongodb connection successfully")
 }).catch((error)=>{
    console.log("Mongodb connection fail"+ error)
 })

