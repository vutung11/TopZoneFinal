import ProductCategoryModel from '../models/ProductCategory.js'
import asyncHandler from 'express-async-handler'

const createProductCategory = asyncHandler(async (req, res) => {
    const { title, image, slug } = req.body
    const productCategory = await ProductCategoryModel.create({ title, image, slug })
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
    const { _id, title, image, slug } = req.body
    const category = await ProductCategoryModel.findById({ _id })
    category.title = title ?? category.title
    category.image = image ?? category.image
    category.slug = slug ?? category.slug

    category.save()
    res.status(200).json({
        message: 'Update Category Successfully',
        data: category
    })
})

const deleteCategory = asyncHandler(async (req, res) => {
    try {
        const categoryId = req.params.id; // Lấy id từ đường dẫn

        const category = await ProductCategoryModel.findByIdAndDelete(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Không tìm thấy danh mục để xoá' });
        }

        console.log('Đã xoá danh mục:', category);

        res.status(200).json({
            message: 'Xoá danh mục thành công'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Đã xảy ra lỗi khi xoá danh mục'
        });
    }
});

export {
    createProductCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}