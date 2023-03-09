import slugify from "slugify"
import ProductModel from "../models/Product.js"
import asyncHandler from 'express-async-handler'
import ProductCategory from "../models/ProductCategory.js"


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
            totalPages: Math.ceil(counts / limit),
            data: products,


        })
    })


})

const getProductsByCategory = asyncHandler(async (req, res) => {

    const page = +req.query.page || 1
    const limit = +req.query.limit || process.env.LIMIT_PAGE
    const skip = (page - 1) * limit


    const category = await ProductCategory.findOne({ slug: req.body.slug })

    if (!category) {
        // Nếu không tìm thấy danh mục, trả về lỗi 404 Not Found
        res.status(404).json({ error: 'Category not found' });
        return;
    }
    const products = await ProductModel.find({ category: category._id })
        .skip(skip)
        .limit(limit)
    // Sử dụng phương thức countDocuments() của mongoose để đếm số lượng sản phẩm thuộc danh mục
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
        const productId = req.params.id; // Lấy id từ đường dẫn

        const products = await ProductModel.findByIdAndDelete(productId);
        if (!products) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xoá' });
        }

        console.log('Đã xoá sản phẩm:', products);

        res.status(200).json({
            message: 'Xoá sản phẩm thành công'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Đã xảy ra lỗi khi xoá sản phẩm'
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
