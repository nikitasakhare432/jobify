import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import ApplicationsContainer from '../components/ApplicationsContainer';


const MyApplicationsContext = createContext();

export const loader = async () => {
    try {
        const data = await customFetch.get('/apply/my-applications');

        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.msg || 'Something went wrong while fetching applications.');
        return { data: [] };
    }
};

const MyApplications = () => {
    const { data } = useLoaderData();

    return (
        <MyApplicationsContext.Provider value={{ data }}>
            <ApplicationsContainer />
        </MyApplicationsContext.Provider>
    );
};

export const useMyApplicationsContext = () => useContext(MyApplicationsContext);

export default MyApplications;
