const express       = require('express')
const bodyParser    = require('body-parser')
const morgan        = require('morgan')
const helmet        = require('helmet')
const session       = require('express-session')

require('./utils/data')

const messagesRoute = require('./routes/messages')
const authRoute     = require('./routes/auth')

const app = express()
app.use(morgan('dev'))
app.use(helmet())
app.use(bodyParser.json({
    extended: true
}))
app.use(session({
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: null,
    secret: "Secret12"
}))

app.use('/api/messages',    messagesRoute)
app.use('/api',             authRoute)

app.get('/', (req, res) => {
    // return res.status(200).send('<h1>Hello World</h1>')
    return res.status(200).json({"msg": "Hello world !"})
})

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})