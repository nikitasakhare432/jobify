import axios from 'axios';

const customFetch = axios.create({
    baseURL: '/api/v1',
});

// Add Authorization token to every request
customFetch.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Get token from storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default customFetch;
