import express from 'express'
import { productController } from '../controllers/index.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.post('/addproduct', productController.createProduct)
router.get('/getall', productController.getAllProduct)
router.post('/category', productController.getProductsByCategory)
router.get('/:slug', productController.getProductBySlug)
router.get('/getone/:id', productController.getOneProductById)
router.put('/update/:_id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

export default router