
import express from 'express'
//we are using methods from teh model that is why we have to use async
import {authUser,ragisterUser,logoutUser,getUserProfile,updateUserProfile,getUsers,getUsersById,deleteUsers,updateUsers } from '../controllers/userControllers.js'
import { protect,admin } from '../middlewear/authmiddlewear.js'
const router=express.Router()
router.post('/login',authUser)
router.route('/').post(ragisterUser).get(protect,admin,getUsers)

router.post('/logout',logoutUser)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUsers).get(protect,admin,getUsersById).put(protect,admin,updateUsers)




 export default router