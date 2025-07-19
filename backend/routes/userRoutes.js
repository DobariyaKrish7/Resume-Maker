

// //done by dks

import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', protect, getUserProfile);

export default userRouter;


// import express from 'express';
// import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
// import { protect } from '../middleware/authMiddleware.js';
// import { registerValidationRules, loginValidationRules } from '../middleware/userValidator.js';
// import { validateRequest } from '../middleware/validateMiddleware.js';

// const userRouter = express.Router();

// userRouter.post('/register', registerValidationRules, validateRequest, registerUser);
// userRouter.post('/login', loginValidationRules, validateRequest, loginUser);
// userRouter.get('/profile', protect, getUserProfile);

// export default userRouter;