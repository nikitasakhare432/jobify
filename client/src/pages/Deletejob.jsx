import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

// Delete job action
export async function action({ params }) {
    try {
        await customFetch.delete(`/jobs/${params.id}`);
        toast.success('Job deleted successfully');
    } catch (error) {
        toast.error(error?.response?.data?.msg || "Failed to delete job");
    }
    return redirect('/dashboard/all-jobs');
}

const DeleteJob = () => {
    return <h1>Deleting Job...</h1>;  // Temporary message (optional)
};

export default DeleteJob;
