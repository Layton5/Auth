import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      alert("User logged in successfully");
      navigate("/Community");
    } catch (error) {
      // alert("Error logging in user");
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <NavLink
            to="./Register"
            variant="body2"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 2,
              color: "black",
            }}
          >
            Don't have an account? Sign Up
          </NavLink>
        </Box>
      </Box>
    </Container>
  );
};
