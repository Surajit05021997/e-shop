import axios from 'axios';

const baseURL = 'https://www.cheapshark.com/api/1.0';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
