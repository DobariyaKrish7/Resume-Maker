import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
        
    },
    thumbnailLink: {
        type: String
    },
    template: {
        theme: String,
        colorPalette: [String]
    },
    profileInfo: {
        profilePreviewUrl: String,
        fullname: String,
        designation: String,
        summary: String,
    },
    contactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        website: String
    },
    workexperience: [{
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
    }],
    education: [{
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date
    }],
    skills: [{
        name: String,
        progress: String
    }],
    projects: [{
        title: String,
        description: String,
        github: String,
        liveDemo: String

    }],
    certifications: [{
        title: String,
        issuer: String,
        year: String,

    }],
    languages: [{
        name: String,
        progress: Number
    }],
    interests: [String],

},
{
    timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}
});

export default mongoose.model('Resume', resumeSchema);
