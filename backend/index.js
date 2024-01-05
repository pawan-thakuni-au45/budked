import express from 'express'
import dotenv from 'dotenv'

import router from './routes/productRoutes.js'
import { notfound,errorHandler } from './middlewear/errorMidlewear.js';

import connectDB from './config/db.js';
dotenv.config()

const PORT=process.env.PORT || 5000

connectDB()

const app=express()

app.get('/',(req,res)=>{
   res.send('API is running ')
})

app.use('/api/products',router)

app.use(notfound)
app.use(errorHandler)



app.listen(PORT,console.log(`server is running in PORT${PORT}  `))