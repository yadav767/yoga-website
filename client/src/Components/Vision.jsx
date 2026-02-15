import {ChevronRight,Leaf, Target, User } from 'lucide-react';


const Vision = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-content">
            <span className="section-label">Vision</span>
            <h2 className="section-title">My Vision</h2>
            <p className="vision-statement">
              To facilitate transformative experiences and holistic wellbeing—helping each individual discover 
              their true potential through the ancient science of yoga.
            </p>
            
            <div className="vision-pillars">
              <div className="vision-pillar">
                <Leaf className="pillar-icon" />
                <h4>Ancient Wisdom</h4>
                <p>Honoring traditional yogic practices and philosophies passed down through generations</p>
              </div>
              
              <div className="vision-pillar">
                <Target className="pillar-icon" />
                <h4>Modern Understanding</h4>
                <p>Integrating latest trends and scientific research in wellness and human potential</p>
              </div>
              
              <div className="vision-pillar">
                <ChevronRight className="pillar-icon" />
                <h4>Continuous Evolution</h4>
                <p>Always upgrading knowledge to bring the best of both worlds to those I serve</p>
              </div>
            </div>
          </div>
          
          <div className="vision-image">
            <div className="image-placeholder vision-pose">
              <img src="https://ik.imagekit.io/q0224i8bc/WhatsApp%20Image%202026-02-15%20at%205.39.15%20PM%20(2).jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision