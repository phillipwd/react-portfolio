import React from "react";
import ProjectCard from "../components/projectcard";
import dayPlanner from "../components/images/Day-Planner.png";
import passwordGenerator from "../components/images/Password Generator.PNG";
import weatherApp from "../components/images/weatherapp.PNG";
import casino from "../components/images/Casino Experience.png";
import rad from "../components/images/RAD Project.PNG";
import housing from "../components/images/Housing front page.png"

function Projects() {
  return (
    <div>
      <div
        className="cards"
        style={
          ({ display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "150px"})
        }
      >
        <ProjectCard
          src={dayPlanner}
          alt="Day-Planner assignment image"
          deployed={"https://phillipwd.github.io/Day-Planner/"}
          git={"https://github.com/phillipwd/Day-Planner"}
        />
        <ProjectCard
          src={passwordGenerator}
          alt="Password generator assignment image"
          deployed={"https://phillipwd.github.io/password-generator/"}
          git={"https://github.com/phillipwd/password-generator"}
        />
        <ProjectCard
        src={weatherApp}
        alt="Weather search app assignment image"
        deployed={"https://phillipwd.github.io/weather-page"}
        git={"https://github.com/phillipwd/weather-page"}
        /><ProjectCard
        src={casino}
        alt="The Casino Experience project"
        deployed={"https://craazycraaz.github.io/group-Project-One/"}
        git={"https://github.com/CraazyCraaz/group-Project-One"}
        /><ProjectCard
        src={rad}
        alt="Rapid Allocation Deployment project"
        deployed={"https://rad-prototype.herokuapp.com/"}
        git={"https://github.com/chrisp-dev/rad-project"}
        /><ProjectCard
        src={housing}
        alt="Muckleshoot Housing Authority project"
        deployed={"https://mhauthority.herokuapp.com/"}
        git={"https://github.com/ZaphodBettlebrox/housing-project"}
        />
      </div>
    </div>
  );
}

export default Projects;
