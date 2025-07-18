import React from "react";
import { GitHub, LinkedIn, Twitter, Facebook } from "lucide-react";
import "./Footer.css"; // optional if you want to separate styles

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Job Portal</h4>
                    <p>Your gateway to exciting career opportunities.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Sign Up</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GitHub size={24} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn size={24} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
