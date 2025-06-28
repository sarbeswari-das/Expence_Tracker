const express=require('express')
const { addTrans, getAllTransaction ,editTransaction,deleteTransaction} = require('../controllers/transactionController')
//router obj
const router=express.Router()

//routes
//add trans
router.post('/add-trans',addTrans)

//edit trans
router.post('/edit-trans',editTransaction)

//delete trans
router.post('/delete-trans',deleteTransaction)

//get transaction
router.post('/get-trans',getAllTransaction)


module.exports=router