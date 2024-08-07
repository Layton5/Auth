import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { RequestButton } from "./userButton";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { getAllUser } from "../services/api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Users() {
  const [users, setUsers] = React.useState([]);

  const getAndSetUsers = async () => {
    const users = await getAllUser();
    console.log("users", users);
    setUsers(users.data.data);
  };

  React.useEffect(() => {
    getAndSetUsers();
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {users.map((user, i) => {
          return (
            <Grid item xs={4} key={user.id}>
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
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "grid" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {user.firstName} {user.lastName}
                        </Typography>
                        <RequestButton />
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Item>
            </Grid>
          );
        })}
        {/* <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        */}
      </Grid>
    </Box>
  );
}
