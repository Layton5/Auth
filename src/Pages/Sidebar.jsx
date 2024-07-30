import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
  Dashboard,
  MessageOutlined,
  NotificationAddOutlined,
  People,
} from "@mui/icons-material";

export const Sidebar = () => {
  const access = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/Dashboard",
    },
    {
      name: "Friends",
      icon: <People />,
      link: "/Community",
    },
    {
      name: "Messages",
      icon: <MessageOutlined />,
      link: "/Message",
    },
    {
      name: "Notifications",
      icon: <NotificationAddOutlined />,
      link: "/Notification",
    },
  ];
  return (
    <Box sx={{ maxWidth: 240, bgcolor: "background.paper", height: "100vh" }}>
      <List>
        <img src={Logo} alt="" />
        <Divider />
        {access.map((item, index) => (
          <NavLink to={item.link}>
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};
