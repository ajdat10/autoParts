const {Schema, model } = require('mongoose')

const Car = new Schema (
    {
        Brand: {
            type:String,
            required: true
        },
        model: {
            type:String,
            required:true
        },
        color: {
            type:String
        }
    },
    {timestamps: true}
)

module.exports = model('cars', Car)