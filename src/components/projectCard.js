import React from "react"
import "./test.css"

function ProjectCard(props) {

  return (
    <div className="card" 
    >
      <div className="card-body">
        <div className="card-details">
          <img src={props.image} className="project-img" alt="projectimage" />
          <p className="card-title">{props.name}</p>
          <a href={props.url} className="livesite_link" target="blank">
            live site
          </a>
          <div className="">
            <p>{props.description}</p>
            <br />
            <p className="languages">{props.language}</p>
          </div>

          <br />
          <div className="glow"></div>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
