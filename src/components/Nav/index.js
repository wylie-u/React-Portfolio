import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md nav-item navbar-light wy-nav">
        <Link to="/about" className="navbar-brand wy-logo">
          W
        </Link>
        <button
          className="navbar-toggler collapse"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active ">
              <Link to="/portfolio" className="nav-link nav-link2">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link nav-link3">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link4">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

// className="navbar-brand wy-logo"
