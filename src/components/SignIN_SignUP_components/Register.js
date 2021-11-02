import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import './Register.css';
import Sidecontent from './Sidecontent';
import AskForEmailVerification from './AskForEmailVerification';
import axios from '../Connection';
import Loading from '../Loading';

function Register() {
    const [userExists, setuserExists] = useState(false);
    const [activated, setActivated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const resendVerification = async () => {
        try {
            setIsLoading(true)
            let verify = await axios.post('/verifyaccount', {
                email: formik.values.email.toLowerCase()
            })
            setIsLoading(false);
            if (verify.data.userexists) {
                setActivated(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmpassword: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.firstname) {
                errors.firstname = "Required"
            } else if (!values.firstname.length > 2) {
                errors.firstname = "Firstname must contain atleast 3 characters"
            }
            if (!values.lastname) {
                errors.lastname = "Required"
            }
            if (!values.email) {
                errors.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.phone) {
                errors.phone = "Required"
            } else if (!/^[0-9]{10}$/.test(values.phone)) {
                errors.phone = "Enter valid phone no."
            }
            if (!values.password) {
                errors.password = "Required"
            }
            if (!values.confirmpassword) {
                errors.confirmpassword = "Required"
            }
            if (values.password !== values.confirmpassword) {
                errors.confirmpassword = "Password doesn't match"
            }
            return errors;
        },
        onSubmit: (values) => {
            const postData = async () => {
                try {
                    setIsLoading(true)
                    let user = await axios.post('/register', {
                        firstName: values.firstname,
                        lastName: values.lastname,
                        email: values.email.toLowerCase(),
                        phone: values.phone,
                        password: values.password
                    });
                    setIsLoading(false);
                    if (user.data.userexists && user.data.useractivated) {
                        setuserExists(true);
                        setActivated(true);
                    } else if (user.data.userexists && !user.data.useractivated) {
                        setuserExists(true);
                        setActivated(false);
                    } else {
                        setAskForEmailVerification(true);
                    }
                } catch (error) {
                    setIsLoading(false)
                    console.log(error)
                }
            }
            postData();
        }
    });
    const [askForEmailVerification, setAskForEmailVerification] = useState(false);
    return (
        <>{
            isLoading ? <Loading /> : (
                <div className="container register-container">
                    <div className="row register-row">
                        <div className="col-lg-8 text-center">
                            <div className="row register-row-container">
                                <div className="col-4 bg-register">
                                    <Sidecontent />
                                </div>
                                <div className="col-md-8 register-form-container">{
                                    askForEmailVerification ? <AskForEmailVerification resendVerification={resendVerification} handleEmail={setAskForEmailVerification} mail={formik.values.email} /> : (
                                        <div className="register-form">
                                            <p className="signup-text text-muted">
                                                Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}><span className="sign-up">SIGN IN</span></Link>
                                            </p>
                                            <div className="register-company">
                                                Register to BookMyTrip
                                            </div>
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="col-12 firstname-form-container">
                                                    <label className="text-muted label-text" htmlFor='firstname'>
                                                        First Name
                                                    </label>{
                                                        formik.errors.firstname ? <span className="errors">{formik.errors.firstname}</span> : null
                                                    }
                                                    <input type="text" value={formik.values.firstname} onChange={formik.handleChange} className="firstname-form form-control" id="firstname" name="firstname" />
                                                </div>
                                                <div className="col-12 lastname-form-container">
                                                    <label className="text-muted label-text" htmlFor='lastname'>
                                                        Last Name
                                                    </label>{
                                                        formik.errors.lastname ? <span className="errors">{formik.errors.lastname}</span> : null
                                                    }
                                                    <input type="text" value={formik.values.lastname} onChange={formik.handleChange} className="lastname-form form-control" id="lastname" name="lastname" />
                                                </div>
                                                <div className="col-12 email-register-form-container">
                                                    <label className="text-muted label-text" htmlFor='email'>
                                                        Email
                                                    </label>{
                                                        formik.errors.email ? <span className="errors">{formik.errors.email}</span> : null
                                                    }
                                                    <input type="email" value={formik.values.email} onChange={formik.handleChange} className="email-register-form form-control" id="email" name="email" />
                                                </div>
                                                <div className="col-12 phone-form-container">
                                                    <label className="text-muted label-text" htmlFor='phone'>
                                                        Phone
                                                    </label>{
                                                        formik.errors.phone ? <span className="errors">{formik.errors.phone}</span> : null
                                                    }
                                                    <input type="phone" value={formik.values.phone} onChange={formik.handleChange} className="phone-form form-control" id="phone" name="phone" />
                                                </div>
                                                <div className="col-12 password-register-form-container">
                                                    <label className="text-muted label-text" htmlFor='password'>
                                                        Password
                                                    </label>{
                                                        formik.errors.password ? <span className="errors">{formik.errors.password}</span> : null
                                                    }
                                                    <input type="password" value={formik.values.password} onChange={formik.handleChange} className="password-register-form form-control" id="password" name="password" />
                                                </div>
                                                <div className="col-12 confirm-password-form-container">
                                                    <label className="text-muted label-text" htmlFor='confirmpassword'>
                                                        Confirm password
                                                    </label>{
                                                        formik.errors.confirmpassword ? <span className="errors">{formik.errors.confirmpassword}</span> : null
                                                    }
                                                    <input type="password" value={formik.values.confirmpassword} onChange={formik.handleChange} className="confirmpassword-form form-control" id="confirmpassword" name="confirmpassword" />
                                                </div>
                                                {userExists ? (<div className="col-12 text-center mt-2">{
                                                    activated ? (
                                                        <span className="errors">User Already Exists try <Link to='/login'>SIGN IN</Link></span>
                                                    ) : (
                                                        <span className="errors">Email already registered! Check your mail for activation link or <span className="btn" style={{ color: "red" }} onClick={resendVerification}>Resend activation link</span></span>
                                                    )
                                                }
                                                </div>) : null}
                                                <div className="col-12">
                                                    <input type="submit" value="REGISTER" className="btn register-btn" />
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
        </>

    )
}

export default Register
