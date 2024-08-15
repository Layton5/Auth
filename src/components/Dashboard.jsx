import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { UsersContext } from "./Usecontext";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Board = () => {
  const { user } = useContext(UsersContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={user.firstName}
                  src="/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  user ? `  ${user.firstName} ${user.lastName}` : "Unknown"
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "grid" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Followers
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
