import React from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useNavigate } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import customFetch from '../utils/customFetch';

// Action function to handle form submission
export const action = async ({ request }) => {
    const formData = await request.formData();
    const jobData = Object.fromEntries(formData); // Convert form data to an object

    try {
        await customFetch.post('/jobs', jobData); // Send job data to the backend
        toast.success('Job added successfully');
        return null; // Return null to indicate successful submission
    } catch (error) {
        toast.error(error?.response?.data?.msg || 'Failed to add job');
        return error;
    }
};

// AddJob component with the form for adding a new job
const AddJob = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const jobData = Object.fromEntries(formData);

        try {
            await customFetch.post('/jobs', jobData); // Send job data to backend
            toast.success('Job added successfully');
            navigate('/dashboard'); // Redirect after successful job submission
        } catch (error) {
            toast.error(error?.response?.data?.msg || 'Failed to add job');
        }
    };

    return (
        <Wrapper>
            <Form method="post" className="form" onSubmit={handleSubmit}>
                <h4 className="form-title">Add Job</h4>

                {/* Position Input */}
                <div className="form-row">
                    <label htmlFor="position" className="form-label">Position</label>
                    <input type="text" id="position" name="position" className="form-input" required />
                </div>

                {/* Company Input */}
                <div className="form-row">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" id="company" name="company" className="form-input" required />
                </div>

                {/* Job Location Input */}
                <div className="form-row">
                    <label htmlFor="jobLocation" className="form-label">Job Location</label>
                    <input type="text" id="jobLocation" name="jobLocation" className="form-input" required />
                </div>

                {/* Job Status Dropdown */}
                <div className="form-row">
                    <label htmlFor="jobStatus" className="form-label">Job Status</label>
                    <select id="jobStatus" name="jobStatus" className="form-input">
                        {Object.values(JOB_STATUS).map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                {/* Job Type Dropdown */}
                <div className="form-row">
                    <label htmlFor="jobType" className="form-label">Job Type</label>
                    <select id="jobType" name="jobType" className="form-input">
                        {Object.values(JOB_TYPE).map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>



                {/* Submit Button */}
                <button type="submit" className="btn btn-block form-btn">
                    Submit
                </button>
            </Form>
        </Wrapper>
    );
};

export default AddJob;
