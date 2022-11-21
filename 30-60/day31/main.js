const express = require('express');
const app = express();
const path = require('path')

const PORT = 4000 ;


app.get('/',(req,res)=>{
    res.send('hello home')
})
// response download file
app.get('/download',(req,res)=>{
    res.download('./hello/images.jpg')
})
// response redirect file
app.get('/bangladesh',(req,res)=>{
    res.redirect('http://localhost:4000/india')
})
app.get('/india',(req,res)=>{
    res.send('hello india ')
})

// response header
app.get('/header',(req,res)=>{

    res.append("name","sariot");
    res.append("roll","30");
    res.append("city","bangla bazar");

    res.status(201).end('hello header ');
})

// response cookices
app.get('/cookies',(req,res)=>{

    res.cookie("name","sariot hossain");
    res.cookie("roll","12");
    res.cookie("city","cox's bazar");

    res.status(202).end('hello cookies success ');
})

// response cookices clear
app.get('/cookclear',(req,res)=>{

    res.clearCookie("name");
    res.clearCookie("roll");
    res.clearCookie("city");

    res.status(203).end('hello cookies clear success ');
})


app.listen(PORT , ()=>{
    console.log(`server is run :${PORT}`)
})