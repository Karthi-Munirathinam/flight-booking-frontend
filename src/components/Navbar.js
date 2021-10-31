import React, { useEffect } from "react";
import "./Navbar.css";
// import IconButton from "@mui/material/IconButton";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Navbar({ signedIn, setSignedIn }) {
  const history = useHistory()
  const handlelogout = () => {
    let lout = window.confirm('Are you sure to Log out ?')
    if (lout) {
      window.localStorage.removeItem("app-token");
      setSignedIn(false)
      history.push('/')
    }
  }
  useEffect(() => {
    let token = window.localStorage.getItem("app-token");
    if (token) {
      setSignedIn(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="container-fluid navbar-container">
      <div className="nav-wrapper">
        <div className="brand">
          <Link to='/' style={{ textDecoration: 'none', color: '#ff934f' }}>
            <i className="fa fa-plane" aria-hidden="true"></i> Book
            <span className="brand-my">My</span>Trip
          </Link>
        </div>

        <div className="profile-container">
          <div className="profile">

            {
              signedIn ? (
                <div>
                  <Link to='/mybookings' style={{ textDecoration: 'none', color: '#ff934f' }}>
                    <span className="login-register">My Bookings</span>
                  </Link>
                  <button className="logout-btn" onClick={handlelogout}>
                    <span className="login-register">Logout</span>
                  </button>
                </div>
              ) : (<>
                <span className="avatar">
                  <Avatar
                    src="/broken-image.jpg"
                    sx={{ bgcolor: deepOrange["A200"], color: deepOrange[100] }}
                  />
                </span>
                <Link to='/login' style={{ textDecoration: 'none', color: '#ff934f' }}>
                  <span className="login-register">Login/Register</span>
                </Link>
              </>)
            }
          </div>

        </div>

      </div>
    </div>
  );
}

export default Navbar;
