import axios from "axios";
import { refreshToken } from "./auth";

const API_URL = "https://sugarytestapi.azurewebsites.net";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth?.Token) {
      config.headers.Authorization = `Bearer ${auth.Token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const auth = JSON.parse(localStorage.getItem("auth"));

      try {
        const newTokens = await refreshToken();

        localStorage.setItem("auth", JSON.stringify(newTokens));

        originalRequest.headers.Authorization = `Bearer ${newTokens.Token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("auth");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
