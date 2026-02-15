import { Heart, Leaf, Target} from 'lucide-react';


const Investment = () => {
  return (
    <section className="investment-section">
      <div className="container">
        <div className="section-header centered">
          <h2 className="section-title">Invest in Your Well-being</h2>
          <p className="section-description">
            Your health is your greatest wealth. Investing in yoga is investing in a lifetime of vitality, 
            peace, and resilience. Transform your life today.
          </p>
        </div>
        
        <div className="investment-cards">
          <div className="investment-card">
            <Heart className="investment-icon" />
            <h3>Mental Clarity</h3>
            <p>Reduce stress, anxiety, and mental clutter through meditation and mindfulness practices</p>
          </div>
          
          <div className="investment-card">
            <Leaf className="investment-icon" />
            <h3>Physical Health</h3>
            <p>Build strength, flexibility, and prevent injuries while healing existing conditions</p>
          </div>
          
          <div className="investment-card">
            <Target className="investment-icon" />
            <h3>Emotional Balance</h3>
            <p>Cultivate self-love, acceptance, and emotional regulation for lasting inner peace</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment