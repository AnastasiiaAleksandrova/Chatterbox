import React, { Component } from "react";
import { auth } from "../../services/Firebase";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error.message);
        this.setState({ error: error.message });
      });
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
            value="Log In"
            onClick={this.handleAction}
          />
        </div>
        <div>{this.state.error}</div>
      </form>
    );
  }
}

export default LogInForm;
