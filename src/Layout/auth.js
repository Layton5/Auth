import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
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
