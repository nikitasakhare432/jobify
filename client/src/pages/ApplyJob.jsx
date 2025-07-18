import { useNavigation, Form, redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log("Submitting application for Job ID:", params.jobId); // Debugging

    try {
        const response = await customFetch.post(`apply/${params.jobId}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  // Ensure token is sent
            }
        });

        console.log("Application Response:", response.data); // Debugging
        toast.success('Application submitted successfully');
        return redirect('/dashboard/my-applications');
    } catch (error) {
        console.error("Application Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.msg || 'Error submitting application');
        return { error: error.response?.data?.msg || 'Error submitting application' };
    }
};

const ApplyJob = () => {
    const { jobid } = useParams();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div style={styles.container}>
            <Form method="post" style={styles.form}>
                <h4 style={styles.title}>Apply for Job</h4>
                <div style={styles.formCenter}>
                    <FormRow label="Company Name" name="companyName" type="text" required />
                    <FormRow label="Full Name" name="name" type="text" required />
                    <FormRow label="Email" name="email" type="email" required />
                    <FormRow label="Position" name="position" type="text" required />

                    <button type="submit" style={styles.button} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Apply'}
                    </button>
                </div>
            </Form>
        </div>
    );
};

// FormRow Component
const FormRow = ({ label, name, type, required }) => {
    return (
        <div style={styles.formRow}>
            <label htmlFor={name} style={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                required={required}
                style={styles.input}
            />
        </div>
    );
};

// Inline Styling
const styles = {
    container: {
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    title: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    },
    formCenter: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    formRow: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#555',
    },
    input: {
        height: '35px',
        padding: '8px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        height: '40px',
        width: '100%',
        fontSize: '1rem',
        fontWeight: 'bold',
        background: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default ApplyJob;
