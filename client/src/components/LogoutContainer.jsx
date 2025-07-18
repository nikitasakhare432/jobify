import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color:var(--primary-500);
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }

  .dropdown {
    position: absolute;
    top: 50px;
    left: 0;
    width: 16rem; /* Fixed width */
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
   /* background: var(--primary-500);*/
    padding: 0.2rem; /* Add padding for spacing inside the dropdown */
    z-index: 1000;
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;          /* Center content vertically */
    justify-content: center;      /* Center content horizontally */
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--black);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;                 /* Full height of dropdown */
    text-align: center;           /* Text centered horizontally */
  }

  .dropdown-btn:hover {
    background: var(--primary-600); /* Optional hover effect */
    color: var(--white);
  }
`;

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
