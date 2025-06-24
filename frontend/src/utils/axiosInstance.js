import axios from 'axios'
import { BASE_URL } from './apiPaths'
import axios from 'axios'

const axiosInsatnce = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

})

axiosInsatnce.interceptors.request.use(
    (config) => {
        // Add a token to the headers
        const accessToken = localStorage.getItem('token')
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }

)

// Add a response interceptor
axiosInsatnce.interceptors.response.use
(
    (response) =>
        {
            // If the response status code is 401, it means the token has expired
            return response
        }
        ,
        (error) =>
        {
            if(error.response)
            {
                if(error.response.status === 401)
                    {
                        window.location.href ='/'
                    }
                else if(error.response.status === 500)
                {
                    console.log('Internal Server Error')
                }
                else if(error.code === 'ECONNABORTED')
                {
                    console.log('Timeout Error')
                }
                return Promise.reject(error)

            }
        }
)

export default axiosInsatnce