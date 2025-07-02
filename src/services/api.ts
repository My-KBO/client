import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const api = axios.create({
  baseURL: 'http://3.107.172.216:3456/api/v1',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      const res = await axios.post(
        'http://3.107.172.216:3456/api/v1/auth/refresh',
        {},
        { withCredentials: true },
      );
      const newToken = res.data.accessToken;
      useAuthStore.getState().setAccessToken(newToken);
      error.config.headers.Authorization = `Bearer ${newToken}`;
      return api(error.config);
    }
    return Promise.reject(error);
  },
);

export default api;
