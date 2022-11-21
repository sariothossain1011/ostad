//Todo model
const TodoModel = require('../Models/TodoModel')



// Todo data insert
exports.TodoInfoInsert=(req,res)=>{
    let TodoSubject =req.body['TodoSubject'];
    let TodoDescription =req.body['TodoDescription'];
    let Username =req.header['Username'];
    let TodoStatus = 'New';
    let TodoCreateDate = Date.now();
    let TodoUpdateDate = Date.now();

    let Postbody ={
         TodoSubject: TodoSubject,
         TodoDescription: TodoDescription,
         Username: Username,
         TodoStatus : TodoStatus,
         TodoCreateDate:  TodoCreateDate,
         TodoUpdateDate : TodoUpdateDate,
    }

    TodoModel.create(Postbody,(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo create fail", Data: error})
        }else{
            res.status(200).json({status:'Todo create successfully', Data : data})
        }
    })
}
// find todo data
exports.TodoInfoFind=(req,res)=>{
    let Query = {};
    let Projecton = 'TodoSubject TodoDescription TodoStatus TodoCreateDate TodoUpdateDate' ;
    TodoModel.find(Query,Projecton,(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo find fail", Data: error})
        }else{
            res.status(200).json({status:"Todo find successfully", Data: data})
        }
    })
}

// rename todo data

exports.TodoInfoUpdata=(req,res)=>{
    let ReqBody = req.body ;
    let TodoSubject =ReqBody['TodoSubject'];
    let TodoDescription =ReqBody['TodoDescription'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();
    let Updata ={
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate : TodoUpdateDate
    };

    TodoModel.updateOne({_id:_id},{$set:Updata},{$upsert:true},(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo update fail", Data: error})
        }else{
            res.status(200).json({status:"Todo update successfully", Data: data})
        }
    })
}
// status todo data

exports.TodoStatusUpdata=(req,res)=>{
    let ReqBody = req.body ;
    let TodoStatus =ReqBody['TodoStatus'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let UpdataStatus ={
        TodoStatus: TodoStatus,
        TodoUpdateDate : TodoUpdateDate
    };



    TodoModel.updateOne({_id:_id},{$set:UpdataStatus},{$upsert:true},(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo update status fail", Data: error})
        }else{
            res.status(200).json({status:"Todo update Status successfully", Data: data})
        }
    })
}
// delete tolo info

exports.TodoInfoRemove=(req,res)=>{
    let _id = req.body['_id']
    TodoModel.remove({_id:_id},(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo remove fail", Data: error})
        }else{
            res.status(200).json({status:"Todo remove successfully", Data: data})
        }
    })
}


// status filter tolo info

exports.TodoInfoStatuFilter=(req,res)=>{

    let Username =req.header['Username'];
    let TodoStatus = req.body['TodoStatus'];
    TodoModel.find({Username:Username,TodoStatus:TodoStatus},(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo item fail", Data: error})
        }else{
            res.status(200).json({status:"Todo item successfully", Data: data})
        }
    })
}

// status filter tolo info

exports.TodoInfoDateFilter=(req,res)=>{
    let Username =req.header['Username'];
    let FormDate = req.body['FormDate'];
    let ToDate = req.body['ToDate'];

    TodoModel.find({Username:Username,TodoCreateDate:{ $gte: new Date(FormDate),$lte: new Date(ToDate)}},(error,data)=>{
        if(error){
            res.status(401).json({status:"Todo date select fail", Data: error})
        }else{
            res.status(200).json({status:"Todo date select successfully", Data: data})
        }
    })
}
