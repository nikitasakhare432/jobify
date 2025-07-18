import express from 'express';
import { getAdminStats } from '../controllers/adminController.js';
import { authMiddleware, checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/admin/app-stats', authMiddleware, checkAdmin, getAdminStats);

export default router;
