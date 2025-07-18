import User from '../models/UserModel.js';
import Job from '../models/Job.js';

// Controller for admin stats
export const getAdminStats = async (req, res) => {
    console.log("Admin request by:", req.user); // Debugging

    if (req.user.role !== 'admin') {
        console.log("Unauthorized Access Attempt:", req.user.email);
        return res.status(403).json({ msg: 'Not authorized' });
    }

    try {
        const users = await User.countDocuments();
        const jobs = await Job.countDocuments();
        res.status(200).json({ users, jobs });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ msg: 'Server error' });
    }
};
