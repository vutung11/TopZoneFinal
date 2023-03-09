import { register, login, getUser } from './user.js'
import { createProduct, getAllProduct, getProductBySlug, updateProduct, deleteProduct, getProductsByCategory, getOneProductById } from './product.js'
import { createProductCategory, getAllCategory, getOneCategory, updateCategory, deleteCategory } from './productCategory.js'

export const userController = {
    register,
    login,
    getUser
}
export const productController = {
    createProduct,
    getAllProduct,
    getProductBySlug,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getOneProductById
}
export const productCategoryController = {
    createProductCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory,

}
