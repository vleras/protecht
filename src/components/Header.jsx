import React from "react";
import { NavLink } from "react-router-dom";
import "../styles_css/Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Protecht Logo" className="logo-image" />
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/empowering"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Empowering
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
