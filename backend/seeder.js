import mongoose from "mongoose";
import dotenv from "dotenv";
import  colors  from "colors";

import users from "./data/Users.js";
import products from "./data/Products.js";
import User from "./model/userModel.js";
import Products from "./model/productModel.js";
import Order from "./model/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB()

const importData=async()=>{

    try{

        await Order.deleteMany()
        await Products.deleteMany()
        await User.deleteMany()

        const createdUser=await User.insertMany(users)

        const adminUser=createdUser[0]._id

        const sampleProduct=products.map((product)=>{
            return {...product, user:adminUser}
        })

        await Products.insertMany(sampleProduct)

        console.log('Data Imported!'.green.inverse)
        process.exit()


    }catch(error){
console.error(`${error}`.red.inverse)
process.exit(1)

    }
}

const destroyData=async()=>{
     try{
        await Order.deleteMany()
        await Products.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()
     }catch(error){
  console.error(`${error}`.red.inverse)
  process.exit(1)
     }
}
//console.log(argv)=>2nd index will be -d
if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}




