import React from "react";
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function Navbar() {
  return (
    <div className="container-fluid navbar-container">
      <div className="nav-wrapper">
        <div className="brand">
          <i className="fa fa-plane" aria-hidden="true"></i> Book
          <span className="brand-my">My</span>Trip
        </div>
        <div className="profile">
          {/* <span>
            <IconButton aria-label="login" size="large">
              <AccountCircleIcon fontSize="inherit" />
            </IconButton>
          </span> */}
          <Avatar
            src="/broken-image.jpg"
            className="avatar"
            sx={{ bgcolor: deepOrange["A200"],color:deepOrange[100] }}
          />
          <span className="login-register">Login/Register</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
