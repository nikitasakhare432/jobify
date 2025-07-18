import React from 'react';

export const Input = ({ className = '', ...props }) => {
    return (
        <input
            className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
            {...props}
        />
    );
};
