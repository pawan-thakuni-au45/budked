import express from 'express'
import dotenv from 'dotenv'

import router from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notfound,errorHandler } from './middlewear/errorMidlewear.js';

import connectDB from './config/db.js';
dotenv.config()

const PORT=process.env.PORT || 5000

connectDB()

const app=express()

//body parser middlewear
app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
   res.send('API is running ')
})

app.use('/api/products',router)
app.use('/api/users',userRoutes)


app.use(notfound)
app.use(errorHandler)



app.listen(PORT,console.log(`server is running in PORT${PORT}  `))