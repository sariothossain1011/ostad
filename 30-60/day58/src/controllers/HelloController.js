exports.Hello = (req,res)=>{
    res.status(200).json({status:"success",data:"hello ,this is first express website get"})
}

exports.hey = (req,res)=>{
    res.status(200).json({status:"success",data:"hello ,this is first express website post"})
}