import { ChevronRight, Heart, Leaf, Target} from 'lucide-react';


const ClientBenefits = () => {
  const benefits = {
    physical: [
      "Improved stress management",
      "Enhanced strength and flexibility",
      "Relief from lower back, knee, and postural issues",
      "Injury prevention and rehabilitation",
      "Increased energy and vitality"
    ],
    mental: [
      "Advanced meditation for awareness and inner peace",
      "Improved concentration and productivity",
      "Emotional regulation and mindfulness",
      "Self-love, healing, and acceptance",
      "Living with integrity and values"
    ],
    holistic: [
      "Pranayama for relaxation AND spiritual awakening",
      "Yogic lifestyle guidance (diet, habits, hygiene)",
      "Understanding yogic philosophies",
      "Complete approach: Achar, Vichar, Ahar, Vihar"
    ]
  };

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Value I Provide to Your Clients</h2>
          <p className="section-description">
            A complete transformation addressing body, mind, and spirit through evidence-based yoga practices and ancient wisdom.
          </p>
        </div>
        
        <div className="benefits-grid">
          <div className="benefit-category">
            <div className="benefit-header">
              <Heart className="benefit-icon" />
              <h3>Physical Benefits</h3>
            </div>
            <ul className="benefit-list">
              {benefits.physical.map((benefit, index) => (
                <li key={index}><ChevronRight size={16} />{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="benefit-category">
            <div className="benefit-header">
              <Target className="benefit-icon" />
              <h3>Mental & Emotional Benefits</h3>
            </div>
            <ul className="benefit-list">
              {benefits.mental.map((benefit, index) => (
                <li key={index}><ChevronRight size={16} />{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="benefit-category">
            <div className="benefit-header">
              <Leaf className="benefit-icon" />
              <h3>Holistic Wellness</h3>
            </div>
            <ul className="benefit-list">
              {benefits.holistic.map((benefit, index) => (
                <li key={index}><ChevronRight size={16} />{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBenefits
