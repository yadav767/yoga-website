import {Heart, Leaf, Target} from 'lucide-react';


const Nutrition = () => {
  return (
    <section className="nutrition-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Wellness Guidance</span>
          <h2 className="section-title">Holistic Nutrition & Lifestyle</h2>
        </div>
        
        <div className="nutrition-content">
          <div className="nutrition-card">
            {/* <Leaf className="nutrition-icon" /> */}
            <h3>Sattvic Diet Principles</h3>
            <p>
              Embrace pure, wholesome foods that promote clarity, peace, and vitality. Learn the yogic approach 
              to nutrition that nourishes body, mind, and spirit.
            </p>
          </div>
          
          <div className="nutrition-card">
            {/* <Heart className="nutrition-icon" /> */}
            <h3>Mindful Eating Practices</h3>
            <p>
              Develop awareness around your relationship with food. Understand how mindful eating reduces stress, 
              improves digestion, and supports overall wellbeing.
            </p>
          </div>
          
          <div className="nutrition-card">
            {/* <Target className="nutrition-icon" /> */}
            <h3>Complete Lifestyle Balance</h3>
            <p>
              Integrate yogic principles into daily life through Achar (conduct), Vichar (thought), Ahar (diet), 
              and Vihar (lifestyle) for comprehensive wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition