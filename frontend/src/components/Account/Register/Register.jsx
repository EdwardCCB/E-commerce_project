import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import axios from 'axios';
import Login from '../Login/Login';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                role: 'User'
            });

            await axios.post('http://localhost:5000/api/auth/register', {
                firebaseId: user.uid,
                name,
                email
            });

            console.log('Usuario registrado en Firebase y MongoDB.');
        } catch (error) {
            console.error('Error al registrar usuario:', error);
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