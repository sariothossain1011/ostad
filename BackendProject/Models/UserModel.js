const mongoose  = require("mongoose");

const UserSchema =  mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
        unique:true,
    },
    Email:{
        type:String,
        unique:true,
    },
    Mobile:{
        type:String,
        validate:{
            validator:(value)=>{
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"11 digit phone number is required bangladeshi"
        }
    },
    Password:{
        type:String,

    }
});

const UserModel =mongoose.model("userdatabase",UserSchema);
module.exports = UserModel ;