const jwt = require('jsonwebtoken')


exports.Tokenissue =(req,res)=>{
    let PalyLoad ={
        exp:Math.floor(Date.now() /1000) * (60*60),
        data:{Name:"sariot hossain",City:"cox's bazar",admin:true}
    }
    let Token = jwt.sign(PalyLoad,"SecreactKey12345");
    console.log(Token)

    res.send(Token);
}