import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

const JWT_SERECT = "Newhi"

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, JWT_SERECT)
    try {
        const user = await UserModel.findOne({ id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
export default auth