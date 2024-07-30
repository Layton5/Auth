// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

export const register = async (firstName, lastName, email, password) => {
  return axios.post(`${API_URL}/auth/register`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};
