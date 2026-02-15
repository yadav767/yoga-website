
import { Award, Leaf, BookOpen, User } from 'lucide-react';


import React from 'react'

const About = () => {
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
              <img src="https://ik.imagekit.io/q0224i8bc/WhatsApp%20Image%202026-02-15%20at%205.39.40%20PM%20(1).jpeg" alt="" />
            </div>
          </div>

          <div className="about-content">
            <h3>Rahul Shivshankar Yadav</h3>
            <p className="subtitle">Certified Yoga Instructor & Wellness Guide</p>
            <p className="bio">
              I am a passionate yoga practitioner dedicated to teaching holistic wellbeing through yoga asanas,
              pranayama, meditation, and yogic philosophies. For the past eight years, I have immersed myself
              in yoga philosophies and advanced meditation practices with deep curiosity and disciplined commitment.
            </p>

            <div className="credentials-grid">
              <div className="credential-card">
                <Award className="credential-icon" />
                <h4>900-Hour Certification</h4>
                <p>Advanced Yoga Teacher from The Yoga Institute (2023)</p>
              </div>

              <div className="credential-card">
                <Award className="credential-icon" />
                <h4>Jason Crandell Certified</h4>
                <p>Essential Applied Anatomy & Mastering Vinyasa Sequencing</p>
              </div>

              <div className="credential-card">
                <BookOpen className="credential-icon" />
                <h4>Psychology Student</h4>
                <p>Currently pursuing Bachelor's Degree</p>
              </div>

              <div className="credential-card">
                <Leaf className="credential-icon" />
                <h4>Specialized Expertise</h4>
                <p>Kriya Yoga, Hatha Yoga, Ashtanga Yoga, Advanced Pranayama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

