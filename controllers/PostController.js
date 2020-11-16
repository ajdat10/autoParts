// const { catch } = require('../db/connection')
const { Product, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) =>{
    try{
        const {page, limit} = req.query
        const offset = 
            page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
        const posts = await Product.find()
        .limit(parseInt(limit))
      .skip(offset)
    res.send(posts)
  } catch (error) {
    throw error
  }
    }

const CreatePost = async (req, res) => {
  try{
    const newPost = new Product({...req.body, user_id: req.params.user_id})
    newPost.save()
    res.send(newPost)
  }catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    const post = await (await Product.findById(req.params.post_id))
  
 res.send(post)
  }catch(error) {
    throw error;
  }
}

const DeletePost = async (req, res) => {
  try {
    const post = await Product.findById(req.params.post_id)
    await Comment.deleteMany({ _id: { $in: post.comments } })
    await Product.findByIdAndDelete(req.params.post_id)
    res.send({ msg: 'Post deleted' })
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    
    const post = await Product.findByIdAndUpdate(
      req.params.post_id,
      {
        ...req.body
      },
      { new: true, useFindAndModify: false },
      )
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetPosts,
    CreatePost,
    GetPostById,
    UpdatePost,
    DeletePost
} 