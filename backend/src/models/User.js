const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firebaseId: { type: String, required: true, unique: true },
    name: String,
    email: String,
    role: { type: String, default: 'User' }
});

module.exports = mongoose.model('User', userSchema);