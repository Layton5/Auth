import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
  Dashboard,
  LogoutOutlined,
  VerifiedUserOutlined,
  People,
  FollowTheSigns,
} from "@mui/icons-material";

export const Sidebar = () => {
  const access = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/Dashboard",
    },
    {
      name: "Users",
      icon: <VerifiedUserOutlined />,
      link: "/Users",
    },
    {
      name: "Friends",
      icon: <People />,
      link: "/Friends",
    },
    {
      name: "Followers",
      icon: <FollowTheSigns />,
      link: "/Followers",
    },
  ];
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Box sx={{ maxWidth: 240, bgcolor: "background.paper", height: "100vh" }}>
      <List>
        <img src={Logo} alt="" />
        <Divider />
        {access.map((item, index) => (
          <NavLink
            to={item.link}
            style={{ textDecoration: "none", textDecorationColor: "none" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={signOut}>
            <ListItemIcon>
              <LogoutOutlined />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
