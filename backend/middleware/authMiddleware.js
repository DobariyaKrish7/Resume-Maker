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


// import User from '../models/userModel.js';
// import jwt from 'jsonwebtoken';

// export const protect = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'Not authorized, no token' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select('-password');
//     if (!user) return res.status(401).json({ message: 'Not authorized, user not found' });

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Not authorized, token failed', error: error.message });
//   }
// };