import React, { useState, useRef } from 'react';  // ✅ add useRef
import { useSelector } from 'react-redux';
import { ChevronRight, BookOpen, Calendar } from 'lucide-react';

const Blog = () => {
  const { data } = useSelector((state) => state.root);
  const [flippedIds, setFlippedIds] = useState({});

  // ✅ Drag scroll refs
  const sliderRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const toggleFlip = (id) => {
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const onMouseLeave = () => {
    isDragging.current = false
  }

  const onMouseUp = () => {
    isDragging.current = false
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Insights & Wisdom</span>
          <h2 className="section-title">Blog</h2>
          <p className="section-description">
            Explore articles on yoga philosophy, wellness tips, and transformative practices
          </p>
        </div>

        {/* ✅ attach ref and all drag handlers */}
        <div
          className="blog-grid"
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {data.blogs.map((post, index) => (
            <article
              key={index}
              className={`blog-card ${flippedIds[post._id] ? 'is-flipped' : ''}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="blog-image">
                    {post.url ? (
                      <img src={post.url} alt={post.heading} />
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
                    <p>{post.details}</p>
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

export default Blog;