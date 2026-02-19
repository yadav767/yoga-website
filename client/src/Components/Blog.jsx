import React, { useState, } from 'react';
import { useSelector } from 'react-redux';
import { ChevronRight, BookOpen, Calendar } from 'lucide-react';


const Blog = () => {


 

  const { data } = useSelector((state) => state.root);
  const [flippedIds, setFlippedIds] = useState({});

  const toggleFlip = (id) => {
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Insights & Wisdom</span>
          <h2 className="section-title">Blog</h2>
          <p className="section-description">Explore articles on yoga philosophy, wellness tips, and transformative practices</p>
        </div>

        <div className="blog-grid">
          {data.blogs.map((post, index) => (
            <article key={index} className={`blog-card ${flippedIds[post._id] ? 'is-flipped' : ''}`}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="blog-image">
                    {post.url ? (
                      <img src={post.url} alt={post.title} />
                    ) : (
                      <div className="blog-placeholder">
                        <BookOpen size={48} />
                      </div>
                    )}
                  </div>
                  <div className="blog-content">
                    <div className="blog-date">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <h3>{post.heading}</h3>
                    <p>{post.paragraph}</p>
                    <a
                      href="#"
                      className="blog-link"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFlip(post._id);
                      }}
                    >
                      Read More <ChevronRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <p>
                      {post.details}
                    </p>

                    <button
                      className="blog-link-back"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFlip(post._id);
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog