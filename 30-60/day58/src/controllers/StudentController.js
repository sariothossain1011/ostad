const studentModel = require('../models/studentsModel')



//insert
exports.studentinsert=(req,res)=>{
    let reqBody = req.body ;
    studentModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(404).json({status:"data create fail" ,data: error})
        }else{
            res.status(200).json({status:"data create success" ,Data: data})
        }
    })

}
//find
exports.qureydata=(req,res)=>{
    let Qurey = {}
    let Projection = "name roll  department marks" ;
    studentModel.find(Qurey,Projection,(error,data)=>{
        if(error){
            res.status(404).json({status:"data fine fail" ,data:error})
        }else{
            res.status(200).json({status:"data find success" ,Data:data})
        }
    })

}
//update
exports.updatedata =(req,res)=>{
    let id = req.params.id;
    let Qurey = { _id:id } ;
    let update = req.body;
    studentModel.updateOne(Qurey,update,(error,data)=>{
        if(error){
            res.status(403).json({status:"data update fail" ,data: error})
        }else{
            res.status(200).json({status:"data update success" ,Data:data})
        }
    })
}

exports.removedata =(req,res)=>{
    let id = req.params.id;
    let Qurey = { _id:id } ;
    studentModel.remove(Qurey,(error,data)=>{
        if(error){
            res.status(403).json({status:"data delete fail" ,data: error})
        }else{
            res.status(200).json({status:"data delete success" ,Data:data})
        }
    })
}
