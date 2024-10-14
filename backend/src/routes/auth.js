const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para registrar/verificar usuario en MongoDB
router.post('/register', async (req, res) => {
    const { firebaseId, name, email } = req.body;

    try {
        const existingUser = await User.findOne({ firebaseId });
        if (existingUser) {
            return res.status(200).json({ message: 'Usuario ya registrado en MongoDB.' });
        }

        const newUser = new User({ firebaseId, name, email });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado en MongoDB.', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario en MongoDB.', error });
    }
});

module.exports = router;