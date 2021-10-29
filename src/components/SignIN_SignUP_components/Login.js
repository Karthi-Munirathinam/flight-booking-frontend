import React, { useEffect } from 'react'
import './Login.css';
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import Sidecontent from './Sidecontent';
import axios from '../Connection';
import { useHistory } from 'react-router-dom';
function Login() {
    const history = useHistory();
    useEffect(() => {
        let token = window.localStorage.getItem("app-token");
        if (token) {
            history.push('/')
        }
    }, [])
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
            const login = async () => {
                try {
                    // setIsLoading(true);
                    console.log(values.email, values.password)
                    let token = await axios.post('/login', {
                        email: values.email,
                        password: values.password
                    });
                    window.localStorage.setItem("app-token", token.data.token);
                    // setIsLoading(false);
                    history.push('/')
                } catch (error) {
                    // setIsLoading(false);
                    console.log(error)
                }
            }
            login()
        }
    })
    return (
        <div className="container login-container">
            <div className="row login-row">
                <div className="col-lg-8 text-center">
                    <div className="row login-row-container">
                        <div className="col-4 bg-login">
                            <Sidecontent />
                        </div>
                        <div className="col-md-8 login-form-container">
                            <div className="login-form">
                                <p className="signup-text text-muted">
                                    Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}><span className="sign-up">SIGN UP</span></Link>
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
                                    <Link to='/forgotpassword' style={{ textDecoration: 'none' }}><div className="col-12 text-center mt-2">Forgot Password?</div></Link>
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
