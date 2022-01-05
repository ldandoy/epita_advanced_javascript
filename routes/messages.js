const express = require('express')

const messageModel = require('../models/message')

let router = express.Router()

let messages = []

router.get('/', async (req, res) => {
    try {
        messages = await messageModel.find()
        return res.status(200).json(messages)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.get('/:messageId', async (req, res) => {
    try {
        let message = messageModel.findOne({_id: req.params.messageId})
        return res.status(200).json(message)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const inputDatas = req.body
        
        // messages.push(message)

        let message = await messageModel.create(inputDatas)
        return res.status(200).json(message)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.put('/:messageId', async (req, res) => {
    try {
        const inputDatas = req.body

        let message = await messageModel.findOneAndUpdate(
            { _id: req.params.messageId },
            inputDatas,
            { new: true }
        )
        
        return res.status(200).json(message)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.delete('/:messageId', async (req,res) => {
    try {
        await messageModel.findOneAndDelete({_id: req.params.messageId})
        
        return res.status(200).json({msg: "Message deleted !"})
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

module.exports = router