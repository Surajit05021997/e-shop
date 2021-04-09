import axiosInstance from './axiosConfig';

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

function getAllGames() {
  return axiosInstance.get('/deals');
}

export default getAllGames;
