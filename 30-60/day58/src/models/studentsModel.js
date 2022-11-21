const mongoose = require('mongoose');

const DataBase = mongoose.Schema({
    name:{
        type:String,
    },
    roll:{
        type:String
    },
    department:{
        type:String
    },
    marks:{
        type:String,
        default:"not marks"
    },
    mobile:{
        type:String,
        validate:{
            validator:function(value){
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"11 digit phone number is required bangladesh"
        },
    }
},{versionKey:false});


const StudentsModel = mongoose.model('school',DataBase)


module.exports = StudentsModel ; 









// mobile:{
//     type:String,
//     validate:{
//         validator:function(value){
//             if(value.length==11){
//                 return true
//             }
//             else{
//                 return false
//             }
//         },
//         message:"11 digit phone number is required"
//     },
// }