import React, { Component } from "react";
import { db } from "../../services/Firebase";
import Message from "../../components/message/Message";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Chat.css";

import { auth } from "../../services/Firebase";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
    this.state = {
      messages: [],
      users: {},
      input: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessagge = this.sendMessage.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    db.ref("users").on("value", (snapshot) => {
      this.setState({ users: snapshot.val() });
    });
    this.fetchMessages();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    db.ref("/").off();
  }

  scrollToBottom() {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  fetchMessages() {
    db.ref("messages/").on("value", (snapshot) => {
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
      userId: this.props.user.uid,
      time: Date.now(),
      text: this.state.input,
    });
    this.setState({ input: "" });
  }

  logOut() {
    auth.signOut().catch((error) => {});
  }

  render() {
    let result = this.state.messages.map((message, index) => {
      return (
        <Message
          message={message}
          key={index}
          username={this.state.users[message.userId].name}
          me={this.props.user.uid}
        />
      );
    });

    return (
      <div>
        <Header onLogoutClick={this.logOut} />
        <div className="chat">{result}</div>
        <div ref={this.messagesEndRef} />
        <Footer
          onChange={this.handleInputChange}
          value={this.state.input}
          onKeyDown={this.handleEnterPress}
          onClick={this.sendMessagge}
        />
      </div>
    );
  }
}

export default Chat;
