import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';

// Create Context
const DashboardContext = createContext();

const Dashboard = ({ isDarkThemeEnabled }) => {
    const user = { name: 'nikita' }; // Temporary user object

    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

    // Function to toggle dark theme
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Logout functionality
    const logoutUser = async () => {
        console.log('Logging out...');
        // Clear user session/token here
        localStorage.removeItem('token'); // Remove token if saved in localStorage
        sessionStorage.removeItem('token'); // Remove token if saved in sessionStorage
        localStorage.removeItem('darkTheme'); // Reset dark theme setting
        // Optionally redirect to login page after logout
        window.location.href = '/'; // Adjust based on your routing
    };

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />

                    <BigSidebar />
                    <div>
                        <Navbar logoutUser={logoutUser} />  {/* Pass logout function to Navbar */}
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

// Custom Hook for Context
export const useDashboardContext = () => {
    const context = useContext(DashboardContext);

    // Ensure the hook is used within a provider
    if (!context) {
        throw new Error(
            'useDashboardContext must be used within a DashboardContext.Provider'
        );
    }
    return context;
};

export default Dashboard;
