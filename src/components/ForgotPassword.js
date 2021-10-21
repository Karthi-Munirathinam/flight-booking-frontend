import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import './Register.css';
import Sidecontent from './Sidecontent';
import ResetPasswordLink from './ResetPasswordLink';

function ForgotPassword() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.email) {
                errors.email = "Required"
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.email);
            setForgotPasswordLink(true);
        }
    })
    const [forgotPasswordLink, setForgotPasswordLink] = useState(false);
    return (
        <div className="container login-container">
            <div className="row register-row">
                <div className="col-lg-8 text-center">
                    <div className="row register-row-container">
                        <div className="col-4 bg-register">
                            <Sidecontent />
                        </div>
                        <div className="col-md-8 register-form-container">
                            {
                                forgotPasswordLink ? <ResetPasswordLink resetLink={setForgotPasswordLink} email={formik.values.email} /> : (
                                    <div className="register-form">
                                        <p className="signup-text text-muted">
                                            Remember your password? <Link to="/login" style={{ textDecoration: 'none' }}><span className="sign-up">SIGN IN</span></Link>
                                        </p>
                                        <div className="register-company">
                                            Forgot your BookMyTrip Password !
                                        </div>
                                        <p className="text-center mt-2">Simply enter your <b>Email ID</b> here & we'll send you a link to reset the password</p>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="col-12 email-register-form-container">
                                                <label className="text-muted label-text" htmlFor='email'>
                                                    Email
                                                </label>{
                                                    formik.errors.email ? <span className="errors">{formik.errors.email}</span> : null
                                                }
                                                <input type="email" value={formik.values.email} onChange={formik.handleChange} className="email-register-form form-control" id="email" name="email" />
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" value="CONTINUE" className="btn register-btn" />
                                            </div>
                                        </form>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword
