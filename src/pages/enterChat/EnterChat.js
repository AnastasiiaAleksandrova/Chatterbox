import React, { Component } from "react";
import "./EnterChat.css";
import SignUpForm from "../../components/enterChatForms/SignUpForm";
import LogInForm from "../../components/enterChatForms/LogInForm";

class EnterChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true,
    };
  }

  toggleLogIn() {
    console.log("login");
    return this.state.isSignUp ? "logIn" : "logInActive";
  }

  toggleSignUp() {
    console.log("signup");
    return this.state.isSignUp ? "signUpActive" : "signUp";
  }

  render() {
    let form;
    if (this.state.isSignUp) {
      form = <SignUpForm />;
    } else {
      form = <LogInForm />;
    }

    return (
      <div>
        <div className="enterChatForm">
          <div className="enterChatSwitchTabs">
            <div
              className={this.toggleSignUp()}
              onClick={() => this.setState({ isSignUp: true })}
            >
              Sign Up
            </div>
            <div
              className={this.toggleLogIn()}
              onClick={() => this.setState({ isSignUp: false })}
            >
              Log In
            </div>
          </div>
          <div className="form">{form}</div>
        </div>
      </div>
    );
  }
}

export default EnterChat;
