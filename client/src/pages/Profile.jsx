import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/current-user'); // ✅ Correct endpoint
        return { user: data.user };
    } catch (error) {
        return { user: null };
    }
};


const Profile = () => {
    const { user } = useLoaderData();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        lastName: user?.lastName || '',
        email: user?.email || '', // Now editable
        location: user?.location || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Get token from localStorage
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token
                },
            };

            await customFetch.patch('/users/update-user', formData, config);
            alert('Profile updated successfully!');
        } catch (error) {
            alert(error.response?.data?.msg || 'Error updating profile');
        }
    };


    return (
        <section>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <button type="submit">Update Profile</button>
            </form>

            <style jsx>{`
                h2 {
                    text-align: left;
                    font-size: 24px;
                    margin-bottom: 15px;
                }
                .profile-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                label {
                    font-weight: bold;
                    display: block;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                }
                button {
                    padding: 10px;
                    border: none;
                    border-radius: 4px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </section>
    );
};

export default Profile;
