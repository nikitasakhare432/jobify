// Landing.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';

import main from '../assets/images/main.jpg';
import logo from '../assets/images/logo.svg';
import Company from '../components/Company';
import JobCategories from '../components/JobCategories';
import JobRoleSection from "../components/JobRoleSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Landing = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper>
      <NavWrapper $isSticky={isSticky} as={motion.nav} initial={{ y: -80 }} animate={{ y: 0 }}>
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="JobPortal" className="logo" />
          </Link>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/login" className="btn login">Login</Link>
            <Link to="/register" className="btn signup">Sign Up</Link>
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </NavWrapper>

      <div className='hero-section'>
        <div className='hero-text'>
          <h1>Find your <span>Dream Job</span></h1>
          <p>Discover thousands of job opportunities tailored to your skills. Connect with top companies and take the next step in your career.</p>
          <div className='hero-buttons'>
            <Link to='/register' className='btn register'>Register</Link>
            <Link to='/login' className='btn login'>Login</Link>
          </div>
        </div>
        <img src={main} alt='Job Hunt' className='hero-img' />
      </div>

      <JobCategories />
      <Company />
      <JobRoleSection />

      <motion.section id='about' className='info-section' variants={fadeInUp} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        <h3>About Us</h3>
        <div className='info-grid'>
          <img src={logo} alt='Job Portal' className='about-img' />
          <div>
            <p>We help connect job seekers with companies in a simplified and reliable way. Whether you're looking to hire or be hired, our platform provides the best tools to make it happen.</p>
            <button>Read More</button>
          </div>
        </div>
      </motion.section>

      <motion.section id='why' className='features' variants={fadeInUp} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        <h3>Why Choose Us</h3>
        <div className='features-grid'>
          {["User-Friendly Interface", "Efficient Job Management", "Real-Time Insights", "Secure Platform"].map((text, index) => (
            <div className='feature-card' key={index}>
              <i>✔</i>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id='contact' className='contact-section' variants={fadeInUp} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        <h3>Contact Us</h3>
        <p>Reach out via email at <strong>support@jobportal.com</strong> or call <strong>+123 456 7890</strong></p>
        <form className='contact-form'>
          <input type='text' placeholder='Name' required />
          <input type='email' placeholder='Email' required />
          <textarea rows='4' placeholder='Message' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </motion.section>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Jobify. All rights reserved.</p>
        <div className="footer-icons">
          <a href="mailto:support@jobportal.com" aria-label="Email"><Mail size={20} /></a>
          <a href="tel:+1234567890" aria-label="Phone"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
        </div>
      </footer>
    </StyledWrapper>
  );
};
const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${({ $isSticky }) => ($isSticky ? '#caf0f8' : 'transparent')};
  box-shadow: ${({ $isSticky }) => ($isSticky ? '0 4px 12px rgba(0,0,0,0.08)' : 'none')};
  backdrop-filter: ${({ $isSticky }) => ($isSticky ? 'blur(6px)' : 'none')};
  transition: all 0.3s ease-in-out;

  .nav-center {
    max-width: 1200px;
    margin: auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 140px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      font-weight: 500;
      color: #03045e;
      position: relative;
      transition: color 0.3s;

      &:hover {
        color: #0077b6;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #0077b6;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-weight: bold;
      color: white;
      transition: background 0.3s;
    }

    .login {
      background: #023e8a;
      &:hover { background: #00b4d8; }
    }

    .signup {
      background: #0077b6;
      &:hover { background: #0096c7; }
    }
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      flex-direction: column;
      background: #caf0f8;
      padding: 1rem 0;
      gap: 1rem;
      text-align: center;
      transform: translateY(-200%);
      transition: transform 0.4s ease-in-out;

      &.open {
        transform: translateY(0%);
      }
    }

    .menu-icon {
      display: block;
      color: #03045e;
    }
  }
`;




const StyledWrapper = styled.section`
h3 {
  color: #2cb1bc;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* <-- Align heading to left */
  }
  nav {
    background: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    .nav-center {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;

      li a {
        text-decoration: none;
        font-weight: bold;
        color: #2cb1bc;
        transition: 0.3s;
      }

      li a:hover {
        color: #147d81;
      }
    }
  }

  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: auto;

    .hero-text h1 {
      font-size: 2.5rem;

    }

    .hero-text span {
      color: #2cb1bc;
    }

    .hero-text p {
      margin: 1rem 0;
      letter-spacing: 1px;
    }

    .hero-buttons .btn {
      margin-right: 1rem;
      padding: 0.75rem 1.5rem;
      background: #2cb1bc;
      border: none;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
    }

    .hero-img {
      width: 100%;
      height: auto;
    }
  }

  .info-section, .features, .contact-section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: auto;
  }

  .info-grid {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    .about-img {
      width: 250px;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
    justify-content: center;

    .feature-card {
      background: #fff;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      text-align: center;
      width: 250px;
    }

    i {
      font-size: 2rem;
      color: #2cb1bc;
    }
  }

  .contact-form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin-inline: auto;

    input, textarea {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 1rem;
      border: none;
      background: #2cb1bc;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      grid-template-columns: 1fr;
      text-align: center;

      .hero-img {
        margin-top: 2rem;
      }
    }

    .info-grid {
      flex-direction: column;
      text-align: center;

      .about-img {
        margin-bottom: 1rem;
      }
    }
  }
   .site-footer {
  background: #2cb1bc;
  color: white;
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: 4rem;
  font-size: 1rem;

  .footer-icons {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    a {
      color: white;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
        color: #ffffffcc;
      }
    }
  }
}


`;

export default Landing;