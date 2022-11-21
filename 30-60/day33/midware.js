
const express = require('express');
const app = express();

const PORT = 7000 ;

// app.use( (req,res,next)=>{
//     console.log('I am middle ware web application');
//     next();
// })

app.use('/about', (req,res,next)=>{
    console.log('I am about middle ware route');
    next();
})

app.get('/',(req,res)=>{
    res.send("i am home page ")
})

app.get('/about',(req,res)=>{
    res.send("i am about page ")
})

app.get('/contact',(req,res)=>{
    res.send("i am contact page ")
})



app.listen(PORT,()=>{
    console.log(`middleware server is runing at https://localhost:${PORT}`)
})


