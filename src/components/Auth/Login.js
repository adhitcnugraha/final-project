import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import "typeface-dm-sans";
import { Link } from "react-router-dom";
// import logo from "../../assets/logologin.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const state = null;
  return (
    <div className="registerPage">
      {/* <img
        src={logo}
        alt="Logo"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "fixed",
        }}
      /> */}
      <div style={{ position: "absolute", right: "75vh", top: "12vh" }}>
        {/* Description */}
        <h1 style={{ color: "white", fontFamily: "DM Sans", opacity: 0.9 }}>
          Konnichiwa~!
        </h1>
        <h1 style={{ color: "white", fontFamily: "DM Sans", opacity: 0.9 }}>
          <strong style={{ color: "black", opacity: 0.9 }}>Log in </strong>
          with your email please
        </h1>

        {/* Email */}
        <Grid container style={{ position: "flex", flexDirection: "column" }}>
          <FormControl
            sx={{ m: 1, width: "65vh", marginTop: "10vh" }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-email"
              style={{ color: "white", fontFamily: "DM Sans" }}
            >
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              endAdornment={
                <InputAdornment position="end" style={{ color: "white" }}>
                  <AlternateEmailIcon style={{ color: "white" }} />
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>

          {/* Password */}
          <FormControl
            sx={{ m: 1, width: "65vh", marginTop: "2vh" }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white", fontFamily: "DM Sans" }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {/* Button */}
          <Button
            variant="contained"
            style={{
              color: "white",
              marginTop: "4vh",
              fontSize: 20,
              fontFamily: "DM Sans",
              borderRadius: 14,
              background: "#275BC3",
              textTransform: "none",
            }}
          >
            Login
          </Button>

          {/* Sign up */}
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "DM Sans",
              fontSize: 20,
              textAlign: "center",
              marginTop: "5vh",
            }}
          >
            Didn't have account yet?
            <Button
              style={{
                color: "black",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                paddingLeft: "3vh",
                textTransform: "none",
                fontSize: 20,
              }}
              component={Link}
              to="/register"
            >
              Sign Up
            </Button>
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
