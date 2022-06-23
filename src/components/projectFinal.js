import React from "react";
import ProjectCard from "./projectCard"
import projects from "./projects"

function projectFinal() {
  return (
    <>
    <h1 className="titles">Projects</h1>
      <div className="project "  id="projects">
        <div className="project-cards ">

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