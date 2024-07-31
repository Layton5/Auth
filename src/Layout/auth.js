import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PathConstants } from "../route/pathConstant";
import { useEffect, useState } from "react";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate(PathConstants.Dashboard.path);
  }, []);

  return (
    <div style={{ backgroundColor: "#798c92" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <Card sx={{ maxWidth: 415, borderRadius: "1.25rem", py: 8 }}>
            <CardContent>
              <div>
                <Outlet />
              </div>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
