import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import cv from "../../assets/cv.pdf";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>RayhanRizaldi.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <div className="btn btn-light">
            {" "}
            <MdDarkMode />{" "}
          </div>
        </li> */}
        <li>
          <Link
            to={cv}
            download="CV_RayhanRizaldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn">Download CV</div>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f5f5f5" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f5f5f5" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
