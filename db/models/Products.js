const {Schema } = require('mongoose')

module.exports = new Schema (
    {
        image_url: {
            type:String,
            
        },
        description: {
            type:String,
        },
        price: {
            type:Number,
            
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref:'users'
        },
        comments:{
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }
    },
    {timestamps: true}
)

