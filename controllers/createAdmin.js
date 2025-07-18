import mongoose from 'mongoose';
import User from '../models/UserModel.js'; // Adjust the path if needed
import { hashPassword } from '../utils/passwordUtils.js';

(async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('process.env.MONGO_URL', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Hash the new admin password
        const hashedPassword = await hashPassword('yourNewSecurePassword'); // Change the password

        // Create the admin user
        const adminUser = new User({
            name: 'Admin',
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'admin',
        });

        await adminUser.save();
        console.log('Admin user created successfully! ✅');

        // Close the connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error creating admin user:', error);
        mongoose.connection.close();
    }
})();
