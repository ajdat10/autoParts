const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    image_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);
