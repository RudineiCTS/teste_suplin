import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/api/'
    //or
    //baseURL: import.meta.env.VITE_API_BASE_URL
})

export default axiosApi;
