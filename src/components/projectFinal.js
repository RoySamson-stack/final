import React from "react";
import ProjectCard from "./projectCard"
import projects from "./projects"

function projectFinal() {
  return (
    <>
     
      <div className="project" >
      <h1 classNmae="titles">Projects</h1>
        <div className="project-cards">

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