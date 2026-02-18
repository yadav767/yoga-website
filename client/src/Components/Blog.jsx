import React, { useState,} from 'react';
import { ChevronRight,  BookOpen, Calendar } from 'lucide-react';


const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Healing Power of Pranayama",
      excerpt: "Discover how breath control techniques can transform your mental and physical health...",
      date: "February 10, 2026",
      image: "https://ik.imagekit.io/q0224i8bc/WhatsApp%20Image%202026-02-15%20at%205.39.36%20PM%20(1).jpeg"
    },
    {
      id: 2,
      title: "Building a Sustainable Yoga Practice",
      excerpt: "Learn how to create a yoga routine that fits your lifestyle and supports long-term growth...",
      date: "February 5, 2026",
      image:null
    },
    {
      id: 3,
      title: "Understanding the Eight Limbs of Yoga",
      excerpt: "Explore the philosophy behind yoga and how it extends beyond physical postures...",
      date: "January 28, 2026",
      image: null
    }
  ]);

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
          {posts.map((post) => (
            <article key={post.id} className={`blog-card ${flippedIds[post.id] ? 'is-flipped' : ''}`}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="blog-image">
                    {post.image ? (
                      <img src={post.image} alt={post.title} />
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
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a
                      href="#"
                      className="blog-link"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFlip(post.id);
                      }}
                    >
                      Read More <ChevronRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <h3>{post.title} — Details</h3>
                    <p>
                      This is the detailed view for the post. You can replace this text
                      with any content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. (Garbage details allowed per request.)
                    </p>
                    <p><strong>More info:</strong> Some extra dummy points and details.</p>
                    <button
                      className="blog-link-back"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFlip(post.id);
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