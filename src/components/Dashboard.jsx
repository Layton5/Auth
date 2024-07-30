import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { FollowButton, AddButton } from "./userButton";
import { Stack } from "@mui/material";
import FadeMenu from "./userInput";
export const Board = () => {
  const user = "Bruce Oswald";
  const followers = 100;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Bruce Oswald" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={user}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {followers} followers
                <FadeMenu />
              </Typography>

              <Stack spacing={2} direction="row">
                <FollowButton />
                <AddButton />
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};
