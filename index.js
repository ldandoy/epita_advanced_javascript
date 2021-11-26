const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const messagesRoute = require('./routes/messages')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api/messages', messagesRoute)

app.get('/', (req, res) => {
    // return res.status(200).send('<h1>Hello World</h1>')
    return res.status(200).json({"msg": "Hello world !"})
})

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})