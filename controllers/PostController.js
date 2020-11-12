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


module.exports = {
    GetPosts,
} 