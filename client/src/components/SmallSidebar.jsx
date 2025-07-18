import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';


import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';

const SmallSidebar = () => {
    const { showSidebar, toggleSidebar } = useDashboardContext();
    return (
        <Wrapper>
            <div
                className={
                    showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
                }
            >
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <div className="logo-container">
                        <img src={logo} alt="Job Portal" className="logo" />
                    </div>
                    <div className='nav-links'>
                        {links.map((link) => {
                            const { text, path, icon } = link;

                            return (
                                <NavLink
                                    to={path}
                                    key={text}
                                    className='nav-link'
                                    onClick={toggleSidebar}
                                    // will discuss in a second
                                    end
                                >
                                    <span className='icon'>{icon}</span>
                                    {text}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;