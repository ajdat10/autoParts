const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post(
  '/:post_id/user/:user_id', CommentController.CreateComment
)
Router.delete(
  '/:post_id/delete/:comment_id', CommentController.DeleteComment
)
Router.put(
  '/:comment_id', CommentController.UpdateComment
)

module.exports = Router
