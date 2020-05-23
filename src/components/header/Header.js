import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="logo">Chatterbox</div>
      <div className="logout">
        <button className="logoutBtn" onClick={props.onLogoutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
