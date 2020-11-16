import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {__GetPosts} from '../services/PostServices'

export default class Feed extends Component {
    constructor() {
        super()
        this.state = {
          posts: [],
          currentPage: 1
        }
      }
    
      componentDidMount() {
        this.getPosts()
      }
    
      getPosts = async () => {
        try {
          const posts = await __GetPosts(this.state.currentPage)
          this.setState({ posts: [...this.state.posts, ...posts] })
        } catch (error) {
          console.log(error)
        }
      }
      incrementPage = () =>
      this.setState(
        (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
        () => this.getPosts()
      )
      render() {
        const { posts } = this.state
        
          return (
            <div>
                {posts.length ? (
                    posts.map((post)=>(
                        <div key={post._id}>
                            <h1>{post.image_url}</h1>
                            <h1>{post.description}</h1>
                            <h1>{post.price}</h1>
                        </div>
                    ))
                ) : (
                <h3>Loading . . . . .</h3>
                    )
            }
            </div>  
            // <div className="posts detail">
            //     <p>{posts.description}</p>
            // </div>
          )
    
       
      }
    }