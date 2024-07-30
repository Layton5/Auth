import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import defaultTheme from "./theme.config";
import { router } from "./route";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
