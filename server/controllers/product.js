import slugify from "slugify"
import { MAX_RECORDS } from "../global/constant.js"
import ProductModel from "../models/Product.js"
import asyncHandler from 'express-async-handler'


const createProduct = asyncHandler(async (req, res) => {
    const { title, slug, description, photos, price, pricePromo, discount, category } = req.body
    const slugTitle = slugify(title, {
        replacement: '-',
        lower: true,
        replacement: (/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a'),
        replacement: (/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e'),
        replacement: (/i|í|ì|ỉ|ĩ|ị/gi, 'i'),
        replacement: (/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o'),
        replacement: (/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u'),
        replacement: (/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y'),
        replacement: (/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y'),
        replacement: (/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, ''),
        replacement: (/\-\-\-\-\-/gi, '-'),
        replacement: (/\-\-\-\-/gi, '-'),
        replacement: (/\-\-\-/gi, '-'),
        replacement: (/\-\-/gi, '-'),
    })
    let product = new ProductModel({
        title, slug: slugTitle, description, photos, price, pricePromo, discount, category
    })
    product.save()
    res.status(200).json({
        message: 'Create Product Successfully',
        product: product
    })
})

// let { page = 1, size = MAX_RECORDS, searchString = '' } = req.query

// size = size >= MAX_RECORDS ? MAX_RECORDS : size

// let products = await ProductModel.find({
//     size, page, searchString
// })

const getAllProduct = asyncHandler(async (req, res) => {


    const queries = { ...req.query }

    const excludeFileds = ['limit', 'sort', 'page', 'fileds']

    excludeFileds.forEach(el => delete queries[el])

    let queryString = JSON.stringify(queries)

    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, mactheEl => `$${mactheEl}`)

    const formatQueries = JSON.parse(queryString)

    if (queries?.title) formatQueries.title = { $regex: queries.title, $options: 'i' }

    let queryCommand = ProductModel.find(formatQueries)

    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ')
        queryCommand = queryCommand.sort(sortBy)
    }

    if (req.query.fileds) {
        const fileds = req.query.fileds.split(',').join(' ')
        queryCommand = queryCommand.select(fileds)
    }

    // pagination 
    const page = +req.query.page || 1
    const limit = +req.query.limit || process.env.LIMIT_PAGE
    const skip = (page - 1) * limit

    queryCommand.skip(skip).limit(limit)

    queryCommand.exec(async (err, products) => {
        if (err) throw new (err.message)
        const counts = await ProductModel.find(formatQueries).countDocuments()
        res.status(200).json({
            message: 'Get all product success fully',
            counts,
            page,
            limit,
            data: products,

        })
    })


})

const getProductBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params
    const product = await ProductModel.findOne({ slug })

    res.status(200).json({
        message: ' Get product by slug successfully',
        data: product
    })
})

const updateProduct = asyncHandler(async (req, res) => {
    const { _id, title, slug, description, photos, price, pricePromo, discount, category } = req.body

    const product = await ProductModel.findById({ _id })

    product.title = title ?? product.title,
        product.slug = slugify(title, {
            replacement: '-',
            lower: true,
            replacement: (/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a'),
            replacement: (/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e'),
            replacement: (/i|í|ì|ỉ|ĩ|ị/gi, 'i'),
            replacement: (/đ/gi, 'd'),
            replacement: (/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o'),
            replacement: (/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u'),
            replacement: (/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y'),
            replacement: (/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y'),
            replacement: (/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, ''),
            replacement: (/\-\-\-\-\-/gi, '-'),
            replacement: (/\-\-\-\-/gi, '-'),
            replacement: (/\-\-\-/gi, '-'),
            replacement: (/\-\-/gi, '-'),
        }),
        product.description = description ?? product.description,
        product.photos = photos ?? product.photos,
        product.price = price ?? product.price,
        product.pricePromo = pricePromo ?? product.pricePromo,
        product.discount = discount ?? product.discount,
        product.category = category ?? product.category,

        await product.save()

    res.status(201).json({
        message: 'Update product successfully',
        data: product
    })

})

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const result = await ProductModel.deleteOne({ _id: req.params })
        res.status(200).json({
            message: 'Delete product by id successfully',
            data: result
        })
    } catch (error) {
        console.log(error.message)

    }


})


export {
    createProduct,
    getAllProduct,
    getProductBySlug,
    updateProduct,
    deleteProduct
}
