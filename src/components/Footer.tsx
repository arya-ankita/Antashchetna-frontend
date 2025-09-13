import React from 'react';
import { FaWhatsapp, FaFacebook, FaGoogle } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Address */}
        <div className="footer-column footer-address">
          <p>
            G-1 Ground Floor, Riddhi Siddhi Apartment,<br />
            Amar Kantak Enclave, Phool Bagh,<br />
            Gwalior, M.P. 474003
          </p>
        </div>

        {/* Column 2: Contact + Social */}
        <div className="footer-column footer-contact">
          <div>Tel: +91-6232500555</div>
          <div>Mon - Sun: 11am - 6pm</div>
          <div className="footer-social">
            <a href="https://wa.me/+916232500555" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/profile.php?id=100064010911920" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          </div>
        </div>

        {/* Column 3: Links */}
        <div className="footer-column footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Conditions</a>
          <a href="#cancellation">Cancellation and Refund Policy</a>
          <a href="#shipping">Shipping and Delivery</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
