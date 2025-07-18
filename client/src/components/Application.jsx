import React from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

const Application = ({ jobId, name, email, position, createdAt, status }) => {
    const date = day(createdAt).format('MMM Do, YYYY');
    const { title, company, location } = jobId || {}; // populated job details

    return (
        <header style={{
            borderRadius: '10px',
            background: '#fff',
            padding: '1rem',
            marginBottom: '3rem',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
            maxWidth: '500px'
        }}>
            <div style={{
                width: '60px',
                height: '60px',
                display: 'grid',
                placeItems: 'center',
                background: '#54d1db',
                borderRadius: '10px',
                fontSize: '1.5rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'white',
                marginRight: '1rem',
            }}>
                {company?.charAt(0)}
            </div>

            <div>
                <h5 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
                    {title}
                </h5>

                <p style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'capitalize', color: '#666' }}>
                    {company}
                </p>

                <div style={{ marginTop: '1.2rem', display: 'grid', gap: '0.7rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaLocationArrow style={{ color: '#007bff' }} />
                        {location}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaCalendarAlt style={{ color: '#28a745' }} />
                        Applied on: {date}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaBriefcase style={{ color: '#ff9800' }} />
                        Applied Position: {position}
                    </div>

                    <div style={{
                        background: '#007bff',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '0.3rem 0.6rem',
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                    }}>
                        Your Email: {email}
                    </div>

                    <div style={{
                        background: status === 'Accepted' ? '#28a745' :
                            status === 'Rejected' ? '#dc3545' :
                                '#ffc107',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '0.3rem 0.6rem',
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        marginTop: '0.5rem',
                    }}>
                        Status: {status}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Application;
