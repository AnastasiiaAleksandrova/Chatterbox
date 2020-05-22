import React, { Component } from "react";

import { auth } from "../../services/Firebase";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  async handleAction() {
    console.log(`user: ${this.state}`);
    try {
      await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="First and Last name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div>
          <input
            type="submit"
            name="submit"
            value="Sign up"
            onClick={this.handleAction}
          />
        </div>
      </form>
    );
  }
}

export default SignUpForm;
