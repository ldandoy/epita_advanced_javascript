const express = require('express')

const messageModel = require('../models/message')
const auth = require('../middlewares/auth')

let router = express.Router()

let messages = []

router.get('/', auth, async (req, res) => {
    try {
        if (req.session && req.session.user) {
            messages = await messageModel.find({
                autor: req.session.user._id
            }).populate({ path: 'autor', select: 'username email' })
            return res.status(200).json(messages)
        } else {
            return res.status(500).json('You are not connected !')
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.get('/:messageId', auth, async (req, res) => {
    try {
        if (req.session && req.session.user) {
            let message = messageModel.findOne({
                _id: req.params.messageId,
                autor: req.session.user._id
            }).populate({ path: 'autor', select: 'username email'})
            return res.status(200).json(message)
        } else {
            return res.status(500).json('You are not connected !')
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.post('/', auth, async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(500).json({msg: "You have to login to add message !"})
        }

        const {content} = req.body
        
        // messages.push(message)

        let message = await messageModel.create({
            content: content,
            autor: req.session.user._id
        })

        await message.populate({ path: 'autor', select: 'username email'})
        
        return res.status(200).json(message)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.put('/:messageId', auth, async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(500).json({msg: "You have to login to modify this message !"})
        }

        const { content } = req.body

        let message = await messageModel.findOneAndUpdate({ 
            _id: req.params.messageId,
            autor: req.session.user._id
        },
        { content },
        { new: true })
        .populate({ path: 'autor', select: 'username email'})
        
        return res.status(200).json(message)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.delete('/:messageId', auth, async (req,res) => {
    try {
        if (!req.session.user) {
            return res.status(500).json({msg: "You have to login to delete this message !"})
        }

        await messageModel.findOneAndDelete({
            _id: req.params.messageId,
            autor: req.session.user._id
        })
        
        return res.status(200).json({msg: "Message deleted !"})
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

module.exports = router