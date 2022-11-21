const jwt = require('jsonwebtoken');


module.exports=(req,res,next)=>{
    let Token = req.header('token_key');
    jwt.verify(Token,"secreatKey0985",(error,decoded)=>{
        if(error){
            res.status(401).json({status:"invalid token",Data:error})
        }else{
            let Username = decoded['data']['Username']
            req.header.Username = Username ;
            next();
        }
    })
}