import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_logo">
          <img src={logo} alt="Frontend_developer" />
        </div>

        <ul className="footer_list">
          <li>
            <a className="footer_link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="footer_link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="footer_link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="" className="footer_social-link" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/tanvir.siam.739/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>
          {/* <a
            href="https://www.linkedin.com/in/md-tanvir-3b75282a8/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a> */}
        </div>
        <span className="footer_copy">
          Copyright © 2025 Tanvir Siam - All Right Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
