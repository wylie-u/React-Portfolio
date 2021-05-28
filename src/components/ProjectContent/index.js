import React from 'react';
import "./style.css";




function ProjectContent ({ title, image, deployed, github }) {

    return (
        
        <div className="column col-md-4 col-lg-6">
            <div className="card">
            <img src={image} className="card-img-top"alt="website"/>
  <div className="card-body">
    <h5 className="card-title">
    <a href={deployed} >{title}</a>
    </h5>
    <a href={github} >Github Repository</a>
  </div>
            </div>
        </div>

    )
}

export default ProjectContent

// return (
//     <div className="col-lg-6 column">
//     <div className="content">
//         <div className="card">
//           <img className="image" src={image} alt="website"/>
//           <h3 className="title">{title}</h3>
//           <a className="nav-link" href={deployed}>
//               <h4>Deployed Application</h4>
//           </a>
//           <a className="nav-link" href={github} target="_blank" rel="noopener noreferrer">
//           <h4>GitHub Repository</h4>
//         </a>
//         </div>
//         </div>
//         </div>
// )