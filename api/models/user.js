const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: [true, "There is already a user with this email !"],
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password too short !"],
    },
    tries: {
        type: Number,
        max: [3, "You've tried too many times !"]
    },
    username: {
        type: String,
        lowercase: true,
        trim: true
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

module.exports = mongoose.model('User', userSchema)