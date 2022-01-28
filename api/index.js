const express           = require('express')
const bodyParser        = require('body-parser')
const morgan            = require('morgan')
const helmet            = require('helmet')
const session           = require('express-session')
const cors              = require('cors')
const swaggerJsdoc      = require("swagger-jsdoc");
const swaggerUi         = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Messages',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './models/*.js'],
};
const swaggerSpec = swaggerJsdoc(options, {explore: true});

require('./utils/data')

const messagesRoute = require('./routes/messages')
const authRoute     = require('./routes/auth')

const app = express()
app.use(morgan('dev'))
app.use(helmet())

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: null,
    secret: "Secret12"
}))


app.use(express.static('public'))
app.use('/api/messages',    messagesRoute)
app.use('/api',             authRoute)
app.use('/api-docs',        swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    // return res.status(200).send('<h1>Hello World</h1>')
    return res.status(200).json({"msg": "Hello world !"})
})

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})