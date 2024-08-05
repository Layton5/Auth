import { Box, Card, CardContent, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PathConstants } from "../route/pathConstant";
import { useEffect } from "react";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate(PathConstants.Dashboard.path);
  }, [navigate]);

  return (
    <Box sx={{ backgroundColor: "#798c92", height: "100vh" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Card
            sx={{ maxWidth: 415, borderRadius: "1.25rem", py: 8, mx: "auto" }}
          >
            <CardContent>
              <Outlet />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
