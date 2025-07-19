import express from 'express';
import { protect } from '../middleware/authMiddleware.js'
import { createResume, deleteResume, getResumeById, getUserResumes, updateResume } from '../controllers/resumeController.js'
import { uploadResumeImages } from '../controllers/uploadImages.js'


const resumeRouter = express.Router()

resumeRouter.post('/',protect,createResume)
resumeRouter.get('/',protect,getUserResumes)
resumeRouter.get('/:id',protect,getResumeById)

resumeRouter.put('/:id',protect,updateResume)
resumeRouter.put('/:id/upload-images',protect,uploadResumeImages)

resumeRouter.delete('/:id',protect,deleteResume)

export default resumeRouter


// import express from 'express';
// import {
//   createResume,
//   deleteResume,
//   getResumeById,
//   getUserResumes,
//   updateResume
// } from '../controllers/resumeController.js';
// import { uploadResumeImages } from '../controllers/uploadImages.js';
// import { protect } from '../middleware/authMiddleware.js';
// import { resumeValidationRules } from '../middleware/resumeValidator.js';
// import { validateRequest } from '../middleware/validateMiddleware.js';

// const resumeRouter = express.Router();

// resumeRouter.post('/', protect, resumeValidationRules, validateRequest, createResume);
// resumeRouter.get('/', protect, getUserResumes);
// resumeRouter.get('/:id', protect, getResumeById);
// resumeRouter.put('/:id', protect, resumeValidationRules, validateRequest, updateResume);
// resumeRouter.put('/:id/upload-images', protect, uploadResumeImages);
// resumeRouter.delete('/:id', protect, deleteResume);

// export default resumeRouter;