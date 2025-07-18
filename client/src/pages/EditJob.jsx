import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, Form, redirect, useNavigation } from 'react-router-dom'; // ✅ Import useNavigation
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/jobs/${params.id}`);
        return { job: data };
    } catch (error) {
        toast.error(error.response?.data?.msg || 'Error fetching job details');
        return redirect('/dashboard/all-jobs');
    }
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.patch(`/jobs/${params.id}`, data);
        toast.success('Job edited successfully');
        return redirect('/dashboard/all-jobs');
    } catch (error) {
        toast.error(error.response?.data?.msg || 'Error updating job');
        return error;
    }
};

const EditJob = () => {
    const data = useLoaderData();
    const navigation = useNavigation(); // ✅ Use navigation hook
    const isSubmitting = navigation.state === 'submitting'; // ✅ Get submission state

    if (!data || !data.job) {
        return <h1>Loading job details...</h1>;
    }

    const { job } = data;

    return (
        <Wrapper>
            <Form method="post" className="form">
                <h4 className="form-title">Edit Job</h4>
                <div className="form-center">
                    <FormRow type="text" name="position" defaultValue={job.position || ''} />
                    <FormRow type="text" name="company" defaultValue={job.company || ''} />
                    <FormRow
                        type="text"
                        labelText="Job Location"
                        name="jobLocation"
                        defaultValue={job.jobLocation || ''}
                    />

                    {/* Job Status Dropdown */}
                    <div className="form-row">
                        <label htmlFor="jobStatus" className="form-label">Job Status</label>
                        <select id="jobStatus" name="jobStatus" className="form-input" defaultValue={job.jobStatus}>
                            {Object.values(JOB_STATUS).map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>

                    {/* Job Type Dropdown */}
                    <div className="form-row">
                        <label htmlFor="jobType" className="form-label">Job Type</label>
                        <select id="jobType" name="jobType" className="form-input" defaultValue={job.jobType}>
                            {Object.values(JOB_TYPE).map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* ✅ Fix: Ensure isSubmitting is used correctly */}
                    <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>

                </div>
            </Form>
        </Wrapper>
    );
};

export default EditJob;
