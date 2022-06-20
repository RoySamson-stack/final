import React from "react";
import ProjectCard from "./projectCard"
import projects from "./projects"

function projectFinal() {
  return (
    <>
     
      <div className="project snaps-inline" >
      <h1 classNmae="titles">Projects</h1>
        <div className="project-cards snaps-inline">

        {projects.map((project) => (
          
          <ProjectCard
          {...project}
          />
        ))}
        </div>
    </div>
    </>
  
  );
}
export default projectFinal