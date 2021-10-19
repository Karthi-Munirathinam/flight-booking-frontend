import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="container-fluid navbar-container">
            <div className="nav-wrapper">
                <div className="brand"><i className="fa fa-plane" aria-hidden="true"></i> Book<span className="brand-my">My</span>Trip</div>
                <div className="profile">
                    <span>Login/Register</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
