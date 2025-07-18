import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';
import bcrypt from 'bcryptjs';  // Import bcryptjs for password hashing

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    // Generate a salt value and hash the password
    const salt = await bcrypt.genSalt(10);  // Generate salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);  // Hash password with salt
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Invalid credentials' });
    }

    // Validate password (compare with hashed password)
    const isValidUser = user && (await comparePassword(req.body.password, user.password));
    if (!isValidUser) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = createJWT({ userId: user._id, role: user.role });

    res.status(StatusCodes.OK).json({
        msg: 'Login successful',
        token, // Send token back to the client
    });
};

export const logout = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: 'User logged out successfully!' });
};
