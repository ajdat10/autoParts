const {Schema} = require('mongoose')

module.exports = new Schema(
    {
      name: {
        type:String,
        require: true
      },
      email:{
        type:String,
        require:true,
        unique:true,
        index: true,
      },
      location:{
        type:String,
        require:true
      },
      password_digest:{
        type:String,
        required:true
      },
      comments:{
      type: Schema.Types.ObjectId,
      ref: 'comments'
      },
      products:{
        type: Schema.Types.ObjectId,
        ref: 'products'
      }
    },
    { timestamps: true }
  )
  
  