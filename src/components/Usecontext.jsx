import React, { createContext, useState, useEffect } from "react";
import { getAllUser } from "../services/api";
import { getMe } from "../services/api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const getAndSetUsers = async () => {
    try {
      const response = await getAllUser();
      // console.log("users", response);
      setUsers(response.data.data);
    } catch (error) {
      // console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    getAndSetUsers();
  }, []);

  const getAndSetUser = async () => {
    const user = await getMe();
    // console.log("user", user);
    setUser(user.data.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getAndSetUser();
    }
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, getAndSetUsers, user, getAndSetUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
