import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getAxiosInstance = () => {
  const token = localStorage.getItem("token");
  console.log("Token retrieved from localStorage:", token);
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });
};

export const register = async (firstName, lastName, email, password) => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.post("/auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = async (email, password) => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.post("/auth/login", { email, password });
};

export const getMe = async () => {
  const axiosInstance = getAxiosInstance();
  return axiosInstance.get("/auth/me");
};
