import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import "typeface-dm-sans";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const state = null;
  return (
    <div className="loginPage">
      <div style={{ position: "absolute", right: "35vh", top: "8vh" }}>
        {/* Description */}
        <h1
          style={{ textColor: "#60555", fontFamily: "DM Sans", opacity: 0.9 }}
        >
          Konnichiwa~!
        </h1>
        <h1
          style={{ textColor: "#60555", fontFamily: "DM Sans", opacity: 0.9 }}
        >
          <strong style={{ color: "#FFFFFF", opacity: 0.9 }}>Log in </strong>
          with your email please
        </h1>

        {/* Email */}
        <Grid container style={{ position: "flex", flexDirection: "column" }}>
          <FormControl
            sx={{ m: 1, width: "65vh", marginTop: "10vh" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <AlternateEmailIcon />
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
            <InputLabel htmlFor="outlined-adornment-password">
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
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
