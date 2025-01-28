const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }, password: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }, role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('users', UserSchema)