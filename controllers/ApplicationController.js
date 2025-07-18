import Application from '../models/Application.js';

// Apply for a Job
export const applyJob = async (req, res) => {
    try {
        const { name, email, position, companyName } = req.body;
        const userId = req.user?.userId;  // Ensure userId comes from authentication middleware

        if (!userId) {
            return res.status(400).json({ msg: 'User ID is missing. Authentication might have failed.' });
        }

        if (!name || !email || !position || !companyName) {
            return res.status(400).json({ msg: 'All fields are required: name, email, position.' });
        }

        const application = await Application.create({ userId, jobId: req.params.jobId, name, email, position, companyName });

        res.status(201).json({ msg: 'Application submitted successfully', application });
    } catch (error) {
        console.error('Application Error:', error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};



// Fetch user's applied jobs
export const getUserApplications = async (req, res) => {
    try {
        const userId = req.user.userId; // Correcting user ID access

        console.log('Fetching applications for User ID:', userId); // Debugging

        const applications = await Application.find({ userId }).populate('jobId', 'title company location'); // Populate with job details
        res.status(200).json({ message: 'Fetched applications successfully', applications });
    } catch (error) {
        console.error('Fetch Applications Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
