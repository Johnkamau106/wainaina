import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects fade-in" id="projects">
      <h2 className="slide-in-left">My Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card slide-in-right">
          <h3>ArtVault</h3>
          <p>An app that shows different collections of Art piaces made by Artists all over the world</p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
          <div className="project-links">
            <a href="#projects" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#projects" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card slide-in-left">
          <h3>EventsManger</h3>
          <p>An App that shows you the events near you that you can attend and the prices of the tickes for the events.</p>
          <div className="project-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>SQLAlchemy</span>
          </div>
          <div className="project-links">
            <a href="#projects" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#projects" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;