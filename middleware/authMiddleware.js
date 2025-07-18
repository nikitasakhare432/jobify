
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('Auth Header:', authHeader); // Debugging

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'Authentication invalid - No token provided' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token); // Debugging

    try {
        const { userId, role } = verifyJWT(token);
        console.log('Decoded User:', { userId, role }); // Debugging
        req.user = { userId, role };
        next();
    } catch (error) {
        console.error('Token Verification Failed:', error);
        return res.status(401).json({ msg: 'Authentication invalid - Token verification failed' });
    }
};


