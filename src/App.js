import React, { Component } from "react";
import Chat from "./pages/chat/Chat";
import EnterChat from "./pages/enterChat/EnterChat";

import { auth } from "./services/Firebase";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
  }

  render() {
    if (this.state.user) {
      return <Chat user={this.state.user} />;
    } else {
      return <EnterChat />;
    }
  }
}

export default App;
