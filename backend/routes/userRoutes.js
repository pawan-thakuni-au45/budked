
import express from 'express'
//we are using methods from teh model that is why we have to use async
import {authUser,ragisterUser,logoutUser,getUserProfile,updateUserProfile,getUsers,getUsersById,deleteUsers,updateUsers } from '../controllers/userControllers.js'
const router=express.Router()

router.route('/').post(ragisterUser).get(getUsers)

router.post('/logout',logoutUser)
router.post('/login',authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUsers).get(getUsersById).put(updateUsers)




 export default router