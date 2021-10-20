import React from "react";
import "./Navbar.css";
// import IconButton from "@mui/material/IconButton";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid navbar-container">
      <div className="nav-wrapper">
        <div className="brand">
          <Link to='/' style={{ textDecoration: 'none', color: '#ff934f' }}>
            <i className="fa fa-plane" aria-hidden="true"></i> Book
            <span className="brand-my">My</span>Trip
          </Link>
        </div>
        <Link to='/login' style={{ textDecoration: 'none', color: '#ff934f' }}>
          <div className="profile">
            {/* <span>
              <IconButton aria-label="login" size="large">
                <AccountCircleIcon fontSize="inherit" />
              </IconButton>
            </span> */}
            <span className="avatar">
              <Avatar
                src="/broken-image.jpg"
                sx={{ bgcolor: deepOrange["A200"], color: deepOrange[100] }}
              /></span>
            <span className="login-register">Login/Register</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
