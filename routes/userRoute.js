const express=require('express')
const { loginController, regController } = require('../controllers/userController')
//router obj
const router=express.Router()

//router
//POST or login
router.post('/login',loginController)

//post or register
router.post('/register',regController)

module.exports=router