import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";

//we goonna have two function in this folder ,PROTECT-this gonna protect routes of users who is register ,ADMIN-IS SECOND


//PROTECT ROUTES

const protect=asyncHandler(async(req,res,next)=>{

    let token;
    token =req.cookies.jwt

     if(token){
          try{

            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            await User.findById(decoded.userId).select('-password');
            next();


          }catch(error){
            res.status(401)
          }

     }else{
        res.status(401)
        throw new Error('not authorized,no token')
     }


})

//ADMIN MIDLWEAR

const admin=(req,res,next)=>{
    if(req.user && req.user.isAdmin ){
        next()
    }else{
        res.status(401)
        throw new Error('not authorized as admin')
    }
}

export {protect,admin}