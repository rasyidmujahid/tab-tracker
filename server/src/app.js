const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, rest) => {
  rest.send({
    message: 'hello world!'
  })
})

app.post('/register', (req, rest) => {
  rest.send({
    message: `Hello ${req.body.email}! Your user was registered. Have fun!`
  })
})

app.listen(process.env.PORT || 8081)