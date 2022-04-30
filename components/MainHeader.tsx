import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const MainHeader = (props: { toggleMenuOpen: () => void }) =>
{
  const { toggleMenuOpen } = props;
  // @dev DELETE WHEN TOGGLE-HIDE LOGIC IS IMPLEMENTED FROM HERE
  const [ mobileOpen, setMobileOpen ] = useState(false);
  // TO HERE
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton
          color="secondary"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMenuOpen}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
