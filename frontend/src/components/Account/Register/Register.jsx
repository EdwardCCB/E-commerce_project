import React from 'react';
import Login from '../Login/Login';

const Register = () => {
    const handleRegister = () => {
        // Lógica para manejar el registro
        console.log("Registro");
    };

    return (
        <Login isRegister={true} onSubmit={handleRegister} />
    );
};

export default Register;