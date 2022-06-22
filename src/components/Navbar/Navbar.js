import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="icon">vk</div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#contact-me">Contact</a>
        </li>
        <li>
          <Link to="/#">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
