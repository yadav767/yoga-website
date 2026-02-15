import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-badge">Certified Yoga Instructor</div>
          <h1 className="hero-title">Rahul Shivshankar Yadav</h1>
          <p className="hero-subtitle">Transforming Lives Through Ancient Wisdom and Modern Understanding</p>
          <p className="hero-quote">"The body is your temple. Keep it pure and clean for the soul to reside in."</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn-primary">Begin Your Journey</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};


export default Hero