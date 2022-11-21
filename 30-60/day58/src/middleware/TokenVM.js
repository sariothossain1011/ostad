const jwt = require('jsonwebtoken')


module.exports=(req,res,next)=>{
    let Token =req.header('token_key')
    jwt.verify(Token,"SecreactKey12345",(error,decode)=>{
        if(error){
            res.status(401).json({status:"invalid token",Data: error})
        }else{
            next()
        }

    })
}