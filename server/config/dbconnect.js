import mongoose from "mongoose"

mongoose.set('strictQuery', true)
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.eakbrtf.mongodb.net/?retryWrites=true&w=majority"


const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        if (conn.connection.readyState === 1) {
            console.log('MongoDB connection is successfullyy!')
        } else {
            console.log('MongoDB connection is failed!')
        }

    } catch (error) {
        console.log('MongoDB connection is failed!')
        throw new Error(error)

    }
}

export default dbConnect