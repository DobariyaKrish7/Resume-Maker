import fs from 'fs';
import path from 'path';
import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';

export const uploadResumeImages = async (req, res) => {
    try {
        // Wrap multer in a promise to use await
        await new Promise((resolve, reject) => {
            upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(req, res, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        const resumeId = req.params.id;

        const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found or not authorised' });
        }

        const uploadsFolder = path.join(process.cwd(), 'uploads');
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        const newThumbnail = req.files.thumbnail?.[0];
        const newProfileImage = req.files.profileImage?.[0];

        if (newThumbnail) {
            if (resume.thumbnailLink) {
                const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
                if (fs.existsSync(oldThumbnail)) {
                    fs.unlinkSync(oldThumbnail);
                }
            }
            resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
        }

        if (newProfileImage) {
            if (resume.profileInfo?.profilePreviewUrl) {
                const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
                if (fs.existsSync(oldProfile)) {
                    fs.unlinkSync(oldProfile);
                }
            }
            resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
        }

        await resume.save();

        res.status(200).json({
            message: "Image added successfully",
            thumbnailLink: resume.thumbnailLink,
            profilePreviewUrl: resume.profileInfo?.profilePreviewUrl || null
        });

    } catch (err) {
        console.error('Error in uploading image:', err);
        res.status(500).json({
            message: "Failed to upload image",
            error: err.message
        });
    }
}


// import fs from 'fs';
// import path from 'path';
// import Resume from '../models/resumeModel.js';
// import upload from '../middleware/uploadMiddleware.js';

// export const uploadResumeImages = async (req, res) => {
//   try {
//     await new Promise((resolve, reject) => {
//       upload.fields([
//         { name: 'thumbnail', maxCount: 1 },
//         { name: 'profileImage', maxCount: 1 },
//       ])(req, res, (err) => {
//         if (err) reject(err);
//         else resolve();
//       });
//     });

//     const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });
//     if (!resume) return res.status(404).json({ message: 'Resume not found or unauthorized' });

//     const uploadsFolder = path.join(process.cwd(), 'uploads');
//     const baseUrl = `${req.protocol}://${req.get('host')}`;

//     const newThumbnail = req.files.thumbnail?.[0];
//     const newProfileImage = req.files.profileImage?.[0];

//     if (newThumbnail && resume.thumbnailLink) {
//       const oldPath = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
//       if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
//       resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
//     }

//     if (newProfileImage && resume.profileInfo?.profilePreviewUrl) {
//       const oldPath = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
//       if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
//       resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
//     }

//     await resume.save();
//     res.status(200).json({
//       message: 'Image added successfully',
//       thumbnailLink: resume.thumbnailLink,
//       profilePreviewUrl: resume.profileInfo.profilePreviewUrl || null,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to upload image', error: err.message });
//   }
// };