
import Resume from '../models/resumeModel.js';
import path from 'path';
import fs from 'fs';

// export const createResume = async (req, res) => {
//     try {
//         const {title} = req.body;
//         // Default template
//         const defaultResumeData = {
//             profileInfo: {
//                 profileImg: null,
//                 previewUrl: '',
//                 fullName: '',
//                 designation: '',
//                 summary: '',
//             },
//             contactInfo: {
//                 email: '',
//                 phone: '',
//                 location: '',
//                 linkedin: '',
//                 github: '',
//                 website: '',
//             },
//             workExperience: [
//                 {
//                     company: '',
//                     role: '',
//                     startDate: '',
//                     endDate: '',
//                     description: '',
//                 },
//             ],
//             education: [
//                 {
//                     degree: '',
//                     institution: '',
//                     startDate: '',
//                     endDate: '',
//                 },
//             ],
//             skills: [
//                 {
//                     name: '',
//                     progress: 0,
//                 },
//             ],
//             projects: [
//                 {
//                     title: '',
//                     description: '',
//                     github: '',
//                     liveDemo: '',
//                 },
//             ],
//             certifications: [
//                 {
//                     title: '',
//                     issuer: '',
//                     year: '',
//                 },
//             ],
//             languages: [
//                 {
//                     name: '',
//                     progress: '',
//                 },
//             ],
//             interests: [''],
//         };

//         const newResume = await Resume.create({
//             userId: req.user._id,
//             title,
//             ...defaultResumeData
//             ...req.body
//         });

//         res.status(201).json(newResume);

//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create resume',error: error.message });
//     }
// }

export const createResume = async (req, res) => {
    try {
        const { title } = req.body;

        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
            ...req.body // this overrides defaults if present in req.body
        });

        res.status(201).json(newResume);

    } catch (error) {
        res.status(500).json({ message: 'Failed to create resume', error: error.message });
    }
}


// get4resumes

export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user._id }).sort({ updatedAt: -1 });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch resumes', error: error.message });
    }
}

// getResumeById

export const getResumeById = async (req, res) => {
    try {
        
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });
        
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch resume', error: error.message });
    }
}

// updateResume

export const updateResume = async (req, res) => {
    try {
        

        const resume = await Resume.findOneAndUpdate(
            { _id: req.params.id, 
              userId: req.user._id },
            
        );

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found or not authorise' });
        }

        //merge the existing resume data with the new data
        Object.assign(resume, req.body);

        // Save the updated resume
        const updatedResume = await resume.save();
        res.json(updatedResume);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update resume', error: error.message });
    }
}

// deleteResume

export const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found or not authorise' });
        }
        //
        const uploadesFolder = path.join(process.cwd(), 'uploads');

        if(resume.thumbnailLink) {
            const oldThumbnail = path.join(uploadesFolder, path.basename(resume.thumbnailLink));
            if (fs.existsSync(oldThumbnail)) {
                fs.unlinkSync(oldThumbnail);
            }
        }
        if(resume.profileInfo?.previewUrl)  {
            const oldProfile = path.join(uploadesFolder, path.basename(resume.profileInfo.previewUrl));
            if (fs.existsSync(oldProfile)) {
                fs.unlinkSync(oldProfile);
            }
        }
        // Delete the resume

        const deleted = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

        if (!deleted) {
            return res.status(404).json({ message: 'Resume not found or not authorise' });
        }

        res.json({ message: 'Resume deleted successfully' });

    } 
    catch (error) 
    {
        res.status(500).json({ message: 'Failed to delete resume', error: error.message });
    }
}