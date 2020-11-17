import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UpdatePost } from '../services/PostServices'

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
    image_url: this.props.post.image_url,    
    description: this.props.post.description,
    price: this.props.post.price
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdatePost(this.state, this.props.post._id)
      this.props.history.push('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
      console.log(this.props)
    const { price, image_url, description } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Image Url"
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            name="price"
            placeholder="Price"
            value={price}
            onChange={this.handleChange}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}
