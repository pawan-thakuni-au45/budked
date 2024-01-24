import asyncHandler from '../middlewear/asyncHandler.js'
import User from '../model/userModel.js'
import  jwt  from 'jsonwebtoken'
import  generateToken from '../utils/generateTokens.js'


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
        res.cookie('jwt',token,{
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
    const {name,email,password}=req.body

    const userExist=await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('user already exist')
    }

    const user=await User.create({name,email,password})
    if(user){
        generateToken(res,user._id)
       
    }else{
            res.status(400);
            throw new Error('invalid user data')
        
    }
})

// @desc     logout user   
// @Routes    POST api/users/logout
//  access       Public

const logoutUser=asyncHandler(async(req,res)=>{
   res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
   })
   res.status(200).json({message:'Logged out succesfully'})
})

// @desc    getuser  Profile 
// @Routes    GET api/users/profile
//  access       PRIVATE

const getUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);

    if(user){
        req.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    update Profile 
// @Routes    PUT api/users/updateUser
//  access       PRIVATE

const updateUserProfile=asyncHandler(async(req,res)=>{
   const user=await User.findById(req.user._id)

   if(user){
    user.name=req.body.name|| user.name
    user.email=req.body.email||user.email
   }

   const updatedUser=await user.save()
   res.json({
    _id:updatedUser._id,
    name:updatedUser.name,
    email:updatedUser.email,
    password:updatedUser.password,
   })

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

