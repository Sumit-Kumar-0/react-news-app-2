import React, { useCallback, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const Header = () => {
  const [dropdownStates, setDropdownStates] = useState({
    others: false,
    language: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleDropdownItemClick = () => {
    setDropdownStates({
      others: false,
      language: false,
    })
  };

  const languageOptions = ["Hindi", "English"];
  const otherLinks = [
    { to: "/technology", text: "Technology" },
    { to: "/education", text: "Education" },
    { to: "/cricket", text: "Cricket" },
    { to: "/sports", text: "Sports" },
    { to: "/jokes", text: "Jokes" },
  ];
  const navLinks = [
    { to: "/all", text: "All" },
    { to: "/politics", text: "Politics" },
    { to: "/science", text: "Science" },
    { to: "/crime", text: "Crime" },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/all" onClick={() => handleDropdownItemClick()}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <nav className="navbar">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} onClick={() => handleDropdownItemClick()}>{link.text}</NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => toggleDropdown("others")}
                className={`btn-Navlink ${
                  dropdownStates.others ? "dropdown-btn-active" : ""
                }`}
              >
                Others <ChevronUp />
              </button>
              <div className="drop-down-menu">
                <ul
                  className={`dropdown ${
                    dropdownStates.others ? "active-dropdown" : ""
                  }`}
                >
                  {otherLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.to}
                        onClick={() => handleDropdownItemClick()}
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("language")}
                className={`btn-Navlink ${
                  dropdownStates.language ? "dropdown-btn-active" : ""
                }`}
              >
                Language <ChevronUp />
              </button>
              <div className="drop-down-menu">
                <ul
                  className={`dropdown language ${
                    dropdownStates.language ? "active-dropdown" : ""
                  }`}
                >
                  {languageOptions.map((lang, index) => (
                    <li
                      key={index}
                      onClick={() => handleDropdownItemClick()}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <form className="search-form">
          <input type="search" placeholder="Type to search..." />
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
};

export default Header;
