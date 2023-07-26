import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Person,
  Settings,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ drawerWidth, setmyMode }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            sx={{ ml: 1 }}
            aria-label="Mode Toggle"
            onClick={() => {
              localStorage.setItem(
                "Mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setmyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}{" "}
          </IconButton>
        </ListItem>
        <Divider sx={{ mt: "14px" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
