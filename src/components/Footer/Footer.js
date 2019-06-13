import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="footer-copyright">
        <div className="container center-align">
          © {new Date().getFullYear()} Copyright Belgrade Institute of
          Technology
        </div>
      </div>
    </footer>
  );
};

export default Footer;
