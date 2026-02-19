import { Heart, Leaf, Target } from 'lucide-react';
import { useSelector } from 'react-redux';


const Nutrition = () => {

  const { data } = useSelector((state) => state.root)
  const nutrition = data.nutritions

  return (
    <section className="nutrition-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Wellness Guidance</span>
          <h2 className="section-title">Holistic Nutrition & Lifestyle</h2>
        </div>

        <div className="nutrition-content">
          {nutrition.map((item, index) => (
            <div className="nutrition-card" key={index}>
              <h3>{item.heading}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nutrition