const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    autor: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

module.exports = mongoose.model('Message', messageSchema)