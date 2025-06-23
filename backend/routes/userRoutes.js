import express from 'express';
import { registerUser } from '../controllers/userController';

const userRoutes = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', protect, getUserProfile);

//protected routes


export default userRouter;
