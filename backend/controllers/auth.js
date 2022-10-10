import User from "../models/User.js"
import bcrypt from 'bcryptjs'//Dùng mã hóa mật khẩu
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';
export const register = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt); 

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save();
        res.status(200).send("Tài khoản đã được tạo thành công");
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(createError(404, 'User not Found'));

        const passwordIsCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!passwordIsCorrect) return next(createError(400, 'Wrong Password or E-mail'));


        res.status(200).json(user);
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET);
        console.log(token);

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({token:token,...otherDetails});
    } catch (err) {
        next(err)
    }
}