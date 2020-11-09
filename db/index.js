const { mongo } = require("mongoose")

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/carRegistration', 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true
     })
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch(error => {
        console.error('Connection error', error.message)
    })
   
    const db = mongoose.connection

    module.exports= db