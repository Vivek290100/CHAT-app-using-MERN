import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
    console.log("All cookies:", req.cookies);
    console.log("Headers:", req.headers);
    try {
        const token = req.cookies.jwt
        console.log("req.cookies.jwt",token);
        

        
        if (!token) {
            return res.status(401).json({ error: "Not authenticated -No token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        if (!decoded) {
            return res.status(401).json({ error: "Not authenticated invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(401).json({ error: "Not authenticated user not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("Error in protectedRoute",err.message);
        return res.status(500).json({ error: "Server error" });
    }
}

export default protectRoute;