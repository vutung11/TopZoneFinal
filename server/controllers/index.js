import { register, login } from './user.js'
import { createProduct, getAllProduct, getProductBySlug, updateProduct, deleteProduct } from './product.js'

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