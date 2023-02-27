import mongoose from 'mongoose'
const { Schema } = mongoose;

export default mongoose.model('users', new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
}));
