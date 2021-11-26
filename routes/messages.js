const express = require('express')

let router = express.Router()

let messages = []

router.get('/', (req, res) => {
    return res.status(200).json(messages)
})

router.get('/:messageId', (req, res) => {
    console.log(req.params.messageId)
    return res.status(200).json({'msg': "A message"})
})

router.post('/', (req, res) => {
    const message = req.body
    console.log(message)
    messages.push(message)
    return res.status(200).json(message)
})

module.exports = router