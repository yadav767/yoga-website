import {User } from 'lucide-react';


const Journey = () => {
  return (
    <section className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">My Story</h2>
        </div>
        
        <div className="journey-grid">
          <div className="journey-image">
            <div className="image-placeholder meditation-pose">
              <img src="https://ik.imagekit.io/q0224i8bc/WhatsApp%20Image%202026-02-15%20at%205.39.41%20PM%20(1).jpeg" alt="" />
            </div>
          </div>
          
          <div className="journey-content">
            <div className="journey-card challenge">
              <h3>The Challenge</h3>
              <p>
                My journey began with personal challenges—difficulty managing stress and chronic lower 
                back pain that affected my daily life.
              </p>
            </div>
            
            <div className="journey-card transformation">
              <h3>The Transformation</h3>
              <p>
                Through patient practice and deep exploration of yoga, I not only healed myself but 
                discovered my life's purpose. This transformation ignited my commitment to help others 
                unlock their potential and experience what's possible through authentic yoga practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey