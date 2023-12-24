import "./ProjectCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view || props.source} className="btn" target="_blank">
            {props.view ? "View" : props.source ? "Source" : ""}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
