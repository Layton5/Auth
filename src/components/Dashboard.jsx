import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const Board = (props) => {
  const userName = () => {
    return props?.user?.firstName && props?.user?.lastName
      ? `${props.user.firstName} ${props.user.lastName}`
      : null;
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Bruce Oswald" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={userName() ? `Welcome ${userName()}` : ""}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
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
    </List>
  );
};
