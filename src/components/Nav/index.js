import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

function Nav() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light wy-nav">
        <Link to="/about" className={window.location.pathname === "/about"}>W</Link> 
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
              <Link to="/portfolio" className={window.location.pathname === "/portfolio"}>Portfolio</Link> 
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link nav-link3">Resume</Link> 
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link4" href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      
    );
  }
  
  export default Nav;

  // className="navbar-brand wy-logo"

  //className="nav-link nav-link2" href="portfolio"