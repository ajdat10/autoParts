import React, { Component } from 'react'
import { __DeletePost } from '../services/PostServices'
import { __GetProfile } from '../services/UserServices'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
      this.setState({ posts: profileData.posts })
    } catch (error) {
      this.setState({ postFetchError: true })
    }
  }

  deletePost = async (id) => {
    try {
      const postsToKeep = this.state.posts.filter((post) => post._id !== id)
      this.setState({ posts: postsToKeep })
      await __DeletePost(id)
    } catch (error) {
      console.log(error)
    }
  }

    render(){
    return(
      <div className="profile">
            <div>
            <p>LETS F***** GO</p>
        </div>
    </div>
        )
    }
}