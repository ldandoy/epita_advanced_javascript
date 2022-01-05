const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    autor: {
        type: String,
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