import React from "react";

function ProjectCard(props) {
  return (
      <div className="cards">
        <img src={props.img} className="" alt="projectimage" />
        <p>{props.name}</p>
        <p>{props.description}</p>
        <br/>
        <a href={props.url} className="live-link">live site</a>
      </div>
  );
}
export default ProjectCard;
