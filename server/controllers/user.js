import UserModel from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import asyncHandler from 'express-async-handler'

const register = asyncHandler(async (req, res) => {
    const { firstName, mobile, lastName, email, password } = req.body
    const exitUser = await UserModel.findOne({ email, mobile }).exec()

    if (!!exitUser) {
        throw new 'User da ton tai'
    }
    const hasPassword = await bcrypt.hash(password, parseInt('hello'))

    let user = new UserModel({
        firstName, mobile, lastName, email, password: hasPassword
    })
    user.save()

    res.json({
        ...user._doc,
        password: 'Not Show'
    })

})

const login = async (req, res) => {
    const { email, password } = req.body
    let exitUser = await UserModel.findOne({ email }).exec()
    if (exitUser) {

        let isMatch = await bcrypt.compare(password, exitUser.password)
        if (!!isMatch) {
            let token = jwt.sign({
                data: exitUser
            },
                process.env.JWT_SERECT,
                { expiresIn: '10day' }
            )
            let refreshToken = jwt.sign({
                data: exitUser
            },
                "Hi",
                { expiresIn: '12day' }
            )
            await UserModel.findByIdAndUpdate(exitUser._id, { refreshToken }, { new: true })
            res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 12 * 24 * 60 * 60 * 1000 })
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