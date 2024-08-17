import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
import protectedRoute from '../middleware/protectRoute.js';

const router = express.Router()


// router.get("/:id", protectedRoute,getMessage)
router.post("/send/:id", protectedRoute,sendMessage)

export default router