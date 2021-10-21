import React, { useEffect, useState } from 'react';
import './Register.css';
import Sidecontent from './Sidecontent';
import { Link } from "react-router-dom";
import EmailLinkExpires from './EmailLinkExpires';

function EmailVerified() {
    useEffect(() => {
        setVerified(false);
    }, [])
    const [verified, setVerified] = useState(false);
    return (
        <>
            <div className="container login-container">
                <div className="row register-row">
                    <div className="col-lg-8 text-center">
                        <div className="row register-row-container">
                            <div className="col-4 bg-register">
                                <Sidecontent />
                            </div>
                            <div className="col-md-8 register-form-container">
                                {
                                    verified ? <EmailLinkExpires /> : (
                                        <div className="register-form text-left p-3">
                                            <div className="register-company">
                                                Welcome Back to BookMyTrip!
                                            </div>
                                            <p className="mt-4">
                                                Congratulations! Your email has been successfully verified
                                            </p>
                                            {/* icon */}
                                            <p className="mt-3">Thanks for taking one more step towards a seamless experience on BookMyTrip</p>
                                            <p className='mt-3'>You are now a verified member of BookMyTrip family</p>
                                            <p className="mb-4">Go on and enjoy the world of travel!</p>
                                            <div>
                                                <Link to="/"><input type="button" value="Go To Homepage" className="btn login-btn" /></Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EmailVerified
