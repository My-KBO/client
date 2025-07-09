import axios from 'axios';
import { useUserStore } from '../store/store';


const api = axios.create({
  baseURL: 'http://3.107.172.216:3333/api/v1',
  withCredentials: true, // 쿠키 자동 포함 
});


// api.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem('accessToken') || useUserStore.getState().accessToken;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// respone interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료 && 재시도하지 않은 요청만 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          'http://3.107.172.216:3333/api/v1/auth/refresh',
          {},
          { withCredentials: true } // 쿠키 필요
        );

        const newAccessToken = refreshResponse.data.accessToken;

        useUserStore.getState().setAccessToken(newAccessToken);
        sessionStorage.setItem('accessToken', newAccessToken); // 새로고침해도 유지될수 있게 새 토큰으로 저장

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 재요청

      } catch (refreshError) {
        // 재발급 실패
        useUserStore.getState().setAccessToken(null);
        useUserStore.getState().setUser(null);
        sessionStorage.removeItem('accessToken'); // 삭제
        // window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
