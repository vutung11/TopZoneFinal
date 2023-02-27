import slugify from "slugify"
import ProductModel from "../models/Product.js"

const createProduct = async (req, res) => {
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
}

const getAllProduct = async (req, res) => {
    res.status(200).json(await ProductModel.find())
}
export {
    createProduct,
    getAllProduct
}
