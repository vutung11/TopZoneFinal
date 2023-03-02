import ProductCategoryModel from '../models/ProductCategory.js'
import asyncHandler from 'express-async-handler'

const createProductCategory = asyncHandler(async (req, res) => {
    const { title } = req.body

    let productCategory = await ProductCategoryModel.create({
        title
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
    const { _id, title } = req.body
    const category = await ProductCategoryModel.findById({ _id })
    category.title = title ?? category.title

    category.save()
    res.status(200).json({
        message: 'Update Category Successfully',
        data: category
    })
})

const deleteCategory = asyncHandler(async (req, res) => {
    try {
        const category = await ProductCategoryModel.deleteOne({ _id: req.body })

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