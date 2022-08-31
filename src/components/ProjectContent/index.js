import React from "react";
import "./style.css";

function ProjectContent({ title, image, deployed, github }) {
  return (
    <div className="column col-md-4 col-lg-6">
      <div className="card">
        <img src={image} className="card-img-top" alt="website" />
        <div className="card-body">
          <h5 className="card-title">
            <a href={deployed}>{title}</a>
          </h5>
          <a href={github}>Github Repository</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
