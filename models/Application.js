import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Job' },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    companyName: { type: String, required: true },
});


export default mongoose.model('Application', ApplicationSchema);
