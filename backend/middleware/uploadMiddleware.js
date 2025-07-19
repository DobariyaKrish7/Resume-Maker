import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

//file filter to allow only images

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed!'), false);
    }
}

const upload = multer({
    storage,fileFilter
})

export default upload;


// import multer from 'multer';
// import fs from 'fs';
// import path from 'path';

// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
//   if (allowed.includes(file.mimetype)) cb(null, true);
//   else cb(new Error('Only JPG/PNG images are allowed'), false);
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 },
// });

// export default upload;
