const express = require('express')

const userModel = require('../models/user')

let router = express.Router()

router.post('/register', (req, res) => {
    try {
        const inputDatas = req.body
        console.log(inputDatas)
        let errors = []

        if (!inputDatas.email) {
            errors.push({
                field: "email",
                message: "required fields"
            })
        }

        if (!inputDatas.email_cfg) {
            errors.push({
                field: "email_cfg",
                message: "required fields"
            })
        }

        if (!inputDatas.password) {
            errors.push({
                field: "password",
                message: "required fields"
            })
        }

        if (!inputDatas.password_cfg) {
            errors.push({
                field: "password_cfg",
                message: "required fields"
            })
        }

        if (errors.length > 0) {
            return res.status(500).json(errors)
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

router.post('/login', (req, res) => {
    try {

    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message)
    }
})

module.exports = router