
const jwt = require('jsonwebtoken')

exports.CreateToken =(req,res)=>{
    let PalyLoad ={
        exp:Math.floor(Date.now() /1000) * (20),
        data:{Name:"sariot hossain",City:"cox's bazar",admin:true}
    }
    let Token = jwt.sign(PalyLoad,"SecreactKey12345");
    console.log(Token)

    res.send(Token);
}



exports.EncodeToken =(req,res)=>{
    let Token =req.header('token_key')
    jwt.verify(Token,"SecreactKey12345",(error,decode)=>{
        if(error){
            res.status(401).json({status:"invalid token",Data: error})
        }else{
            res.status(200).json({status:"success token",Data: decode})
        }

    })
}