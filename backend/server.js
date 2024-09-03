// C:\Users\vivek_laxvnt1\Desktop\CHAT\backend\server.js
import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connetToDB from './config/mongodb.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req,res)=>{
//     res.send("created")
// })

app.listen(PORT,()=>{
    connetToDB()
    console.log("server running on http://localhost:8000");
    
})