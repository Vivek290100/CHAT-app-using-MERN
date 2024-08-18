import express from 'express';
import ProtectedRoute from '../middleware/protectRoute.js';
import { getUsersfromSlidebar } from '../controllers/userController.js';

const router = express.Router()


router.get('/',ProtectedRoute, getUsersfromSlidebar)

export default router