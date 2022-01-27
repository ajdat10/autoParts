require("dotenv").config();
const mongoose = require("mongoose");
// const MONGO_URI = process.env.MONGO_URI

const connection = mongoose.connect(
  process.env.DATABASE_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
module.exports = connection;
