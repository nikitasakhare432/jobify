import { Router } from 'express';
import { getCurrentUser, updateUser } from '../controllers/UserController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = Router();

// Protected route to get the current user
router.get('/current-user', authenticateUser, getCurrentUser);

// Protected route to update the user
router.patch('/update-user', authenticateUser, updateUser);

export default router;
