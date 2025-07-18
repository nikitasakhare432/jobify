import jwt from 'jsonwebtoken';

// Function to create JWT token
export const createJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,  // 1d for example
    });

    console.log('JWT Token:', token);  // Optional: for debugging
    return token;
};

// Function to verify JWT token
export const verifyJWT = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};
