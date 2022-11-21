const express = require('express');

const router = express.Router();

const  HelloController  = require('../controllers/HelloController');
const  StudentController  = require('../controllers/StudentController');
const  JsonWebtoken  = require('../controllers/JsonWebtoken');
//
const TokenVerifyMiddleware = require('../middleware/TokenVM')
const TokenissureM = require('../controllers/TokenissureM')


// this my get routing 
router.get('/hello',HelloController.Hello)
router.post('/hey',HelloController.hey)

//mongoose & apply jwt token
router.get('/Tokenissure',TokenissureM.Tokenissue)
router.post('/studentinsert',TokenVerifyMiddleware, StudentController.studentinsert)
router.get('/qureydata',TokenVerifyMiddleware, StudentController.qureydata)
router.post('/updatedata/:id',TokenVerifyMiddleware, StudentController.updatedata)
router.delete('/removedata/:id',TokenVerifyMiddleware, StudentController.removedata)




// jwt encode & decode
router.get('/CreateToken', JsonWebtoken.CreateToken)
router.get('/EncodeToken', JsonWebtoken.EncodeToken)


module.exports = router ;