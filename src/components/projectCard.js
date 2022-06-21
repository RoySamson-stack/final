import React from "react";

function ProjectCard(props) {
  return (
        <div className="card-details">
          <img src={props.image} className="project-img" alt="projectimage" />
          <p className="project-name">{props.name}</p>
          {/* <p>{props.description}</p> */}
          <br/>
          <a href={props.url} className="livesite_link" target="blank">
          live site
          </a>
          <br />
          {/* <p className="languages">{props.language}</p> */}
        </div>
       
      
  );
}
export default ProjectCard;
