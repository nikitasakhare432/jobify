import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    const handleApply = async () => {
        try {
            const response = await fetch(`/api/apply/${job._id}`, { method: 'POST', credentials: 'include' });
            const data = await response.json();

            if (response.ok) {
                toast.success('Applied successfully!');
            } else {
                toast.error(data.msg);
            }
        } catch (error) {
            toast.error('Error applying for job');
        }
    };

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <button onClick={handleApply} className="apply-btn">Apply</button>
        </div>
    );
};

export default JobCard;
