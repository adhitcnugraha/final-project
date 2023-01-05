import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">
            <HomeIcon />
          </Button>
        </Typography>
        <Button color="inherit" size="large">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
