const express = require('express');
const  router  = require('./src/routes/api');
const app = new express();

//security middleware import

const cors = require('cors')
const helmet = require('helmet')
const xssClean = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')

//security middleware implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xssClean());

// request rate limiting 
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter)




app.use('/api/v1',router)


app.use('*',(req,res)=>{

    res.status(404).json({status:'fail', data:"not found"})
})




module.exports = app ;