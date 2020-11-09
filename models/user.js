const {Schema, model } = require('mongoose')

const User = new Schema(
    {
      first_name: 
        { 
          type: String, 
        required: true 
        },
      last_name: 
        { 
          type: String, 
          required: true 
        },
      car: [
            { 
              type: Schema.Types.ObjectId, 
              ref: 'cars' 
            }
        ]
    },
    { timestamps: true }
  )
  
  module.exports = model('users', User)