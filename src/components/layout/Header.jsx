import React from "react";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/all">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/all">All</NavLink>
            </li>
            <li>
              <NavLink to="/politics">politics</NavLink>
            </li>
            <li>
              <NavLink to="/science">science</NavLink>
            </li>
            <li>
              <NavLink to="/crime">crime</NavLink>
            </li>
            <li>
              <button className="btn-Navlink">others</button>
              <div className="drop-down-menu">
                <ul className="dropdown">
                  <li>
                    <NavLink to="/">science</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">science</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">science</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">science</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">science</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button className="btn-Navlink">language</button>
              <ul className="dropdown">
                <li>
                  <NavLink to="/">Hindi</NavLink>
                </li>
                <li>
                  <NavLink to="/">English</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <form className="search-form">
          <input type="search" placeholder="type tp search..." />
          <button type="submit" className="btn-primary">
            search
          </button>
        </form>
        <div className="menu">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </header>
  );
}
