const moment = require("moment");
const transactionModel = require("../models/transactionModel");
const getAllTransaction = async (req, res) => {
  try {
    const { freq,selectedDate,type } = req.body;
    const transactions = await transactionModel.find({
      ...(freq !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(freq), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,

      ...(type!=="all" && {type}),
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTransaction=async (req,res)=>{
  try{
    await transactionModel.findOneAndDelete({_id:req.body.transactionId})
    res.status(200).send('Transaction deleted')

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  
  }

}

const editTransaction=async(req,res)=>{
  try{
    await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
    res.status(200).send('Edit successful')

  }catch(error){
    console.log(error);
    res.status(500).json(error);
    
  }
}

const addTrans = async (request, response) => {
  try {
    console.log("Received data:", request.body);
    const newTransaction = new transactionModel(request.body);
    await newTransaction.save();
    response.status(201).send("Transaction Created");
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
module.exports = { getAllTransaction, addTrans ,editTransaction,deleteTransaction};
