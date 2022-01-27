import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __UploadPost } from "../services/PostServices";

export default class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      image_url: "",
      description: "",
      price: "",
      user: null,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UploadPost(this.state, this.props.currentUser._id);
      this.props.history.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props);
    const { price, image_url, description } = this.state;
    return (
      <div className="create"> 
        <h4>Create A Post</h4>
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
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}
