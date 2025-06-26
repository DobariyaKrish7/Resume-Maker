import axios from 'axios';
import { BASE_URL } from './apiPath'; // ✅ Only one axios import

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    console.log(accessToken)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = '/';
      } else if (error.response.status === 500) {
        console.log('Internal Server Error');
      } else if (error.code === 'ECONNABORTED') {
        console.log('Timeout Error');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
