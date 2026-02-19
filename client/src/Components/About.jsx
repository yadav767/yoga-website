
import { Award, Leaf, BookOpen, User } from 'lucide-react';


import React from 'react'
import { useSelector } from 'react-redux';

const About = () => {

  const { data } = useSelector((state) => state.root)
  const about = data.abouts[0]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who Am I</h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={about.url} alt="" />
            </div>
          </div>

          <div className="about-content">
            <h3>Rahul Shivshankar Yadav</h3>
            <p className="subtitle">Certified Yoga Instructor & Wellness Guide</p>
            <p className="bio">
              {about.para}
            </p>
            <div className="credentials-grid">
              {about.achievement.map((item, index) => (
                <div className="credential-card" key={index}>
                  <Award className="credential-icon" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About

