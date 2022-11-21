const express =require('express');
const router =  express.Router();


const UserController = require('../Controllers/UserController')
const TodoController = require('../Controllers/TodoController')

// token verify 

const UserTokenVM = require('../Middlewares/UserTokenVM')

// user router here
router.get('/UserInfoInsert',UserController.UserInfoInsert)
router.post('/UserInfoFind',UserTokenVM,UserController.UserInfoFind)
router.post('/UserInfoUpdate/:id',UserTokenVM,UserController.UserInfoUpdate)
router.delete('/UserInfoRemove/:id',UserTokenVM,UserController.UserInfoRemove)

router.post('/UserLoginInfo',UserController.UserLoginInfo)
router.get('/SelectUser',UserTokenVM,UserController.SelectUser)

// todo router here

router.get('/TodoInfoInsert',UserTokenVM,TodoController.TodoInfoInsert)
router.post('/TodoInfoFind',UserTokenVM,TodoController.TodoInfoFind)
router.post('/TodoInfoUpdata',UserTokenVM,TodoController.TodoInfoUpdata)
router.post('/TodoStatusUpdata',UserTokenVM,TodoController.TodoStatusUpdata)

router.delete('/TodoInfoRemove',UserTokenVM,TodoController.TodoInfoRemove)
router.post('/TodoInfoStatuFilter',UserTokenVM,TodoController.TodoInfoStatuFilter)
router.post('/TodoInfoDateFilter',UserTokenVM,TodoController.TodoInfoDateFilter)












module.exports = router ;