const express = require('express');
const  HelloController  = require('../controllers/HelloController');
const router = express.Router();



// this my get routing 
router.get('/hello',HelloController.Hello)
router.post('/hey',HelloController.hey)



module.exports = router ;