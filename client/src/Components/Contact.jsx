import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";

import { Phone, Mail, Send } from 'lucide-react';
import { message } from 'antd'
import axios from 'axios';


const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    plan: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await axios.post("https://yoga-hq9u.onrender.com/api/form/submit", formData)
      if (response.data.status) {
        message.success(response.data.message)
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '', plan: '' });
        setSuccessMessage('Thanks for contacting us the message is sent to the instructor !');
        
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        message.error("Please provide proper details !")
      }
    } catch (error) {
      message.error("Please provide proper details!")
    }


  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header centered">
          <h2 className="section-title">Ready to Offer Your Clients a Truly Transformative Yoga Experience?</h2>
          <p className="section-description">
            Contact me to discuss how we can work together for your clients' wellbeing. Let's create a partnership
            that brings comprehensive, holistic wellness to those who need it most.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Reach Out</h3>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:9022216182">9022216182</a>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:yyadavrrahul@gmail.com">yyadavrrahul@gmail.com</a>
              </div>
            </div>

            <div className="contact-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Schedule Consultation</h4>
                <p>Let's explore how we can serve your clients together</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h4>Begin Partnership</h4>
                <p>Start transforming lives through holistic wellness</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Personal 1-on-1 Sessions">Personal 1-on-1 Sessions</option>
                <option value="Group Classes">Group Classes</option>
                <option value="Corporate Wellness Programs">Corporate Wellness Programs</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {successMessage && (
              <div style={{ color: 'green', marginBottom: '1rem' }} className="success-message">
                {successMessage}
              </div>
            )}

            <button type="submit" className="btn-submit">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact