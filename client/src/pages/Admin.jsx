import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';

export const loader = async () => {
    try {
        const response = await customFetch.get('/users/stats'); // ✅ Fetch user stats
        return response.data;
    } catch (error) {
        return redirect('/dashboard'); // ✅ Directly navigate to dashboard on error
    }
};

const Admin = () => {
    const { users, jobs } = useLoaderData();

    return (
        <Wrapper>
            <h2>Admin Page</h2>
        </Wrapper>
    );
};

export default Admin;
