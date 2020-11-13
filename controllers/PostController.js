const { Product, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) =>{
    try{
        const {page, limit} = req.query
        const offset = 
            page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
        const post = await Product.find()
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

const GetPostsById = async (req, res) => {
  try {
    const post = await (await Product.findById(req.params.post_id)).populated([
      {
        model: 'users',
        path: 'user_id',
        select: '_id name'
      }
    ])
    res.send(post)
  }
}

module.exports = {
    GetPosts,
    CreatePost
} 