import React from "react";
import { AppBar, Avatar, Link, Toolbar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="static"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Link
          href="/"
          underline="none"
          color="white"
          sx={{
            flexGrow: 1,
            transition: "all 300ms",
            "&:hover": { fontSize: "20px" },
          }}
          fontWeight="700"
        >
          Home
        </Link>
        <Typography color="white" mr={2}>
          Ahmed Kamal
        </Typography>
        <Avatar variant="rounded" sx={{ bgcolor: green[400] }}>
          A
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
