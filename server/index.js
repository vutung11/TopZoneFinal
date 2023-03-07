import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import cloudinary from 'cloudinary'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import fs from 'fs'
import routerUser from './routes/user.js'
import routerProduct from './routes/product.js'
import routerCategory from './routes/productCategory.js'
import dbConnect from './config/dbconnect.js'

const app = express()
dotenv.config()

cloudinary.v2.config({
    cloud_name: 'dsytimdla',
    api_key: '288985543335244',
    api_secret: '7DDbCezyzCNuQ8caflc38a6Nves'
});
dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Test')
})
app.use(cors({
    origin: true,
    credentials: true
}))
app.use('/api/user', routerUser)
app.use('/api/product', routerProduct)
app.use('/api/category', routerCategory)
// app.use('/api', routerUpload)



const photosMiddleware = multer({ dest: 'uploads' })
app.post('/api/upload', photosMiddleware.array('photos', 100), (req, res) => {
    const uploadedFiles = []
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i]
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)
        uploadedFiles.push(newPath.replace('uploads', ''))
    }
    res.json(uploadedFiles)
})

app.listen(4000, () => console.log('PORT 4000'))