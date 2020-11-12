const {Schema } = require('mongoose')

module.exports = new Schema (
    {
        image_url: {
            type:String,
            required: true
        },
        description: {
            type:String,
        },
        price: {
            type:Number,
            require:true
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

