const express = require('express');
// const bodyParser = require('body-parser');
const multer = require('multer')
// const Multer = multer()
const app =express();
const PORT = 6000 ;

// app.use(bodyParser.json())
// app.use(Multer.array())
// app.use(express.static('public'))

//File Upload
// var storage=multer.diskStorage({
//     destination:function (req,file,callBack) {
//         callBack(null,'./uploads');
//     },
//     filename:function (req,file,callBack) {
//         callBack(null,file.originalname)
//     }
// });


// app.get('/dfg',(req,res)=>{
//     res.send('hello')
// })

//Post application-json
// app.post('/json',(req,res)=>{
//     let jsonData = req.body ;
//     // let jsonString = JSON.stringify(json)
//     let name = jsonData["name"];
//     let age = jsonData["age"];
//     // res.send(jsonString)
//     res.status(202).end("my name is "+name +" "+ age)
// })

// //Working With Multipart Form Data
// app.post('/form',(req,res)=>{
//     let formData = req.body ;
//     res.end(JSON.stringify(formData))
// })


//File Upload
// var upload=multer({storage:storage}).single('myfile')
// app.post('/file',function (req,res) {
//     upload(req,res,function (error) {
//             if(error){
//                 res.send("File Upload Fail")
//             }
//             else{
//                 res.send("File Upload Success")
//             }
//     });
// });



app.listen(PORT,()=>{
    console.log(`server is runig at https://localhost:${PORT}`);
})