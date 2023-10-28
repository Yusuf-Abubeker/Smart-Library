import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 className="footer-title">Children's Library</h2>
        </div>
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-item"><a href="/about" className="footer-link">About Us</a></li>
            <li className="footer-item"><a href="/contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} className="social-icon" /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} className="social-icon" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
