import {Phone, Mail, Leaf} from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Leaf size={32} />
            <h3>Yoga By Rahul</h3>
            <p>Transforming Lives Through Ancient Wisdom and Modern Understanding</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/offerings">Offerings</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><Phone size={16} /> 9022216182</p>
            <p><Mail size={16} /> yyadavrrahul@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Yoga By Rahul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer