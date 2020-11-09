const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CarRouter = require('./CarRouter')
const DealerRouter = require('./DealerRouter')

Router.use('/users', UserRouter)
Router.use('/cars', CarRouter)
Router.use('/dealers', DealerRouter)

module.exports = Router
