import React from 'react';
import { Link } from 'react-router-dom';
import iGoogle from './assets/iconGoogle.svg';
import './Login.css';

const Login = ({ isRegister, onSubmit }) => {
    return (
        <div className="login-container">
            <h1>{isRegister ? 'Register' : 'Log In'}</h1>

            {/* Input para Name solo en el registro */}
            {isRegister && (
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="rounded-input"
                    />
                </div>
            )}

            <div className="input-group">
                <label htmlFor={isRegister ? "email-register" : "email-login"}>Email address</label>
                <input
                    type="email"
                    id={isRegister ? "email-register" : "email-login"}
                    placeholder="Enter your email"
                    className="rounded-input"
                />
            </div>

            <div className="input-group password-group">
                <div className="password-label-container">
                    <label htmlFor={isRegister ? "password-register" : "password-login"}>Password</label>
                    {!isRegister && (
                        <Link to="/password/reset" className="forgot-password-link">
                            forgot password?
                        </Link>
                    )}
                </div>
                <input
                    type="password"
                    id={isRegister ? "password-register" : "password-login"}
                    placeholder="Enter your password"
                    className="rounded-input"
                />
            </div>

            {/* Checkbox para Log In: "Remember me" */}
            {!isRegister && (
                <div className="checkbox-group">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            )}

            {/* Checkbox para Register: "I agree to the terms & policy" */}
            {isRegister && (
                <div className="checkbox-group">
                    <input type="checkbox" id="terms-policy" />
                    <label htmlFor="terms-policy">
                        I agree to the <Link to="/privacy" className="terms-link">terms & policy</Link>
                    </label>
                </div>
            )}

            {/* Cambiar Log In por Sign Up */}
            <button className="button login-n-register-btn" onClick={onSubmit}>
                {isRegister ? 'Sign Up' : 'Log In'}
            </button>

            <div className="or-divider">
                <hr />
                <span>Or</span>
                <hr />
            </div>

            <button className="button google-login-btn">
                <img src={iGoogle} alt="Google logo" className="google-icon" />
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;