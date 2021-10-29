import React from 'react';
import { Link } from "react-router-dom";

function AskForEmailVerification({ handleEmail, mail, resendVerification }) {
    const handleEmailVerification = () => {
        handleEmail(false);
    }
    return (
        <>
            <div className="register-form p-3">
                <div className="register-company">
                    Welcome to BookMyTrip!
                </div>
                <p className="text-center mt-2 text-muted">
                    Congratulations! your account has been successfully created
                </p>
                <p className="temp-content">
                    We now need you to verify your Email ID <b style={{ fontSize: "1rem" }}>{mail}</b>
                </p>
                <p className="temp-content">Please check your inbox & click on the link to verify your Email ID</p>
                <p className="text-muted temp-content">
                    Do check the spam folder in case you don't find the Email in your regular Inbox
                </p>
                <p className="text-muted temp-content">
                    If you still don't find the Email from us, please click this link to <span style={{ cursor: "pointer" }} onClick={() => resendVerification()}><b>Resend Verification Link</b></span>
                </p>
                <div>
                    <Link to="/"><input type="button" value="Go To Homepage" onClick={handleEmailVerification} className="btn login-btn" /></Link>
                </div>
            </div>
        </>
    )
}

export default AskForEmailVerification
