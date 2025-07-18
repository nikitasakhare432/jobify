import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navbar = () => {
    const { toggleSidebar, user } = useDashboardContext(); // Get user from context

    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className='logo-text'>Job Portal</h4>
                </div>
                <div className='user-info'>
                    {user ? <span>Welcome, {user.name}!</span> : "Guest"}
                </div>
                <div className='btn-container'>
                    <ThemeToggle />
                    <LogoutContainer />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
