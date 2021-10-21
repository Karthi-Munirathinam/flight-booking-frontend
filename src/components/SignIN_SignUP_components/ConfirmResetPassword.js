import React from 'react';
import { Link } from "react-router-dom";

function ConfirmResetPassword({ change }) {
    const handleresetpassword = () => {
        change(false);
    }
    return (
        <>
            <div className="register-form p-3">
                <div className="register-company">
                    BookMyTrip Account's Password successfully Reset
                </div>
                {/* icon */}
                <p className="mt-4">Congratulations! Your BookMyTrip account's password has been reset successfully.</p>
                <p className='mt-3'>Login to your BookMyTrip account & start booking</p>
                <div className="mt-3">
                    <Link to='/login'><input type="button" onClick={handleresetpassword} value="Proceed To Login" className="btn register-btn" /></Link>
                </div>
            </div>
        </>
    )
}

export default ConfirmResetPassword
