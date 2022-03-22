import React from "react";
import ProjectCard from "./projectCard"
import projects from "./projects"

function projectFinal() {
  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="project-cards">

      {projects.map((project) => (
        
        <ProjectCard
        {...project}
        />
      ))}
      </div>
    </div>
  );
}
export default projectFinal