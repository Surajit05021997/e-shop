import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
