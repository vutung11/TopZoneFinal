import ProductCategoryModel from '../models/ProductCategory.js'
import asyncHandler from 'express-async-handler'
import slugify from 'slugify'

const createProductCategory = asyncHandler(async (req, res) => {
    let { title, image, slug } = req.body

    const slugTitle = slugify(title, {
        replacement: '-',
        lower: true,
        locale: 'vi',
    })
    let productCategory = await ProductCategoryModel.create({
        title, image, slug: slugTitle
    })
    res.status(200).json({
        message: 'Create ProductCategory Successfully',
        data: productCategory
    })
})

const getAllCategory = asyncHandler(async (req, res) => {
    const category = await ProductCategoryModel.find()

    res.status(200).json({
        success: true,
        data: category
    })

})
const getOneCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params
    const category = await ProductCategoryModel.findById({ _id })
    res.status(200).json({
        message: 'Get One Category Successfully',
        data: category
    })

})
const updateCategory = asyncHandler(async (req, res) => {
    const { _id, title, image } = req.body
    const category = await ProductCategoryModel.findById({ _id })
    category.title = title ?? category.title
    category.image = image ?? category.image

    category.save()
    res.status(200).json({
        message: 'Update Category Successfully',
        data: category
    })
})

const deleteCategory = asyncHandler(async (req, res) => {
    try {
        const category = await ProductCategoryModel.deleteOne({ _id: req.body._id })

        res.status(200).json({
            message: 'Delete Category Successfully',
            data: category
        })

    } catch (error) {
        res.status(400).json({
            message: 'Delete failed'
        })

    }
})

export {
    createProductCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}