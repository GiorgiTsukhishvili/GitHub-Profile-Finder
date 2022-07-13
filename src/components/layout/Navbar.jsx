import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaGithub className="github-logo" />
        <Link to="/" className="navbar-text">
          GitHub Profile Finder
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/" className="navbar-text">
          Home
        </Link>
        <Link to="/about" className="navbar-text">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
