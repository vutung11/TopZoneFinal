import express from 'express'
import { productCategoryController } from '../controllers/index.js'
const router = express.Router()

router.post('/create', productCategoryController.createProductCategory)
router.get('/getall', productCategoryController.getAllCategory)
router.get('/:_id', productCategoryController.getOneCategory)
router.put('/:id', productCategoryController.updateCategory)
router.delete('/:id', productCategoryController.deleteCategory)

export default router