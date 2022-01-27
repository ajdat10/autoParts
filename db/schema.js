const { model } = require("mongoose");

const UserSchema = require("./models/User");
const CommentSchema = require("./models/Comments");
const ProductSchema = require("./models/Products");

const User = model("users", UserSchema);
const Comment = model("comments", CommentSchema);
const Product = model("products", ProductSchema);

module.exports = {
  User,
  Comment,
  Product,
};



