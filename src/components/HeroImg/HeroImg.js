import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";

const HeroImg = () => {




  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImage" />
      </div>
      <div className="content">
        <p>HI,{" "} <ReactTyped strings={["My Name is Rayhan Rizaldi"]} typeSpeed={100} loop /> </p>
        <h1>College Student.<br />Front End Developer.</h1>
        <div className="btn-wrapper">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/about" className="btn btn-light">About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
