import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function Header() {
  const [dropdownState, setDropdownState] = useState({
    others: false,
    language: false,
  });

  const dropdownHandler = (dropdown) => {
    setDropdownState({
      ...dropdownState,
      [dropdown]: !dropdownState[dropdown],
    });
  };

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
              <NavLink to="/politics">Politics</NavLink>
            </li>
            <li>
              <NavLink to="/science">Science</NavLink>
            </li>
            <li>
              <NavLink to="/crime">Crime</NavLink>
            </li>
            <li>
              <button
                onClick={() => dropdownHandler("others")}
                className={`btn-Navlink ${
                  dropdownState.others ? "dropdown-btn-active" : ""
                }`}
              >
                Others <ChevronUp />
              </button>
              <div className="drop-down-menu">
                <ul
                  className={`dropdown ${
                    dropdownState.others ? "active-dropdown" : ""
                  }`}
                >
                  <li>
                    <NavLink to="/technology">technology</NavLink>
                  </li>
                  <li>
                    <NavLink to="/education">education</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cricket">cricket</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sports">sports</NavLink>
                  </li>
                  <li>
                    <NavLink to="/jokes">jokes</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                onClick={() => dropdownHandler("language")}
                className={`btn-Navlink ${
                  dropdownState.language ? "dropdown-btn-active" : ""
                }`}
              >
                Language <ChevronUp />
              </button>
              <div className="drop-down-menu">
                <ul
                  className={`dropdown language ${
                    dropdownState.language ? "active-dropdown" : ""
                  }`}
                >
                  <li>
                    Hindi
                  </li>
                  <li>
                    English
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <form className="search-form">
          <input type="search" placeholder="type to search..." />
          <button type="submit" className="btn-primary">
            Search
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
