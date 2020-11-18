import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import {CreateComment} from '../services/CommentServices'

export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
    comment: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
        console.log(e)
      await CreateComment(this.state, this.props.currentUser._id)
      this.props.history.push('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
      console.log(this.props)
    const { comment } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Comment"
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}
