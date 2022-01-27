const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    name: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    products: {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
    Venmo: {
      type: String,
    },
  },
  { timestamps: true }
);
