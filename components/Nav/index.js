import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-light wy-nav">
        <a className="navbar-brand wy-logo" href="about">W</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active ">
              <a className="nav-link nav-link2" href="portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link3" href="resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link4" href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;