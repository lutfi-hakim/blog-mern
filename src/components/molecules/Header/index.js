import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="header-container">
        <p className="logo-app"></p>
        <p className="menu-item" onClick={() => history.push("/login")}>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Header;
