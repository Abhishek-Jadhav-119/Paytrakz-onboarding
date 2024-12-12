import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  const projectData = [
    { color: '#666666', title: 'Total Project', value: 30 },
    { color: '#0073e6', title: 'Converted', value: 5 },
    { color: '#32CD32', title: 'Closed', value: 4 },
    { color: '#666666', title: 'Created', value: 1 },
    { color: '#FF0000', title: 'On Hold', value: 2 },
    { color: '#006400', title: 'Completed', value: 2 },
  ];

  return (
    <div className="project-cards-container">
      <h2 className="project-title">My Total Project</h2>
      <div className="project-cards">
        {projectData.map((data, index) => (
          <div className="project-card" key={index}>
            <div
              className="card-icon"
              style={{ backgroundColor: data.color }}
            ></div>
            <div className="card-content">
              <p className="card-title">{data.title}</p>
              <h2 className="card-value">{data.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
