import React from "react";
// import link from "./img/exit-top-right.png";

function ProjectCard(props) {
  return (
      <div className="cards">
       {/* <div class="overlay"></div> */}
        <div className="card-img">
        </div>
        <div className="card-details">
         <img src={props.image} className="project-img" alt="projectimage" />
        <p className="project-name">{props.name}</p>
        <p>{props.description}</p>
        <br/>
        <a href={props.url} className="" target="blank">
          {/* <img src={link} className="live-link" alt="live"/> */}
        </a>
        <p className="languages">{props.language}</p>
        </div>
       
      
      </div>
  );
}
export default ProjectCard;
