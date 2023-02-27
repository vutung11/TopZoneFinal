import express from 'express'
import { productController } from '../controllers/index.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.post('/addproduct', auth, productController.createProduct)
router.get('/getall', productController.getAllProduct)

export default router