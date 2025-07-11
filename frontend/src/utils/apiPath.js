// export const BASE_URL ="http://localhost:3000/"

// //routes
// export const API_PATHS ={
//     AUTH :{
//         REGISTER:'/api/auth/register',
//         LOGIN:  'api/auth/login',
//         GET_PROFLIE: 'api/auth/profile',

//     },
//     RESUME:
//     {
//         CREATE: '/api/resume',
//         GET_ALL: '/api/resume',
//         GET_BY_ID: (id) => `/api/resume/${id}`,

//         UPDATE:  (id) => `/api/resume/${id}`,
//         DELETE:  (id) => `/api/resume/${id}`,

//         UPLOAD_IMAGES:  (id) => `/api/resume/${id}/upload-images`,


//     },
//     image: {
//         UPLOAD_IMAGE: '/api/auth/upload-image',
//     }
// }

// src/utils/apiPath.js

export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    GET_PROFILE: "/auth/profile",
  },
  RESUME: {
    CREATE: "/resume",
    GET_ALL: "/resume",
    GET_BY_ID: (id) => `/resume/${id}`,
    UPDATE: (id) => `/resume/${id}`,
    DELETE: (id) => `/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/resume/${id}/upload-images`,
  },
  IMAGE: {
    UPLOAD_IMAGE: "/auth/upload-image",
  },
};
