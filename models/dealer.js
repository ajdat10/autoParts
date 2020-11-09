const {Schema, model } = require('mongoose')

const Dealer = new Schema(
    {
      name: 
        { 
          type: String, 
        required: true 
        },
      location: 
        { 
          type: String, 
          required: true 
        }
    },
    { timestamps: true }
  )
  
  module.exports = model('dealers', Dealer)