import { register, login } from './user.js'
import { createProduct, getAllProduct, getProductBySlug, updateProduct, deleteProduct } from './product.js'
import { createProductCategory, getAllCategory, getOneCategory, updateCategory, deleteCategory } from './productCategory.js'

export const userController = {
    register,
    login
}
export const productController = {
    createProduct,
    getAllProduct,
    getProductBySlug,
    updateProduct,
    deleteProduct
}
export const productCategoryController = {
    createProductCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}