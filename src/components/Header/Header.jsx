import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav_logo">
            Tanvir
          </a>

          <div className={toggle ? "nav_menu show-menu" : " nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#home" className="nav_link active_link">
                  <i class="uis uil-estate nav_icon"></i>Home
                </a>
              </li>
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon"></i>
                  About
                </a>
              </li>
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#skill" className="nav_link">
                  <i className="uil uil-file-alt nav_icon"></i>Skills
                </a>
              </li>
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon  "></i>Services
                </a>
              </li>
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#portfolio" className="nav_link">
                  <i class="uil uil-scenery nav_icon"></i>Portfolio
                </a>
              </li>
              <li className="nav_item" onClick={() => setToggle(false)}>
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon"></i>Contact
                </a>
              </li>
            </ul>
            <i
              class="uil uil-times  nav_close"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
