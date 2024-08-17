// C:\Users\vivek_laxvnt1\Desktop\CHAT\backend\routes\authRoutes.js
import express from "express"
import {login, logout, signup} from '../controllers/authController.js'

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

export default router