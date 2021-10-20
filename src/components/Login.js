import React from 'react'
import './Login.css';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LuggageIcon from '@mui/icons-material/Luggage';
import { useFormik } from 'formik';
function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.email) {
                errors.email = "Required"
            }
            if (!values.password) {
                errors.password = "Required"
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.email, values.password)
        }
    })
    return (
        <div className="container login-container">
            <div className="row login-row">
                <div className="col-lg-8 text-center">
                    <div className="row login-row-container">
                        <div className="col-4 bg-login">
                            <div className="row side-content mb-2">
                                <div>
                                    <VerifiedUserOutlinedIcon style={{ color: '#fff', fontSize: 40 }} />
                                </div>
                                <div className="login-side-content">Trusted by over 100 million Indians</div>
                            </div>
                            <div className="row side-content mb-2">
                                <CreditCardIcon style={{ color: '#fff', fontSize: 40 }} />
                                <div className="login-side-content">Fast & secure payments</div>
                            </div>
                            <div className="row side-content mb-2">
                                <MonetizationOnOutlinedIcon style={{ color: '#fff', fontSize: 40 }} />
                                <div className="login-side-content">Save on every booking</div>
                            </div>
                            <div className="row side-content">
                                <LuggageIcon style={{ color: '#fff', fontSize: 40 }} />
                                <div className="login-side-content">Manage trips, get fare alerts and predictions</div>
                            </div>
                        </div>
                        <div className="col-md-8 login-form-container">
                            <div className="login-form">
                                <p className="signup-text text-muted">
                                    Don't have an account? <span className="sign-up">SIGN UP</span>
                                </p>
                                <div className="login-company">
                                    Log in to BookMyTrip
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="col-12 email-form-container">
                                        <label className="text-muted label-text" htmlFor='email'>
                                            Mobile No. / Email
                                        </label>{
                                            formik.errors.email ? <span className="errors">{formik.errors.email}</span> : null
                                        }
                                        <input type="text" value={formik.values.email} onChange={formik.handleChange} className="email-form form-control" id="email" name="email" />
                                    </div>
                                    <div className="col-12 password-form-container">
                                        <label className="text-muted label-text" htmlFor='password'>
                                            Password
                                        </label>{
                                            formik.errors.password ? <span className="errors">{formik.errors.password}</span> : null
                                        }
                                        <input type="password" value={formik.values.password} onChange={formik.handleChange} className="password-form form-control" id="password" name="password" />
                                    </div>
                                    <div className="col-12 text-center mt-2">Forgot Password?</div>
                                    <div className="col-12">
                                        <input type="submit" value="LOGIN" className="btn login-btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
