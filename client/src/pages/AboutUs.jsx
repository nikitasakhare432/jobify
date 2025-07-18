import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const AboutUs = () => {
    return (
        <div>


            <section className="about">
                <h1>About Us</h1>
                <p className="about-text">
                    Our job portal is a cutting-edge platform that simplifies job searching and recruitment. We provide an intuitive interface for users to browse, post, edit, and manage job applications effortlessly.
                </p>
                <div className="about-info">
                    <div className="about-img">
                        <img src={logo} alt="Job Portal" />
                    </div>
                    <div>
                        <p>
                            Our mission is to connect job seekers with employers efficiently while providing a seamless job management experience. Whether you're looking for your dream job or hiring top talent, our platform ensures a hassle-free process.
                        </p>
                        <button className="btn">Read More...</button>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <h1>Why Choose Us?</h1>
                <div className="why-choose-us-container">
                    {[
                        { icon: "✔", text: "User-Friendly Interface: A simple, intuitive platform for all users." },
                        { icon: "✔", text: "Efficient Job Management: Seamless job posting and tracking." },
                        { icon: "✔", text: "Data-Driven Insights: Get detailed statistics on job performance." },
                        { icon: "✔", text: "Secure & Reliable: Your data and applications are always protected." }
                    ].map((item, index) => (
                        <div key={index} className="why-choose-us-box">
                            <i>{item.icon}</i>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="team">
                <h1>Meet Our Team</h1>
                <div className="team-cards">
                    {[
                        { name: "Jane", role: "CEO and Founder", email: "jane@example.com", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" },
                        { name: "Miller", role: "Co-Founder", email: "miller@example.com", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" },
                        { name: "Joe", role: "Co-Founder", email: "joe@example.com", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" }
                    ].map((member, index) => (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="card-info">
                                <h2 className="card-name">{member.name}</h2>
                                <p className="card-role">{member.role}</p>
                                <p className="card-email">{member.email}</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Job Portal. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
