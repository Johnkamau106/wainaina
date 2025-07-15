import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content fade-in">
        <h1 className="slide-in-left">Hi, I’m John Kamau — a Full-Stack Software Engineer who builds clean, impactful software.</h1>
        <div className="hero-buttons slide-in-right">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQeOhiu3EqA9C6Vx1uea3conbGfHaasWHl0IGtRkbEZehp1RJpKDEg7dAyPAJ-o819Ep8pI7MMsEKc0/pubf" className="btn btn-secondary" download>Download Resume</a>
        </div>
      </div>
      <div className="hero-avatar fade-in">
        <img src="/image.jpg" alt="John Kamau" />
      </div>
    </section>
  );
  
};

export default Hero;