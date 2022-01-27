const { Product, Comment, User } = require("../db/schema");

const CreateComment = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    const comment = new Comment({
      ...req.body,
      user_id: req.params.user_id,
      name: user.name,
    });

    comment.save();
    await Product.update(
      { _id: req.params.post_id },
      { $push: { comments: comment } }
    );

    res.send(comment);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.comment_id });
    console.log(Comment);
    await Product.findByIdAndUpdate(
      { _id: req.params.post_id },
      { $pull: { comments: req.params.comment_id } },
      { upsert: true, new: true },
      (err, updatedPost) => {
        if (err) {
          console.log(err);
        }
        res.send(updatedPost);
      }
    );
  } catch (err) {
    throw err;
  }
};

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.comment_id,
      {
        ...req.body,
      },
      { new: true, useFindAndModify: false }
    );
    res.send(comment);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  DeleteComment,
  UpdateComment,
};
