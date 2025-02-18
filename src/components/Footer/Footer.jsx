import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_logo">Tanvir</div>

        <ul className="footer_list">
          <li>
            <a className="footer_link" href="#portfolio">
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
          <a
            href="https://www.instagram.com/tanvirtalukdersiam/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/tanvirtalukdersiam/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>
        </div>
        <span className="footer_copy">
          Copyright © 2025 Tanvir Siam - All Right Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
