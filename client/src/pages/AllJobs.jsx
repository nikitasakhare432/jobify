import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
    try {
        // Extract search parameters for filtering jobs
        const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

        const { data } = await customFetch.get('/jobs', { params });

        return {
            data,
            searchValues: { ...params },
        };
    } catch (error) {
        toast.error(error?.response?.data?.msg || 'Something went wrong while fetching jobs.');
        return { data: [], searchValues: {} };
    }
};

const AllJobs = () => {
    const { data, searchValues } = useLoaderData();

    return (
        <AllJobsContext.Provider value={{ data, searchValues }}>
            <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
