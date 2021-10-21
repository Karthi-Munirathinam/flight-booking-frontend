import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Register.css';
import Sidecontent from './Sidecontent';
import ConfirmResetPassword from './ConfirmResetPassword';

function ForgotPasswordReset() {
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 8) {
                errors.password = "Password must contain atleast 8 characters"
            }
            if (!values.confirmpassword) {
                errors.confirmpassword = "Required"
            } else if (values.confirmpassword !== values.password) {
                errors.confirmpassword = "Password doesn't match"
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.password);
            setResetPassword(true);
        }
    })
    const [resetPassword, setResetPassword] = useState(false);
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
                                resetPassword ? <ConfirmResetPassword change={setResetPassword} /> : (
                                    <div className="register-form p-3">
                                        <div className="register-company">
                                            Reset your BookMyTrip Password!
                                        </div>
                                        <p className="text-center text-muted mt-2 mb-4">Associated with Email ID <b>email</b></p>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="password-register-form-container mb-3">
                                                <label className="text-muted label-text" htmlFor='password'>
                                                    New Password
                                                </label>{
                                                    formik.errors.password ? <span className="errors">{formik.errors.password}</span> : null
                                                }
                                                <input type="password" value={formik.values.password} onChange={formik.handleChange} className="password-register-form form-control" id="password" name="password" />
                                            </div>
                                            <div className="confirm-password-form-container">
                                                <label className="text-muted label-text" htmlFor='confirmpassword'>
                                                    Re-enter new password
                                                </label>{
                                                    formik.errors.confirmpassword ? <span className="errors">{formik.errors.confirmpassword}</span> : null
                                                }
                                                <input type="password" value={formik.values.confirmpassword} onChange={formik.handleChange} className="confirmpassword-form form-control" id="confirmpassword" name="confirmpassword" />
                                            </div>
                                            <div className="mt-3">
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

export default ForgotPasswordReset
