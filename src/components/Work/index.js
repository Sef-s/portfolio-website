import React from "react";
import './index.scss';

const projects = [
  {
    name: "Project 1",
    description: "Description of Project 1",
    githubLink: "https://github.com/user/project1"
  },
  // Add more projects here
];

const Work = () => {
  return (
    <div className="work">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <div className="card-inner">
            <div className="card-front">
              <h3>{project.name}</h3>
            </div>
            <div className="card-back">
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="github icon"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
