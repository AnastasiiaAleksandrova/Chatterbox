import React from "react";
import "./Footer.css";
import TypeMessage from "../typeMessage/TypeMessage";

function Footer(props) {
  return (
    <div className="footer">
      <div>
        <TypeMessage
          onChange={props.onChange}
          value={props.value}
          onKeyDown={props.onKeyDown}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default Footer;
