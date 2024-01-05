import express from 'express'
//we are using methods from teh model that is why we have to use async
import { getProducts,getProductById } from '../controllers/productControllers.js'
const router=express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

 export default router