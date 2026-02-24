import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Offerings = () => {
  const navigate = useNavigate()
  const { data } = useSelector((state) => state.root)
  const offerings = data?.prices


  const handleSubmit = (title) => {
    navigate("/contact", { state: { selectedPlan: title } })
  }


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
              <button onClick={() => handleSubmit(offering.title)} className="btn-offering">Get Started</button>
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
