import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routerUser from './routes/user.js'
import routerProduct from './routes/product.js'
import dbConnect from './config/dbconnect.js'

const app = express()
dotenv.config()



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

app.listen(4000, () => console.log('PORT 4000'))