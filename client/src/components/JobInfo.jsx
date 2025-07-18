import React from 'react';

const JobInfo = ({ icon, text }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1rem', marginRight: '1rem', display: 'flex', alignItems: 'center', color: 'var(--text-secondary-color)' }}>
                {icon}
            </span>
            <span style={{ textTransform: 'capitalize', letterSpacing: 'var(--letter-spacing)' }}>
                {text}
            </span>
        </div>
    );
};

export default JobInfo;
