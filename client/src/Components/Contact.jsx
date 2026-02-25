import React, { useState, } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { Phone, Mail, Send } from 'lucide-react';
import { message } from 'antd'
import axios from 'axios';


const Contact = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    plan: location.state?.selectedPlan || ''
  });
  const [successMessage, setSuccessMessage] = useState('');


  //Form validation function
  const validate = () => {
    if (!formData.fullName.trim()) {
      message.error("Please enter your full name!")
      return false
    }
    if (!formData.email.trim()) {
      message.error("Please enter your email!")
      return false
    }
    // email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      message.error("Please enter a valid email address!")
      return false
    }
    if (!formData.phoneNumber.trim()) {
      message.error("Please enter your phone number!")
      return false
    }
    // phone number format check
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phoneNumber)) {
      message.error("Please enter a valid 10 digit phone number!")
      return false
    }
    if (!formData.plan) {
      message.error("Please select a service!")
      return false
    }
    if (!formData.message.trim()) {
      message.error("Please enter your message!")
      return false
    }
    if (formData.message.trim().length < 10) {
      message.error("Message must be at least 10 characters!")
      return false

    }
    return true
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    if(!validate()) return 
    try {
      const response = await axios.post("http://localhost:3000/api/form/submit", formData)
      if (response.data.status) {
        message.success(response.data.message)
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '', plan: '' });
        setSuccessMessage('Thanks for contacting us the message is sent to the instructor !');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        message.error("Email already sent using this email !")
      }
    } catch (error) {
      message.error("Email already sent using this email !")
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
          <h2 className="section-title">Transform Your Mind, Body & Soul Through Authentic Yoga</h2>
          <p className="section-description">
            Whether you're a beginner or an experienced practitioner, I'm here to guide you every step of the way. Reach out and let's start your wellness journey together.
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
                <p>Let's find the perfect yoga practice tailored just for you</p>
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