import UserModel from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const register = async (req, res) => {
    const { name, email, password } = req.body
    const exitUser = await UserModel.findOne({ email }).exec()

    if (!!exitUser) {
        throw new 'User da ton tai'
    }
    const hasPassword = await bcrypt.hash(password, parseInt('hello'))

    let user = new UserModel({
        name, email, password: hasPassword
    })
    user.save()

    res.json({
        ...user._doc,
        password: 'Not Show'
    })

}
const login = async (req, res) => {
    const { email, password } = req.body
    let exitUser = await UserModel.findOne({ email }).exec()
    if (exitUser) {

        let isMatch = await bcrypt.compare(password, exitUser.password)
        if (!!isMatch) {
            let token = jwt.sign({
                data: exitUser
            },
                "New",
                { expiresIn: '10day' }
            )
            res.status(201).json({
                ...exitUser.toObject(),
                password: 'Not Show',
                token
            })
        } else {
            res.status(400).json({
                err: 'Sai user password'
            }
            )
        }
    } else {
        res.status(400).json({
            err: 'Sai user password'
        }
        )
    }

}
export {
    register,
    login
}