import React from "react";
import { Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "typeface-dm-sans";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = null;

  // const history = useHistory();

  // function handleClick() {
  //   history.replace("/login");
  // }

  return (
    <Toolbar style={{ marginTop: 30, marginBottom: 30 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        style={{ color: "#F9F9F9" }}
      >
        <Typography
          color="inherit"
          component={Link}
          to="/"
          style={{
            width: 175,
            height: 68,
            fontSize: 18,
            fontFamily: "DM Sans",
            textColor: "linear-gradient(to right, #f9f9f9 0%, #fcb9e2 100%",
          }}
        >
          <strong>Kyunime</strong>
        </Typography>
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
          Bookmark
        </Button>
      </Typography>

      {user ? (
        <div>
          <Avatar src={user.result.imageUrl}>
            {user.result.name.charAt(0)}
          </Avatar>
          <Button color="inherit" size="large" style={{ color: "#F9F9F9" }}>
            Logout
          </Button>
        </div>
      ) : (
        <Button
          color="inherit"
          size="large"
          style={{ color: "#F9F9F9" }}
          component={Link}
          to="/login"
        >
          Login
        </Button>
      )}
    </Toolbar>
  );
};

export default Navbar;
