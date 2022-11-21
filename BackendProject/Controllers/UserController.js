const jwt =require('jsonwebtoken')

// User Model
const UserModel = require('../Models/UserModel')

// INSERT USER DATA
exports.UserInfoInsert=(req,res)=>{
    let UserReq = req.body ;
    UserModel.create(UserReq,(error,data)=>{
        if(error){
            res.status(401).json({status:"Account create fail", Data: error})
        }else{
            res.status(200).json({status:'Account create successfully', Data : data})
        }
    })
}
// FIND MANY USER DATA
exports.UserInfoFind=(req,res)=>{
    let Qurey = {} ;
    let Projection = 'Name Username Email Mobile Password' ;
    UserModel.find(Qurey, Projection,(error,data)=>{
        if(error){
            res.status(404).json({status:"data find fail" ,data: error})
        }else{
            res.status(200).json({status:"data find success" ,Data: data})
        }
    })

}

// UPDATA USER DATA 
exports.UserInfoUpdate=(req,res)=>{
    let Username = req.header['Username'] ;
    let Update = req.body ;
    UserModel.updateOne({Username:Username}, {$set:Update} , {upsert:true},(error,data)=>{
        if(error){
            res.status(401).json({status:'update data fail',Data:error})
        }else{
            res.status(200).json({status:'update data success',Data:data})
        }
    })
}
// DELETE USER DATA
exports.UserInfoRemove=(req,res)=>{
    let id = req.params.id ;
    let Qurey = {_id:id}
    UserModel.remove(Qurey,(error,data)=>{
        if(error){
            res.status(401).json({status:'remove data fail',Data:error})
        }else{
            res.status(200).json({status:'remove data success',Data:data})
        }
    })
}

// login site 
exports.UserLoginInfo=(req,res)=>{
    let Username = req.body['Username'];
    let Password = req.body['Password'];

    UserModel.find({Username:Username,Password:Password},(error,data)=>{
        if(error){
            res.status(401).json({Status:"User login fail",Data:error})
        }else{


            let Palyload ={exp:Math.floor(Date.now() / 1000) * (24*60*60),data:data[0]}
            let token =jwt.sign(Palyload, "secreatKey0985")

            if(data.length>0){
                res.status(401).json({Status:"success", token:token, Data:data[0]})
            }else{
                res.status(401).json({Status:"Unauthorized"})
            }
        }
    })
}

exports.SelectUser=(req,res)=>{
    let Username = req.header['Username'] ;
    UserModel.find({Username : Username},(error, data)=>{
        if(error){
            res.status(401).json({status:'select user  fail',Data:error})
        }else{

            res.status(200).json({status:'select user success',Data: data})
        }
    })
}


