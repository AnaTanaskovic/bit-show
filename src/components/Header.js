import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="bitshow" className="brand-logo center">
            BIT SHOW
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
