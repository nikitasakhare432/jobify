import Job from '../models/JobModels.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { NotFoundError } from '../errors/customErrors.js';



// Create Job
import { nanoid } from 'nanoid';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end developer' },
    { id: nanoid(), company: 'google', position: 'back-end developer' },
];

export const getAllJobs = async (req, res) => {
    const { search, jobStatus, jobType, sort, page = 1, limit = 10 } = req.query;

    const queryObject = {};

    if (search) {
        queryObject.$or = [
            { position: { $regex: search, $options: 'i' } },
            { company: { $regex: search, $options: 'i' } },
        ];
    }

    if (jobStatus && jobStatus !== 'all') {
        queryObject.jobStatus = jobStatus;
    }

    if (jobType && jobType !== 'all') {
        queryObject.jobType = jobType;
    }

    const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
        'a-z': 'position',
        'z-a': '-position',
    };

    const sortKey = sortOptions[sort] || sortOptions.newest;

    const skip = (Number(page) - 1) * Number(limit);

    const jobs = await Job.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(Number(limit));

    const totalJobs = await Job.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalJobs / limit);

    res.status(StatusCodes.OK).json({ totalJobs, numOfPages, currentPage: Number(page), jobs });
};


export const createJob = async (req, res) => {
    const { company, position } = req.body;

    const job = await Job.create({ company, position });
    res.status(201).json({ job });
};
export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) throw new NotFoundError(`no job with id : ${id}`);
    res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!updatedJob) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    res.status(200).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);

    if (!removedJob) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    res.status(200).json({ job: removedJob });
};
export const showStats = async (req, res) => {
    if (!req.user || !req.user.userId) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication required' });
    }

    console.log('User ID:', req.user.userId); // Debugging

    // Dummy stats for testing
    const defaultStats = {
        pending: 22,
        interview: 11,
        declined: 4,
    };

    const monthlyApplications = [
        { date: 'May 23', count: 12 },
        { date: 'Jun 23', count: 9 },
        { date: 'Jul 23', count: 3 },
    ];

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};