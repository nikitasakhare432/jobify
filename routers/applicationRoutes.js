import express from 'express';
import { applyJob, getUserApplications } from '../controllers/ApplicationController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:jobId', authenticateUser, applyJob);

router.get('/my-applications', authenticateUser, getUserApplications);

export default router;