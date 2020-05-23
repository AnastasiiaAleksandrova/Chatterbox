import React, { Component } from "react";
import { auth } from "../../services/Firebase";
import "./Forms.css";

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
        this.setState({ error: error.message });
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="logInForm">
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
            className="submit"
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
        <div className="errorMessage">{this.state.error}</div>
      </form>
    );
  }
}

export default LogInForm;
