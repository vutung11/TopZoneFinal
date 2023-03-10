import slugify from "slugify"
import ProductModel from "../models/Product.js"
import asyncHandler from 'express-async-handler'
import ProductCategory from "../models/ProductCategory.js"


const LIMIT_PAGE = 10
const createProduct = asyncHandler(async (req, res) => {
    const { title, slug, description, photos, price, pricePromo, discount, category } = req.body

    const product = new ProductModel({
        title, slug, description, photos, price, pricePromo, discount, category
    })
    product.save()
    res.status(200).json({
        message: 'Create Product Successfully',
        product: product
    })
})

const getOneProductById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await ProductModel.findOne({ id })
    res.status(200).json({
        message: 'Get One Product byId Successfully',
        data: product
    })

})
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
    const limit = +req.query.limit || LIMIT_PAGE
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
            totalPages: Math.ceil(counts / limit),
            data: products,


        })
    })


})

const getProductsByCategory = asyncHandler(async (req, res) => {

    const page = +req.query.page || 1
    const limit = +req.query.limit || LIMIT_PAGE
    const skip = (page - 1) * limit


    const category = await ProductCategory.findOne({ slug: req.body.slug })

    if (!category) {
        // N???u kh??ng t??m th???y danh m???c, tr??? v??? l???i 404 Not Found
        res.status(404).json({ error: 'Category not found' });
        return;
    }
    const products = await ProductModel.find({ category: category._id })
        .skip(skip)
        .limit(limit)
    // S??? d???ng ph????ng th???c countDocuments() c???a mongoose ????? ?????m s??? l?????ng s???n ph???m thu???c danh m???c
    const totalProducts = await ProductModel.countDocuments({
        category: category._id,
    })
    res.status(200).json({
        success: true,
        data: products,
        page,
        limit,
        totalPages: Math.ceil(totalProducts / limit),
        totalProducts,
    });

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
            replacement: (/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'a'),
            replacement: (/??|??|???|???|???|??|???|???|???|???|???/gi, 'e'),
            replacement: (/i|??|??|???|??|???/gi, 'i'),
            replacement: (/??/gi, 'd'),
            replacement: (/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'o'),
            replacement: (/??|??|???|??|???|??|???|???|???|???|???/gi, 'u'),
            replacement: (/??|???|???|???|???/gi, 'y'),
            replacement: (/??|???|???|???|???/gi, 'y'),
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
        const productId = req.params.id; // L???y id t??? ???????ng d???n

        const products = await ProductModel.findByIdAndDelete(productId);
        if (!products) {
            return res.status(404).json({ message: 'Kh??ng t??m th???y s???n ph???m ????? xo??' });
        }

        console.log('???? xo?? s???n ph???m:', products);

        res.status(200).json({
            message: 'Xo?? s???n ph???m th??nh c??ng'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: '???? x???y ra l???i khi xo?? s???n ph???m'
        });
    }
});

export {
    createProduct,
    getAllProduct,
    getProductBySlug,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getOneProductById
}
