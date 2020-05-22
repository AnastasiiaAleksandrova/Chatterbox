import React, { Component } from "react";

import SignUpForm from "../../components/enterChatForms/SignUpForm";
import LogInForm from "../../components/enterChatForms/LogInForm";

class EnterChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true,
    };
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
        <div>
          <div onClick={() => this.setState({ isSignUp: true })}>Sign Up</div>
          <div onClick={() => this.setState({ isSignUp: false })}>Log In</div>
        </div>

        {form}
      </div>
    );
  }
}

export default EnterChat;
