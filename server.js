const AppRouter = require('./routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const connection = require('./db')

const PORT = process.env.PORT || 3001
const app = express()

// Initialize Middleware
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Initialize Middleware

app.get('/', (req, res) => res.send({ msg: 'Server Working' }))
app.use('/api', AppRouter)

app.listen(PORT, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`App listening on port: ${PORT}`)
  } catch (error) {
    throw new Error('Connection Error')
  }
})
