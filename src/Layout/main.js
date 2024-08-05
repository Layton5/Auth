import { Outlet } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Sidebar } from "../Pages/Sidebar";
import { Appbar } from "../Pages/Appbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMe } from "../services/api";
const drawerWidth = 240;

export const MainLayout = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [user, setUser] = useState({});

  const getAndSetUser = async () => {
    const user = await getMe();
    console.log("user", user);
    setUser(user.data.data);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
    if (token) {
      getAndSetUser();
    }
  }, [navigate]);

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
    isClosing(true);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Sidebar />
      </Toolbar>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar user={user} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

MainLayout.propTypes = {
  window: PropTypes.func,
};
