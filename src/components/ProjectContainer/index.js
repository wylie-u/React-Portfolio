import React from 'react';
import projects from "../../projects.json";
import "./style.css";
import ProjectContent from '../ProjectContent';




function ProjectContainer () {

    return (

        <>
        <div className="main">
        <h2>My Projects</h2>
        <p className="projects">Click through each project title to see the live project!</p>

     <div class="row">
            {projects.map((project) => (
          <ProjectContent
            image={project.image}
            title={project.title}
            deployed={project.deployed}
            github={project.github}
          />
        ))}
                </div>
                </div>
        </>

    )

}

export default ProjectContainer;