
import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`px-4 py-2 rounded-xl font-medium transition-all hover:opacity-90 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
