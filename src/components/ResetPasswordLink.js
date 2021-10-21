import React from 'react';
import { Link } from "react-router-dom";

function ResetPasswordLink({ resetLink, email }) {
    const returnLogin = () => {
        resetLink(false);
    }
    return (
        <>
            <div className="register-form">
                <div className="register-company">
                    Reset password link sent successfully to your Email ID
                </div>
                <p className="text-center mt-2 text-muted">
                    A link to reset your BookMyTrip account's password has been sent to your Email ID <b>{email}</b>
                </p>
                <p>
                    Please follow the steps mentioned there to reset the password.
                </p>
                <div className="mb-2">
                    <Link to='/login'><input type="button" onClick={returnLogin} value="Proceed To Login" className="btn register-btn mt-0" /></Link>
                </div>
                <small className="text-muted">
                    NOTE: In case you do not find the email in your inbox, please check your SPAM folder.
                </small>
            </div>
        </>
    )
}

export default ResetPasswordLink
