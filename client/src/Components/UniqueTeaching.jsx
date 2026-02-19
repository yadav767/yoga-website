import { useSelector } from 'react-redux';



const UniqueTeaching = () => {

  const {data}=useSelector((state)=>state.root)
  const technique=data.techniques


  return (
    <section className="unique-teaching-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What Sets Me Apart</span>
          <h2 className="section-title">What Makes My Teaching Unique</h2>
        </div>

        <div className="features-grid">
          {technique.map((tech, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={tech.image}  className="feature-icon"/>
              <h3>{tech.heading}</h3>
              <p>{tech.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueTeaching