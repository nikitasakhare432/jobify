import { Router } from 'express';
const router = Router();

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    showStats
} from '../controllers/jobController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';
router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/stats').get(authenticateUser, showStats);
router
    .route('/:id')
    .get(getJob)
    .patch(validateJobInput, updateJob)
    .delete(deleteJob);


// router.get('/', getAllJobs);
// router.post('/', createJob);



export default router;