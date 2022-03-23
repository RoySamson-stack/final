import React from "react";
import link from "./img/exit-top-right.png";

function ProjectCard(props) {
  return (
      <div className="cards">
        <div className="card-img">
        <img src={props.image} className="project-img" alt="projectimage" />
        </div>
        <div className="card-details">
              <p>{props.name}</p>
        <p>{props.description}</p>
        <br/>
        <a href={props.url} className="" target="blank">
          <img src={link} className="live-link" alt="live"/>
        </a>
        <p>{props.language}</p>
        </div>
      
      </div>
  );
}
export default ProjectCard;
