import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Offerings = () => {
  const offerings = [
    {
      title: "Personal 1-on-1 Sessions",
      price: "Starting from ₹6,000/month",
      features: [
        "Customized practice tailored to your specific health goals and physical condition",
        "Flexible scheduling to fit your lifestyle",
        "Ideal for beginners, individuals with specific injuries, or those seeking profound personal growth",
        "Deep dive into asanas, pranayama, and meditation"
      ]
    },
    {
      title: "Group Classes",
      price: "Starting from ₹3,000/month per person",
      features: [
        "Engaging sessions in a supportive community environment",
        "Variety of yoga styles offered, including Hatha and Ashtanga",
        "Opportunities for shared learning and motivation",
        "Connect with like-minded individuals on their wellness journey"
      ],
      popular: true
    },
    {
      title: "Corporate Wellness Programs",
      price: "Custom Packages Available",
      features: [
        "Tailored yoga and mindfulness sessions for your employees",
        "Enhance team well-being, reduce stress, and boost productivity",
        "On-site or virtual options available",
        "Promote a culture of health and resilience within your organization"
      ]
    }
  ];

  return (
    <section className="offerings-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing & Packages</span>
          <h2 className="section-title">Invest in Your Well-being: My Yoga Offerings</h2>
          <p className="section-description">
            Discover flexible options designed to meet your personal goals or organizational needs.
            Each package is crafted to provide authentic yoga instruction and transformative experiences.
          </p>
        </div>

        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <div key={index} className={`offering-card ${offering.popular ? 'popular' : ''}`}>
              {offering.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{offering.title}</h3>
              <div className="offering-price">{offering.price}</div>
              <ul className="offering-features">
                {offering.features.map((feature, idx) => (
                  <li key={idx}><ChevronRight size={16} />{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-offering">Get Started</Link>
            </div>
          ))}
        </div>

        <div className="offerings-cta">
          <p>Ready to start your journey to holistic wellness?</p>
          <Link to="/contact" className="btn-primary">Contact Me Today</Link>
        </div>
      </div>
    </section>
  );
};

export default Offerings
