const mongoose = require("mongoose");


const URL = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net/school'
mongoose.connect(URL).then(()=>{
    console.log('Connection successfully')
}).catch((error)=>{
    console.log('Connection not successfully')
})