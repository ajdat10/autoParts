const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const ProductRouter = require("./ProductRouter");
const CommentRouter = require("./CommentRouter");

Router.use("/users", UserRouter);
Router.use("/posts", ProductRouter);
Router.use("/comments", CommentRouter);

module.exports = Router;
