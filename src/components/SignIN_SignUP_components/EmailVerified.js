import React, { useEffect, useState } from 'react';
import './Register.css';
import Sidecontent from './Sidecontent';
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';
import axios from '../Connection';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function EmailVerified() {
    const history = useHistory();
    let query = useQuery();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const checkQuery = async () => {
            try {
                // setIsLoading(true);
                let data = await axios.post('/verifyemail', {
                    tk: query.get("tk")
                })
                console.log(data.data)
                // setUserID(data.data.userid)
                if (data.data.token === "valid") {
                    setIsValid(true);
                }
                // setIsLoading(false);
            } catch (error) {
                // setIsLoading(false);
                console.log(error)
            }
        }
        checkQuery()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="container login-container">
                <div className="row register-row">
                    <div className="col-lg-8 text-center">
                        {
                            isValid ? (
                                <div className="row register-row-container">
                                    <div className="col-4 bg-register">
                                        <Sidecontent />
                                    </div>
                                    <div className="col-md-8 register-form-container">
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
                                    </div>
                                </div>
                            ) : (
                                <div className='error-container'>
                                    <h1 style={{ color: "#ff934f" }}>Error</h1>
                                    <p className='mt-4 text-muted'>Your request is invalid or expired.</p>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default EmailVerified
