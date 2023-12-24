import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../../assets/images/photo.png";
import photo2 from "../../assets/images/bg-about.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am Rayhan Rizaldi, a 21 year old student and a front-end developer
          proficient in ReactJS, Bootstrap, and Laravel framework. My expertise
          lies in developing engaging user interfaces. I have a strong grasp of
          CRUD operations as well, making me a versatile developer.
        </p>
        <Link to="https://wa.me/6282335458443">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={photo1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={photo2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
