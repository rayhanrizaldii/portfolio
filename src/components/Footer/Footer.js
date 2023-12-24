import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#FFFFFF", marginRight: "2rem" }}
            />
            <div>
              <p>Perum Taman Dhika</p>
              <p>Sidoarjo, Jawa Timur</p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#FFFFFF", marginRight: "2rem" }}
              />
              +6282335458443
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#FFFFFF", marginRight: "2rem" }}
              />
              rayhanrizaldi.rr@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I'm College student at Universitas 17 Agustus 1945 Surabaya. I'm
            willing to learn more about web development.
          </p>
          <div className="social">
            <Link to="https://www.linkedin.com/in/rayhan-rizaldi-4a0294253/" target="_blank">
              <FaLinkedin
                size={25}
                style={{ color: "#FFFFFF", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://github.com/rayhanrizaldii" target="_blank">
              <FaGithub
                size={25}
                style={{ color: "#FFFFFF", marginRight: "1rem" }}
              />
            </Link>
            <Link>
              <FaInstagram
                size={25}
                style={{ color: "#FFFFFF", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
