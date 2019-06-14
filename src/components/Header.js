import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-3">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">BIT SHOW</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <Link to="/about">About</Link>
      </ul>
    </div>
  </nav>
        
    </div>
  );
};

export default Header;
