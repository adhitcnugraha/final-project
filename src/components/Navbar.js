import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "typeface-dm-sans";

const Navbar = () => {
  return (
    <Toolbar style={{ marginTop: 30 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        style={{ color: "#F9F9F9" }}
      >
        <Button color="inherit" style={{ marginRight: 40 }}>
          Kyunime
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: 28,
            backgroundColor: "#4B6274",
            marginLeft: 40,
            width: 140,
            height: 40,
            textTransform: "none",
            fontFamily: "DM Sans",
            fontSize: 18,
          }}
        >
          Anime
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: 28,
            backgroundColor: "#4B6274",
            marginLeft: 40,
            width: 140,
            height: 40,
            textTransform: "none",
            fontFamily: "DM Sans",
            fontSize: 18,
          }}
        >
          Manga
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: 28,
            backgroundColor: "#4B6274",
            marginLeft: 40,
            width: 140,
            height: 40,
            textTransform: "none",
            fontFamily: "DM Sans",
            fontSize: 18,
          }}
        >
          Review
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: 28,
            backgroundColor: "#4B6274",
            marginLeft: 40,
            width: 140,
            height: 40,
            textTransform: "none",
            fontFamily: "DM Sans",
            fontSize: 18,
          }}
        >
          Bookmark
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: 28,
            backgroundColor: "#4B6274",
            marginLeft: 40,
            width: 140,
            height: 40,
            textTransform: "none",
            fontFamily: "DM Sans",
            fontSize: 18,
          }}
        >
          Setting
        </Button>
      </Typography>
      <Button color="inherit" size="large" style={{ color: "#F9F9F9" }}>
        Login
      </Button>
    </Toolbar>
  );
};

export default Navbar;
