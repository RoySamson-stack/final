import React from "react";

function ProjectCard(props) {
  return (
      <div className="cards">
        <div className="card-img">
        <img src={`../img/${props.image}`} className="" alt="projectimage" />
        </div>
        <div className="card-details">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <br/>
        <a href={props.url} className="live-link" target="blank">live site</a>
        </div>
      </div>
  );
}
export default ProjectCard;
