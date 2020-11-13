import React from "react";
import { FaAlignRight } from "react-icons/fa";

import "./NavigationBar.css";
import Logo from "../../images/logo.svg";

const navigationBar = ({ showNav, onToggleNav }) => {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={Logo} alt="Beach Resort" />
          </a>
          <button className="nav-icon nav-btn" onClick={onToggleNav}>
            <FaAlignRight />
          </button>
        </div>
        <ul className={showNav ? "nav-links show-nav" : "nav-links"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navigationBar;
