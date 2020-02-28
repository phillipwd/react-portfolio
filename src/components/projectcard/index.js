import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <div className="ribbon">
        <div className="lighten">
        <a className="darken" href={props.deployed} target="_blank">
          Visit this project
        </a>
        </div>
      </div>
      <div className="repoBanner">
        <p>View the repository at:</p>
        <a href={props.git}>{props.git} </a>
      </div>
    </div>
  );
}

export default ProjectCard;
