import React, { Component } from "react";
import { db } from "../../services/Firebase";
import Message from "../../components/message/Message";
import TypeMessage from "../../components/typeMessage/TypeMessage";
import "./Chat.css";

import { auth } from "../../services/Firebase";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessagge = this.sendMessage.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages() {
    db.ref("messages/").on("value", (snapshot) => {
      console.log(snapshot.val());
      let messages = Object.values(snapshot.val() || {});
      messages.sort((a, b) => {
        return a.time - b.time;
      });
      this.setState({ messages: messages });
    });
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleEnterPress(event) {
    if (event.keyCode === 13) {
      this.sendMessage(event);
    }
  }

  sendMessage(event) {
    event.preventDefault();
    let messageRef = db.ref("messages").push();
    messageRef.set({
      userId: 1,
      time: Date.now(),
      text: this.state.input,
    });
    this.setState({ input: "" });
  }

  logOut() {
    auth.signOut().catch((error) => {
      console.log(error.message);
    });
  }
  render() {
    let result = this.state.messages.map((message, index) => {
      return <Message message={message} key={index} />;
    });
    return (
      <div>
        <div className="chat">{result}</div>
        <div>
          <TypeMessage
            onChange={this.handleInputChange}
            value={this.state.input}
            onKeyDown={this.handleEnterPress}
            onClick={this.sendMessagge}
          />
        </div>
        <div>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Chat;
