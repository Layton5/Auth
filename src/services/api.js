// src/services/api.js
import axios from "axios";
const API_URL = "http://localhost:9000/api/v1";

const getAxiosInstance = () => {
  return axios.create({
    baseUrl: API_URL,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const register = async (firstName, lastName, email, password) => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.post(`${API_URL}/auth/register`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = async (email, password) => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.post(`${API_URL}/auth/login`, { email, password });
};

export const getMe = async () => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.get(`${API_URL}/auth/me`);
};
