const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./Routers/Router')
const dotenv = require('dotenv');
require('./db/conn')

dotenv.config({path:'./config.env'})

app.use(bodyParser.json())
app.use(cors())



app.use('/api/v1' ,router)

app.use('*',(req,res)=>{

    res.status(404).json({status:'Server fail', data:"not found"})
})

module.exports = app ;