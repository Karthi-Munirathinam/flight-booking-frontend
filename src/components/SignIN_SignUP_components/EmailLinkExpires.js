import React from 'react';
import { Link } from "react-router-dom";

function EmailLinkExpires() {
    return (
        <>
            <div>
                <h1>Error</h1>
                <p className='mt-4'>Your request is invalid or expired. Please ask for <Link to="/forgotpassword" style={{textDecoration:'none'}}>password reset again</Link>.</p>
            </div>
        </>
    )
}

export default EmailLinkExpires
