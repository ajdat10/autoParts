import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __RegisterUser } from "../services/UserServices";
// import { Link } from "react-router-dom";
import "../styles/SignUp.css";

export default class Signup extends Component {
  // TODO Integrate Auth
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __RegisterUser(this.state);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, password, email } = this.state;
    return (
      <div className="signup">
        <h3>Register Below</h3>
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Your Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Your Email"
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
          />

          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button
            className="btn waves-effect waves-light indigo accent-3"
            type="submit"
            name="action"
          >
            Sign Up
            <i className="material-icons right">directions_car</i>
          </button>
        </form>
      </div>
    );
  }
}
