import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import iGoogle from './assets/iconGoogle.svg';
import './Login.css';

const Login = ({ isRegister, onSubmit, onChangeName, onChangeEmail, onChangePassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Redirigir al home después del login
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
        }
    };

    // Función para el login con Google
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Comprobar si el usuario ya existe en Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (!userDoc.exists()) {
                // Guardar el usuario en Firestore si no existe
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    role: 'User', // Asignar rol por defecto
                });
                console.log("Usuario guardado en Firestore:", user);
            } else {
                console.log("El usuario ya existe en Firestore:", user);
            }

            navigate('/'); // Redirigir al home después del login con Google
        } catch (err) {
            setError('Failed to log in with Google. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1>{isRegister ? 'Register' : 'Log In'}</h1>

            {isRegister && (
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="rounded-input"
                        onChange={onChangeName}
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
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        onChangeEmail && onChangeEmail(e);
                    }}
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
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        onChangePassword && onChangePassword(e);
                    }}
                />
            </div>

            {error && <p className="error-message">{error}</p>}

            {!isRegister && (
                <div className="checkbox-group">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            )}

            {isRegister && (
                <div className="checkbox-group">
                    <input type="checkbox" id="terms-policy" />
                    <label htmlFor="terms-policy">
                        I agree to the <Link to="/privacy" className="terms-link">terms & policy</Link>
                    </label>
                </div>
            )}

            <button className="button login-n-register-btn" onClick={isRegister ? onSubmit : handleLogin}>
                {isRegister ? 'Sign Up' : 'Log In'}
            </button>

            <div className="or-divider">
                <hr />
                <span>Or</span>
                <hr />
            </div>

            {/* Botón para login con Google */}
            <button className="button google-login-btn" onClick={handleGoogleLogin}>
                <img src={iGoogle} alt="Google logo" className="google-icon" />
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;