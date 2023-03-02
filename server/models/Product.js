import mongoose from 'mongoose'
const { Schema } = mongoose;

export default mongoose.model('products', new Schema({
    title: { type: String },
    slug: { type: String },
    description: { type: String },
    photos: { type: [String] },
    price: { type: Number },
    pricePromo: { type: Number },
    discount: { type: Number },
    category: { type: mongoose.Types.ObjectId, ref: 'productCategory' }
}, {
    timestamps: true
}));
