import React, { useState } from 'react';
import Login from '../Login/Login';
import { auth, db } from '../../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            // Crear usuario en Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar el nombre y rol en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                role: 'User', // Rol predeterminado
            });

            console.log('Usuario registrado con éxito:', user);
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
        }
    };

    return (
        <Login
            isRegister={true}
            onSubmit={handleRegister}
            onChangeName={(e) => setName(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangePassword={(e) => setPassword(e.target.value)}
        />
    );
};

export default Register;