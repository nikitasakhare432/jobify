import 'express-async-errors';
import { body, validationResult } from 'express-validator';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

import jobRouter from './routers/jobRouter.js';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/UserRouter.js';
import applicationRoutes from './routers/applicationRoutes.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cookieParser());  // Adds security headers
app.use(cors());  // Enables CORS

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); // Logs requests in dev mode
}

// Environment Validation
const validateEnv = () => {
    const requiredVars = ['MONGO_URL', 'PORT', 'NODE_ENV'];
    requiredVars.forEach((varName) => {
        if (!process.env[varName]) {
            throw new Error(`Missing required environment variable: ${varName}`);
        }
    });
};

validateEnv(); // Validate env variables

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.post('/api/v1/test', [body('name').notEmpty().withMessage('name is required')],
    (req, res, next) => {  // Added next() here
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    },
    (req, res) => {
        const { name } = req.body;
        res.json({ msg: `hello ${name}` });
    });

app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/apply', applicationRoutes);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ status: 'fail', message: 'Route not found' });
});

// Global Error Handling Middleware
app.use(errorHandlerMiddleware);

// Start Server and Connect to Database
const port = process.env.PORT || 5100;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit with failure code
    }
};

startServer();
