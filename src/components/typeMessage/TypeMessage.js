import React from "react";
import "./TypeMessage.css";

function TypeMessage(props) {
  return (
    <form className="typeMessage">
      <div>
        <textarea
          className="textInput"
          type="text"
          placeholder="Type your message"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Send"
          className="submitInput"
          onClick={props.onClick}
        />
      </div>
    </form>
  );
}

export default TypeMessage;
