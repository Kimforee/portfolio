// src/components/About.js
import React from 'react';
import './About.css';
import heroImage from '../assets/images/folio.svg';

const About = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <h1>Hello! I'm Keshav Singh</h1>
        <p>A web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and love to learn and explore new trends in web development.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default About;
