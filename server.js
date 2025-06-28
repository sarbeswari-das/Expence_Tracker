const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDb')

//config env file
dotenv.config()

//database call
connectDb();


//rest obj
const app=express()

//middleware
app.use(morgan('dev'))//display log in a pretty way
app.use(cors())
app.use(express.json());

//routes-user
app.use('/api/v1/users',require('./routes/userRoute'))


//routes-transaction
app.use('/api/v1/transactions',require('./routes/transactionRoutes'))
//port
const PORT=8080 || process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})