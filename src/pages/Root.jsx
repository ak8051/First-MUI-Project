import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { green } from "@mui/material/colors";

const drawerWidth = 240;
// const Mode = localStorage.Mode;

const Root = () => {
  const [myMode, setmyMode] = useState(
    localStorage.getItem("Mode") === null
      ? "light"
      : localStorage.getItem("Mode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
      myColor: {
        main: green[500],
        dark: green[700],
        light: green[400],
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth} setmyMode={setmyMode} />
        <Box
          sx={{
            ml: `${drawerWidth}px`,
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
