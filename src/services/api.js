// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

export const register = async (firstName, lastName, email, password) => {
  return axios.post(`${API_URL}/register`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

//  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
//   "main": "index.js",
//   "devDependencies": {},
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/Layton5/Auth.git"
//   },
//   "author": "",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/Layton5/Auth/issues"
//   },
//   "homepage": "https://github.com/Layton5/Auth#readme"
