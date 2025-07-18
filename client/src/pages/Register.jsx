import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom'; // ✅ Import Form from react-router-dom
import logo from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate(); // ✅ To redirect after successful registration
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        location: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axios.post('/api/v1/auth/register', formData, {
                withCredentials: true, // ✅ To handle authentication cookies
            });

            console.log('Registration Success:', res.data);
            alert('Registration Successful! Please log in.');
            navigate('/login'); // ✅ Redirect to login page after successful registration
        } catch (err) {
            console.error('Registration Failed:', err.response?.data);
            setError(err.response?.data?.msg || 'Registration failed. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Form method="post" className="form" onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={logo} alt="Job Portal" className="logo" />
                </div>
                <h4>Register</h4>

                {error && <p className="error">{error}</p>} {/* Show error message */}

                <FormRow
                    type="text"
                    name="name"
                    value={formData.name}
                    handleChange={handleChange}
                />
                <FormRow
                    type="text"
                    name="lastName"
                    labelText="Last Name"
                    value={formData.lastName}
                    handleChange={handleChange}
                />
                <FormRow
                    type="text"
                    name="location"
                    value={formData.location}
                    handleChange={handleChange}
                />
                <FormRow
                    type="email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type="password"
                    name="password"
                    value={formData.password}
                    handleChange={handleChange}
                />

                <button type="submit" className="btn btn-block" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                <p>
                    Already a member?{' '}
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};

export default Register;
