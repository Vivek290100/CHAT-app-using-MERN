// C:\Users\vivek_laxvnt1\Desktop\CHAT\backend\utils\generateToken.js
import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d"
    })

    res.cookie("jwt", token,{
        httpOnly: true,       //prevent XXS attacks
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "strict",   //prevent CSRF attacks
        secure: process.env.NODE_ENV !== "developement", //only set cookie on developement environment
    })
    
}

export default generateTokenAndSetCookie;