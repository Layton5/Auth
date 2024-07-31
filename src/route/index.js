import { createBrowserRouter, useLocation } from "react-router-dom";
import { AuthLayout } from "../Layout/auth";
import { MainLayout } from "../Layout/main";
import { authRoutes } from "./auth";
import { PathConstants } from "./pathConstant";
import { Board } from "../components/Dashboard";
import Notification from "../components/Notification";
import Community from "../components/Community";
import Message from "../components/Message";

// import route icons
import {
  Dashboard,
  MessageOutlined,
  NotificationAddOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    element: <MainLayout />,
    mainRoute: true,
    children: [
      {
        name: PathConstants.Dashboard.name,
        path: PathConstants.Dashboard.path,
        element: <Board />,
        showInMenu: true,
        icon: <Dashboard />,
      },
      {
        name: PathConstants.Community.name,
        path: PathConstants.Community.path,
        element: <Community />,
        showInMenu: true,
        icon: <PeopleAltOutlined />,
      },
      {
        name: PathConstants.Notification.name,
        path: PathConstants.Notification.path,
        element: <Notification />,
        showInMenu: true,
        icon: <NotificationAddOutlined />,
      },
      {
        name: PathConstants.Message.name,
        path: PathConstants.Message.path,
        element: <Message />,
        showInMenu: true,
        icon: <MessageOutlined />,
      },
    ],
  },
]);
