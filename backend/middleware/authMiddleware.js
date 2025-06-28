

import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
    try {
        let token;

        // Check for token in Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        ) {
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach user to request (without password)
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } else {
            res.status(401).json({ message: 'Not authorized, no token' });
        }
    } catch (error) {
        res.status(401).json({
            message: 'Not authorized, token failed',
            error: error.message,
        });
    }
};
