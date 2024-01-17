import asyncHandler from '../middlewear/asyncHandler.js'
import User from '../model/userModel.js'
import { Jwt } from 'jsonwebtoken'

// @desc     Auth user and get Token    
// @Routes    POST api/users/login
//  access       Public

// && (await user.matchPassword(password))

const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email })

    if(user && (await user.matchPassword(password)) ){

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn:'30d',
        })
        //set jwt as http only cookie
        res.cookie('jwt',token{
            httpOnly:true,
            secure:process.env.NODE_ENV!='development' ,
            sameSite:'strict',
            maxAge:30*24*60*60*1000  //30 days
        })
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(401);
        throw new Error('Invalid email or password')
    }
    
})

// @desc     register user   
// @Routes    POST api/users
//  access       Public

const ragisterUser=asyncHandler(async(req,res)=>{
    res.send('ragister user')
})

// @desc     logout user   
// @Routes    POST api/users/logout
//  access       Public

const logoutUser=asyncHandler(async(req,res)=>{
    res.send('logout user')
})

// @desc    getuser  Profile 
// @Routes    GET api/users/profile
//  access       PRIVATE

const getUserProfile=asyncHandler(async(req,res)=>{
    res.send('get user profile')
})

// @desc    update Profile 
// @Routes    PUT api/users/updateUser
//  access       PRIVATE

const updateUserProfile=asyncHandler(async(req,res)=>{
    res.send(' update user profile')
})

// @desc    getUsers
// @Routes    GET api/users
//  access       PRIVATE/ADMIN

const getUsers=asyncHandler(async(req,res)=>{
    res.send(' get users')
})


// @desc    getUsers by id
// @Routes    GET api/users/:id
//  access       PRIVATE/ADMIN

const getUsersById=asyncHandler(async(req,res)=>{
    res.send(' get user')
})

// @desc    delete  Users
// @Routes    DELETE api/users/:ID
//  access       PRIVATE/ADMIN

const deleteUsers=asyncHandler(async(req,res)=>{
    res.send(' delete users')
})

// @desc    update  Users
// @Routes    PUT api/users/:ID
//  access       PRIVATE/ADMIN

const updateUsers=asyncHandler(async(req,res)=>{
    res.send(' update users')
})

export {authUser,ragisterUser,logoutUser,getUserProfile,updateUserProfile,getUsers,getUsersById,deleteUsers,updateUsers} 

