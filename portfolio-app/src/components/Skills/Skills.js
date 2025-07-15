import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills fade-in" id="skills">
      <h2 className="slide-in-left">My Skills</h2>
      <div className="skills-container">
        <div className="skills-category slide-in-right">
          <h3>Frontend</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="skills-category slide-in-left">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skills-category slide-in-right">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;