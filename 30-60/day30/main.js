const express = require('express');
const app = express();

const PORT = 3000 ;

app.get('/',(req,res)=>{
    res.send(`hello home`)

})


// simple string response   any item (get/post/put/delete)
// res.send() ---- response body 
// res.end() ---- response ending point 
app.post('/one',(req,res)=>{
    res.send(`simple string response blog sent`)
    // res.end(`simple string response blog end`)

})

// status code response
app.put('/two',(req,res)=>{
    // res.send(`status code pespons`);
    res.status(404).end(`hello error`);

})

// json response
app.delete('/three',(req,res)=>{
    // res.send(`hello json`)
    const students = [
        {
            name: "sariot",
            city: "cox's bazar",
            roll: "20"
        },
        {
            name: "hossain",
            city: "bnagla bazar",
            roll: "30"
        },
        {
            name: "sumon",
            city: "pm bazar",
            roll: "30"
        }
        
    ]



    res.json(students[2].name)

})



app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})