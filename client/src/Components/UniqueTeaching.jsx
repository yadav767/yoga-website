import { Users, Heart, Leaf } from 'lucide-react';


const UniqueTeaching = () => {
  const features = [
    {
      icon: <Heart />,
      title: "Comprehensive & Holistic",
      description: "Deep anatomical understanding with injury prevention, customized curriculum, integration of strength AND flexibility, both calming and energizing pranayama, powerful meditation practices, and yogic philosophies."
    },
    {
      icon: <Users />,
      title: "Empathic & Genuine",
      description: "Tailored instruction based on individual needs, patient and gentle approach respecting each person's unique journey, clear explanations ensuring deep understanding, special focus on beginners, elderly, and those with injuries."
    },
    {
      icon: <Leaf />,
      title: "Preventative Wellness",
      description: "Teaching yoga as preventative medicine to stay free from diseases, build a strong vital body aligned with nature's design, and maintain energy, calmness, and overall wellbeing."
    }
  ];

  return (
    <section className="unique-teaching-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What Sets Me Apart</span>
          <h2 className="section-title">What Makes My Teaching Unique</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueTeaching