// C:\Users\vivek_laxvnt1\Desktop\CHAT\backend\controllers\authCotroller.js
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) =>{
    try{

        const {fullName, userName, password, confirmPassword, gender} = req.body
        if(password != confirmPassword){
            return res.status(400).json({error:`Password doesn't match`})
        }

        const user = await User.findOne({userName})

        if(user){
            return res.status(400).json({error:`UserName already exists`})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        

       const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}'
       const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}'

       const newUser = new User({
        fullName,
        userName,
        password: hashedPassword,
        gender,
        dp:gender === "male" ? boyProfilePic : girlProfilePic
       })

       
       if(newUser){
           generateTokenAndSetCookie(newUser._id, res)
           await newUser.save()

           res.status(201).json({
               _id: newUser._id,
               fullName: newUser.fullName,
               username: newUser.userName,
               dp: newUser.dp
            })
        }else{
            res.status(400).json({error:`Failed to create user`})
        }
    
    }catch(error){
        console.log("Error in signup", error.message);
        res.status(500).json({error:"Internal server error"})
    }
    
}




export const login = async (req, res) =>{
    try{
        const {userName, password} = req.body
        const user = await User.findOne({userName})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:`Invalid username or password`})
        }

        generateTokenAndSetCookie(user._id, res)
        console.log("wewerrwer", req.cookies.jwt);
        console.log("header",req.header);
        
        

        res.json({
            _id: user._id,
            fullName: user.fullName,
            username: user.userName,
            dp: user.dp
        })

    }catch(error){
        console.log("Error in login", error.message);
        res.status(500).json({error:"Internal server error"})
    }
    
}
export const logout = async (req, res) =>{
    try{
        res.clearCookie("token")
        res.json({message:`Logged out successfully`})

        // res.cookie("jwt", "", { maxAge: 0 });
        // res.status(200).json({ message: "Logged out successfully" });

    }catch(error){
        console.log("Error in logout", error.message);
        res.status(500).json({error:"Internal server error"})
    }
    
}

