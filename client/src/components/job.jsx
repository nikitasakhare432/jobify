import React, { useState } from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, jobStatus }) => {
    const date = day(createdAt).format('MMM Do, YYYY');
    const [isApplied, setIsApplied] = useState(false);
    const [message, setMessage] = useState('');





    return (
        <article style={{
            background: 'var(--background-secondary-color, #f4f4f4)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            width: '100%',
            maxWidth: '500px',
            margin: 'auto',
        }}>
            <header style={{
                position: 'sticky',
                top: 0,
                background: 'var(--background-secondary-color, #fff)',
                zIndex: 900,
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--grey-100, #ddd)',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    display: 'grid',
                    placeItems: 'center',
                    background: 'var(--primary-500, #54d1db)',
                    borderRadius: '10px',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'white',
                    marginRight: '1rem',
                }}>
                    {company.charAt(0)}
                </div>
                <div>
                    <h5 style={{ marginBottom: '0.3rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary-color, #333)' }}>
                        {position}
                    </h5>
                    <p style={{ textTransform: 'capitalize', color: 'var(--text-secondary-color, #666)', fontSize: '0.9rem' }}>
                        {company}
                    </p>
                </div>
            </header>

            <div style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaLocationArrow style={{ color: '#007bff' }} />
                        {jobLocation}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaCalendarAlt style={{ color: '#28a745' }} />
                        {date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaBriefcase style={{ color: '#ff9800' }} />
                        {jobType}
                    </div>
                    <div style={{
                        background: jobStatus === 'pending' ? '#ffc107' : jobStatus === 'declined' ? '#dc3545' : '#28a745',
                        color: 'white',
                        borderRadius: '5px',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        width: '100px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                    }}>
                        {jobStatus}
                    </div>
                </div>

                {/* Footer Section */}
                <footer style={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#E0E0E0',
                }}>
                    {/* Edit Button */}
                    <Link to={`/dashboard/edit-job/${_id}`} className="btn edit-btn" style={{
                        height: '40px',
                        width: '100px',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 1rem',
                        background: '#007bff',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginLeft: '1rem',
                    }}>
                        Edit
                    </Link>

                    {/* Delete Button */}
                    <Form method="post" action={`../delete-job/${_id}`} style={{ margin: 0 }}>
                        <button type='submit' className='btn delete-btn' style={{
                            height: '40px',
                            width: '100px',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 1rem',
                            background: '#dc3545',
                            color: 'white',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'center',
                            marginLeft: '2rem',
                        }}>
                            Delete
                        </button>
                    </Form>

                    {/* Apply Button */}
                    <Link to={`/dashboard/apply/${_id}`} className="btn edit-btn" style={{
                        height: '40px',
                        width: '100px',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 1rem',
                        background: '#007bff',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginLeft: '1rem',
                    }}>
                        Apply
                    </Link>
                </footer>

                {/* Success/Error Message */}
                {message && (
                    <p style={{
                        marginTop: '1rem',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        color: isApplied ? '#28a745' : '#dc3545',
                        fontWeight: 'bold',
                    }}>
                        {message}
                    </p>
                )}
            </div>
        </article>
    );
};

export default Job;
