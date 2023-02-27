import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routerUser from './routes/user.js'
import routerProduct from './routes/product.js'

const app = express()

mongoose.set('strictQuery', true)
const MongoURI = 'mongodb+srv://admin:admin@cluster0.eakbrtf.mongodb.net/?retryWrites=true&w=majority'

await mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connect mongoose successfullt'))
    .catch(error => console.log(error))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Test')
})
app.use(cors({
    origin: true,
    credentials: true
}))
app.use('/api/user', routerUser)
app.use('/api/product', routerProduct)

app.listen(4000, () => console.log('PORT 4000'))