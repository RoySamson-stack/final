import React from "react";
import ProjectCard from "./projectCard"
import projects from "./projects"

function projectFinal() {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="project-cards">
      {projects.map((project) => (
        <ProjectCard
          name={project.name}
          img={project.img}
          description={project.description}
          url={project.url}
          className="cards"
        />
      ))}
      </div>
    </div>
  );
}
export default projectFinal