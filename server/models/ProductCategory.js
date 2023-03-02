import mongoose from 'mongoose'
const { Schema } = mongoose

export default mongoose.model('productCategory', new Schema({
    title: { type: String },
}, {
    timestamps: true
}));
