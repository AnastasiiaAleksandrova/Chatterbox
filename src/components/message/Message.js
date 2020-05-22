import React from "react";
import "./Message.css";
import Timestamp from "react-timestamp";

function Message(props) {
  return (
    <div className="message">
      <div className="user">{props.message.userId}</div>
      <div className="time">
        <Timestamp date={new Date(props.message.time)} />
      </div>
      <div className="text">{props.message.text}</div>
    </div>
  );
}

export default Message;
