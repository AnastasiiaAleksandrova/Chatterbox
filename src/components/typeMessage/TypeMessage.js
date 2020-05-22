import React from "react";
import "./TypeMessage.css";

function TypeMessage(props) {
  return (
    <form className="typeMessage">
      <div>
        <input
          className="textInput"
          type="text"
          placeholder="type your message"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      </div>
      <div>
        <input
          type="submit"
          value="send"
          className="submitInput"
          onClick={props.onClick}
        />
      </div>
    </form>
  );
}

export default TypeMessage;
