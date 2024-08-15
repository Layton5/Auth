import React, { useContext } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FadeMenu from "../components/userInput";
import { UsersContext } from "../components/Usecontext";
import { Sidebar } from "../Pages/Sidebar";

const drawerWidth = 260;

const appBarStyles = {
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
  boxShadow: "none",
  color: "neutral.black_1",
  borderBottom: "1px solid #E9E9E9",
};

const toolbarStyles = {
  backgroundColor: "primary.white",
};

export const Appbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useContext(UsersContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Sidebar />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" component="nav" sx={appBarStyles}>
        <Toolbar sx={toolbarStyles}>
          <IconButton
            color="neutral.black_3"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user ? `Welcome ${user.firstName} ${user.lastName}` : ""}
          </Typography>
          <Box display="flex" sx={{ justifyItems: "center" }}>
            <Tooltip title="Profile">
              <IconButton sx={{ p: 0, ml: 4 }}>
                {user && <FadeMenu userName={user.firstName} />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </Box>
    </Box>
  );
};
