import { createBrowserRouter, useLocation } from "react-router-dom";
import { AuthLayout } from "../Layout/auth";
import { MainLayout } from "../Layout/main";
import { authRoutes } from "./auth";
import { PathConstants } from "./pathConstant";
import { Board } from "../components/Dashboard";

import Friends from "../components/Friends";
import Users from "../components/Users";
import Followers from "../components/Followers";

// import route icons
import {
  Dashboard,
  FollowTheSigns,
  PeopleAltOutlined,
  VerifiedUserOutlined,
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
        name: PathConstants.Friends.name,
        path: PathConstants.Friends.path,
        element: <Friends />,
        showInMenu: true,
        icon: <PeopleAltOutlined />,
      },
      {
        name: PathConstants.Followers.name,
        path: PathConstants.Followers.path,
        element: <Followers />,
        showInMenu: true,
        icon: <FollowTheSigns />,
      },
      {
        name: PathConstants.Users.name,
        path: PathConstants.Users.path,
        element: <Users />,
        showInMenu: true,
        icon: <VerifiedUserOutlined />,
      },
    ],
  },
]);
