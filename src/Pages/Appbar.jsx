import { AppBar, IconButton, Toolbar } from "@mui/material";
import * as React from "react";
import { Avatar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeMenu from "../components/userInput";

const drawerWidth = 240;
export const Appbar = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const userName = () => {
    return props?.user?.firstName && props?.user?.lastName
      ? props.user.firstName + " " + props.user.lastName
      : null;
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          color: "newtral.black_1",
          borderBottom: "1px solid #E9E9E9",
        }}
      >
        <Toolbar sx={{ backgroundColor: "primary.white" }}>
          <IconButton
            color="neutral.black_3"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            flexWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {userName() && <>Welcome {userName()}</>}
          </Typography>
          <Box display="flex" sx={{ justifyItems: "center" }}>
            <Tooltip title="Profile">
              <IconButton sx={{ p: 0, ml: 4 }}>
                <Avatar alt={userName()}>
                  <FadeMenu userName={userName()} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
