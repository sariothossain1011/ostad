const express = require('express');
const app = express();
const PORT = 5000;

// get qurey parameters
app.get('/qurey',(req,res)=>{
    let firstName = req.query.firstName ;
    let lastName = req.query.lastName ;
    res.end(firstName+" "+lastName)
})


// Working With Get Request Header
app.get('/header',(req,res)=>{
    let firstName = req.header('firstName') ;
    let lastName = req.header('lastName') ;
    res.end(firstName+" "+lastName + " sumon")
})
// simple post request
app.post('/simplepost',(req,res)=>{
    res.end("simple post request")
})

// post qurey parameters
app.post('/qurey',(req,res)=>{
    let firstName = req.query.firstName ;
    let lastName = req.query.lastName ;
    res.end(firstName+" "+lastName)
})
// Working With post Request Header
app.post('/header',(req,res)=>{
    let firstName = req.header('firstName') ;
    let lastName = req.header('lastName') ;
    res.end(firstName+" "+lastName + " sumon")
})

app.listen(PORT,()=>{
    console.log(`Server is runing at https://localhost:${PORT}`)
})