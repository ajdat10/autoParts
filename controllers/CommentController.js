const { Product, Comment } = require('../db/schema')


const CreateComment = async (req, res) => {
    try {
      const comment = new Comment({ ...req.body, user_id: req.params.user_id })
      comment.save()
      await Product.update(
        { _id: req.params.post_id },
        {
          $push: {
            comments: comment
          }
        }
      )
      res.send(comment)
    } catch (error) {
      throw error
    }
  }

  module.exports ={
      CreateComment
  }