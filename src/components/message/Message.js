import React from "react";
import "./Message.css";
import Timestamp from "react-timestamp";

function Message(props) {
  function toggleMyMessage() {
    if (props.me === props.message.userId) {
      return "myMessage";
    } else {
      return "message";
    }
  }

  return (
    <div className={toggleMyMessage()}>
      <div className="user">{props.username}</div>

      <div className="text">{props.message.text}</div>
      <div className="time">
        <Timestamp date={new Date(props.message.time)} />
      </div>
    </div>
  );
}

export default Message;
