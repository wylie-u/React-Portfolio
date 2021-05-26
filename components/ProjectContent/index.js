import React from 'react';


function ProjectContent ({ title, image, deployed, github }) {

    return (

        <div class="content">
              <img src={image} alt="website"/>
              <h3 className="title">{title}</h3>
              <a className="nav-link" href={deployed}>
                  <h4>Deployed Application</h4>
              </a>
              <a className="nav-link" href={github} target="_blank" rel="noopener noreferrer">
              <h4>GitHub Repository</h4>
            </a>
              
            </div>
    )
}

export default ProjectContent