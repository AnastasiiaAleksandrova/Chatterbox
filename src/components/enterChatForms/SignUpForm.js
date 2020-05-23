import React, { Component } from "react";
import "./Forms.css";
import { auth, db } from "../../services/Firebase";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCred) => {
        console.log(`UserCreds: ${JSON.stringify(userCred)}`);
        return db.ref(`users/${userCred.user.uid}`).set({
          name: this.state.name,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error.message);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="signUpForm">
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
        <div className="errorMessage">{this.state.error}</div>
      </form>
    );
  }
}

export default SignUpForm;
