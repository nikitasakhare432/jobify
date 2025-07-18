import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';


export const getCurrentUser = async (req, res) => {
    const user = await User.findById(req.user.userId);  // Access userId from req.user
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};


export const updateUser = async (req, res) => {
    const { name, lastName, email, location } = req.body;

    if (!name || !lastName || !email || !location) {
        return res.status(400).json({ msg: 'Please provide all fields' });
    }

    const existingUser = await User.findOne({ email });

    // Check if the email is already taken by another user
    if (existingUser && existingUser._id.toString() !== req.user.userId) {
        return res.status(400).json({ msg: 'Email already in use' });
    }

    const user = await User.findByIdAndUpdate(
        req.user.userId,
        { name, lastName, email, location },
        { new: true }
    );

    res.status(200).json({ user });
};



