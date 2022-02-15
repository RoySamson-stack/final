import React from "react";
import ReactDOM from "react-dom";
import projects from "./projects";

function ProjectCard(props) {
  return (
      <div className="project_card">
        <img src={props.img} className="" alt="projectimage" />
        <p>{props.name}</p>
        <p>{props.description}</p>
        <a href={props.url}>{props.url}</a>
      </div>
  );
}
export default ProjectCard;
