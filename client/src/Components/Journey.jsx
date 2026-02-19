import {User } from 'lucide-react';
import { useSelector } from 'react-redux';


const Journey = () => {

  const {data}=useSelector((state)=>state.root)
  const story=data.stories[0]

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
              <img src={story.url} alt="" />
            </div>
          </div>
          
          <div className="journey-content">
            <div className="journey-card challenge">
              <h3>The Challenge</h3>
              <p>
                {story.challenge}
              </p>
            </div>
            
            <div className="journey-card transformation">
              <h3>The Transformation</h3>
              <p>
                {story.transformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey