import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { data } = useSelector((state) => state.root)
  const intro = data.intros[0]
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      {intro.url ? <img src={intro.url} alt="hero" /> : null}
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-badge">Certified Yoga Instructor</div>
          {/* <h1 className="hero-title">Rahul Shivshankar Yadav</h1> */}
          <p className="hero-subtitle">"{intro.thought1}"</p>
          <p className="hero-quote">"{intro.thought2}"</p>
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