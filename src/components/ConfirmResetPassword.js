import React from 'react';
import { Link } from "react-router-dom";

function ConfirmResetPassword({ change }) {
    const handleresetpassword = () => {
        change(false);
    }
    return (
        <>
            <div className="register-form">
                <div className="register-company">
                    BookMyTrip Account's Password successfully Reset
                </div>
                {/* icon */}
                <p className="mt-2">Congratulations! Your BookMyTrip account's password has been reset successfully.</p>
                <p>Login to your BookMyTrip account & start booking</p>
                <div className="mb-2">
                    <Link to='/login'><input type="button" onClick={handleresetpassword} value="Proceed To Login" className="btn register-btn" /></Link>
                </div>
            </div>
        </>
    )
}

export default ConfirmResetPassword
